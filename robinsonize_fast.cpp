// UNIX
#include <sys/stat.h>

// C++
#include <iostream>
#include <string>
#include <exception>
#include <chrono>
#include <thread>
#include <locale>
#include <unistd.h>
using namespace std;

// project
#include "throw.h"
#include "engine_fast.h"
#include "integer_locale.h"

void print_usage(const char* arg0)
{
	cerr << "usage: " << arg0 << " -numerals <file> [-help] [-start <sentence start>] [-maxiter <count>] [-maxseed <number>] [-quiet|-verbose] [-mention_all] [-easy-parsing] [-id <id>]" << '\n';
	exit(EXIT_FAILURE);
}

int main (int argc, const char * argv[])
{
	int result {EXIT_SUCCESS};
	string start {"This sentence contains"};
	int maxiter {10};
	int maxseed {100};
	//string data_file {string {::getenv("HOME")} + "/etc/robinsonizer/en.txt"};
    string data_file("en.txt");
	unsigned int verbosity_level {1};
	bool mention_all {false};
	bool easy_parsing {false};
    int engine_id {getpid()};
	
	try {
		if (argc > 1) {
			// check args for usable settings
			for (int i = 1; i < argc; i++) {
				string arg {argv[i]};
				if (arg == "-start" && ++i < argc) {
					start = argv[i];
				} else if (arg == "-maxiter" && ++i < argc) {
					maxiter = abs(stoi(string{argv[i]}));
				} else if (arg == "-maxseed" && ++i < argc) {
					maxseed = stoi(string{argv[i]});
				} else if (arg == "-numerals" && ++i < argc) {
					data_file = argv[i];
				} else if (arg == "-quiet") {
					verbosity_level = 0;
				} else if (arg == "-verbose") {
					verbosity_level = 2;
				} else if (arg == "-mention_all") {
					mention_all = true;
				} else if (arg == "-easy-parsing") {
					easy_parsing = true;
				} else if (arg == "-id" && ++i < argc) {
					engine_id = stoi(string{argv[i]});
				} else {
					print_usage(argv[0]);
					break;
				}
			}
		} else if (verbosity_level) {
			cerr << "running with default values (use '-help' to see options):" << '\n';
		}
        struct stat st;
		int result {::stat(data_file.c_str(), &st)};
        if (result == -1 && errno == ENOENT) { // file does not exist
            cerr << "error: text file with numerals for given language not found at: " << data_file << '\n';
            print_usage(argv[0]);
        }
		if (verbosity_level) {
			cerr << "\tstart: " << start << '\n';
			cerr << "\tmaxiter: " << maxiter << '\n';
			cerr << "\tmaxseed: " << maxseed << '\n';
			cerr << "\tnumerals read from file: " << data_file << '\n';
			if (mention_all) {
				cerr << "\tmention all letters from the alphabet at least once" << '\n';
			} else {
				cerr << "\tonly mention letters from sentence start and numerals used" << '\n';
			}
		}
		engine_fast engine {start, maxiter, maxseed, data_file, verbosity_level, mention_all, easy_parsing, engine_id};
		if (verbosity_level) {
			locale loc {locale(), new integer_locale};
			cerr.imbue(loc);
			cout.imbue(loc);
			
			thread worker {[&engine](){engine.run();}};
			
			unsigned long long cur_iter {engine.total_iterations()};
			unsigned long long prev_iter {0};
			
			while (!engine.found()) { // show progress info
				prev_iter = cur_iter;
				this_thread::sleep_for(chrono::seconds{1});
				cur_iter = engine.total_iterations();
				if (easy_parsing) {
					cout << "ITER[" << engine_id << "] " << cur_iter - prev_iter << '\n';
					cout << "TOTL[" << engine_id << "] " << cur_iter << '\n';
				} else {
					cerr << '\r' << cur_iter - prev_iter << " iterations per second, " << cur_iter << " total        ";
				}
			}
			worker.join();
		} else {
			engine.run();
		}
		cout << '\n' << engine << '\n';
	} catch (const exception& ex) {
		cerr << ex.what() << endl;
		result = EXIT_FAILURE;
	}
    return result;
}

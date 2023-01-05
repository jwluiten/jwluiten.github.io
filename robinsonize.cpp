//#include "allstdcpp.h"
#include <iostream>
#include <sstream>
#include "engine.h"

using namespace std;


string			start("This sentence contains");
int				maxiter = 10;
int				maxseed = 99;
string			path("en.txt");
unsigned int	vl = 1;


void
print_usage(const char* arg0) {
    cerr << "usage: " << arg0 << " [-help] [-start <sentence start>] [-maxiter <count>] [-maxseed <number>] [-numerals <file>] [-quiet|-verbose]" << endl;
	exit(EXIT_FAILURE);
}


int
main (int argc, const char * argv[]) {
	int result = EXIT_SUCCESS;
	try {
		if (argc > 1) {
			// check args for usable settings
			for (int i = 1; i < argc; i++) {
				string arg(argv[i]);
				if (arg == "-start" && ++i < argc) {
					start = argv[i];
				} else if (arg == "-maxiter" && ++i < argc) {
					istringstream val(argv[i]);
					val >> maxiter;
					maxiter = abs(maxiter);
				} else if (arg == "-maxseed" && ++i < argc) {
					istringstream val(argv[i]);
					val >> maxseed;
					maxseed = min<int>(abs(maxseed), 99);
				} else if (arg == "-numerals" && ++i < argc) {
					path = argv[i];
				} else if (arg == "-quiet") {
					vl = 0;
				} else if (arg == "-verbose") {
					vl = 2;
				} else {
					print_usage(argv[0]);
					break;
				}
			}
		} else if (vl) {
			cerr << "running with default values (use '-help' to see options):" << endl;
		}
		if (vl) {
			cerr << "\tstart: " << start << endl;
			cerr << "\tmaxiter: " << maxiter << endl;
			cerr << "\tmaxseed: " << maxseed << endl;
			cerr << "\tnumerals read from file: " << path << endl;
		}
		engine engine(start, maxiter, maxseed, path, vl);
		engine.run();
		cout << engine.result() << endl;
	} catch (const exception& ex) {
		cerr << ex.what() << endl;
		result = EXIT_FAILURE;
	}
    return result;
}

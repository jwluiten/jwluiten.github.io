#include "engine.h"
#include <cstdlib>
#include <ctime>
#include <fstream>
#include <sstream>
#include <iostream>
#include <pthread.h>
#include <unistd.h>
#include "throw.h"

using namespace std;

const std::string alphabet("abcdefghijklmnopqrstuvwxyz");


static void* measurement_func(void* arg) { // arg should be engine object
	engine* eng = reinterpret_cast<engine*>(arg);
	cerr << endl;
	unsigned long long cur_iter = eng->total_iterations();
	static unsigned long long prev_iter;
	while (!eng->found()) {
		prev_iter = cur_iter;
        //this_thread::sleep_for(2);
		sleep(1);
		cur_iter = eng->total_iterations();
		cerr << '\r' << cur_iter - prev_iter << " iterations per second, " << cur_iter << " total\t";
	}
	return NULL;
}


engine::engine(std::string start,
			   int maxiter,
			   int maxseed,
			   std::string path,
			   unsigned int vl)
: _start(start),
_maxiter(maxiter),
_maxseed(maxseed),
_total_iterations(0),
_verbosity_level(vl),
_found(false)
{	
	// randomize
	srandom(time(NULL));
	
	// read numerals for desired language from text file, init letter frequency table
	ifstream file(path.c_str());
	string line;
	freqmap fm;
	char c;
	while (file.get(c)) {
		switch (c) {
			case '\n': { // eol => numeral complete
				_numerals.push_back(line);
				line.clear();
				_freq.push_back(fm);
				fm.clear();
				break;
			}
			default: {
				line += c;
				if (c >= 'a' && c <= 'z') {
					++fm[c];
				}
				break;
			}
		}
	}
	if (_verbosity_level > 1) {
		clog << numeral_frequencies();
	}
	
	// get letter frequencies from sentence start
	for (string::iterator i = start.begin(); i != start.end() ; i++) {
		char c = *i;
		
		// optionally translate upper- to lowercase
		const char up_lo_dif = 'a' - 'A';
		if (c >= 'A' && c <= 'Z') {
			c += up_lo_dif;
		}
		// skip non-alphabetical chars
		if (c >= 'a' && c <= 'z') {
			++_start_freq[c];
		}
	}
	
	// add letter frequencies for the word 'and' in the given language
	// (it's read in first from the file with numerals)
	for (string::iterator i = _numerals[0].begin(); i != _numerals[0].end(); i++) {
		char c = *i;
		// skip non-alphabetical chars
		if (c >= 'a' && c <= 'z') {
			++_start_freq[c];
		}
	}
	
	// add one for each letter in the alphabet (because they are all mentioned once)
//	for (string::const_iterator i = alphabet.begin(); i != alphabet.end(); i++) {
//		++_start_freq[*i];
//	}
}


void
engine::run() {	
	// if verbosity level is not quiet, we should emit iterations/sec on a regular basis
	if (_verbosity_level > 0) {
		pthread_t thread_id;
		throw_if_err(::pthread_create(&thread_id, NULL, measurement_func, this));
	}
	
	do {
		// setup
		int num_iter = 0;
		
		// create random seed vector
		for (string::const_iterator i = alphabet.begin(); i != alphabet.end(); i++) {
			int seed = rand() * _maxseed / RAND_MAX; // 0 ≤ seed ≤ _maxseed
			if (seed) {
				_old[*i] = seed;
			}
		}
		
		// logging, if desired
		if (_verbosity_level > 1) {
			clog << frequencies(_old);
		}
		
		do {
			// setup
			num_iter++;
			_total_iterations++;
			_new = _start_freq;
			
			// count letters in resulting sentence by incrementing result freqmap elements
			for (freqmap::iterator j = _old.begin(); j != _old.end(); j++) {
				freqmap num = _freq[j->second];
				for (freqmap::iterator k = num.begin(); k != num.end(); k++) {
					_new[k->first] += k->second;
				}
			}
			
			// increment frequency for 's' for every letter which occurs more than once,
			// and increment the count for every letter which is mentioned
			for (freqmap::iterator n = _new.begin(); n != _new.end(); n++) {
				if (n->second > 1) {
					_new['s']++;
				}
				_new[n->first]++;
			}
			
			// debug output, only if verbosity level is high enough
			if (_verbosity_level > 1) {
				clog << result() << endl;
			}
			
			// test if our result equals the previous one (if so, we found a valid sentence)
			_found = equal(_new.begin(), _new.end(), _old.begin());
			if (_found) {
				break;
			}
			if (num_iter == _maxiter) {
				break;
			} else {
				_old = _new;
			}
			
		} while (true);
		
	} while (!_found);
}


std::string
engine::result() const {
	ostringstream result;
	result << _start << " ";
	unsigned int cnt = 1;
	for (freqmap::const_iterator i = _new.begin(); i != _new.end(); i++, cnt++) {
		if (cnt == _new.size()) {
			result << _numerals[0] << " ";
		}
		result << _numerals[i->second] << " " << i->first;
		if (i->second > 1) {
			result << "'s";
		}
		if (cnt != _new.size()) {
			result << ", ";
		}
	}
	result << ".";
	return result.str();
}


std::string
engine::frequencies(const freqmap& fm) const {
	ostringstream result;
	unsigned int m = 1;
	for (freqmap::const_iterator j = fm.begin(); j != fm.end(); j++, m++) {
		result << j->first << " (" << j->second << ")";
		if (m != fm.size()) {
			result << ", ";
		}
	}
	result << endl;
	return result.str();
}


std::string
engine::numeral_frequencies() const {
	ostringstream result;
	unsigned int n = 0;
	for (vector<freqmap>::const_iterator i = _freq.begin(); i != _freq.end(); i++, n++) {
		result << _numerals[n] << ": ";
		result << frequencies(*i);
	}
	return result.str();
}


unsigned long long
engine::total_iterations() const {
	return _total_iterations;
}

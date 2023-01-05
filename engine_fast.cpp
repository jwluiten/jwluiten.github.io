// C++
#include <iostream>
#include <string>
#include <fstream>
using namespace std;

// Project
#include "engine_fast.h"
#include "throw.h"
#include "integer_locale.h"

const int s_index = 's' - 'a';

engine_fast::engine_fast(std::string start,
						 int maxiter,
						 int maxseed,
						 std::string path,
						 unsigned int vl,
						 bool mention_all,
						 bool easy_parsing,
						 int engine_id) :
_start {start},
_maxiter {maxiter},
_verbosity_level {vl},
_mention_all {mention_all},
_easy_parsing {easy_parsing},
_engine_id {engine_id}
{
	try {
		// read numerals for desired language from text file, init letter frequency table
		ifstream file {path};
		string line;
		while (getline(file, line)) {
			_numerals.push_back(line);
		}
		
		// setup random distribution
		_dist.param(uniform_int_distribution<>::param_type {0, min<int>(abs(maxseed), _numerals.size())});
		
		// now we know how many numerals we have, so we can allocate our efficient buffers
		throw_if_null(_freq = (int**)::calloc(_numerals.size(), sizeof(int*)));
		unsigned int n;
		for (n = 0; n < _numerals.size(); n++) {
			throw_if_null(_freq[n] = (int*)::calloc(26, sizeof(int)));
		}
		throw_if_null(_start_freq = (int*)::calloc(26, sizeof(int)));
		throw_if_null(_old = (int*)::calloc(26, sizeof(int)));
		throw_if_null(_new = (int*)::calloc(26, sizeof(int)));
		
		// TODO make them like this:
//		vector<int> start_freq;
//		start_freq.resize(26, 0);
//		_start_freq = start_freq.data();
		
		// init numeral letter frequency table
		for (n = 0; n < _numerals.size(); n++) {
			for (char c : _numerals[n]) {
				if (c >= 'a' && c <= 'z') {
					++_freq[n][c - 'a'];
				}
			}
		}
		if (_verbosity_level > 1) {
			numeral_frequencies(cerr);
		}
		
		// get letter frequencies from sentence start
		for (char c : start) {
			// optionally translate upper- to lowercase
			const char up_lo_dif = 'a' - 'A';
			if (c >= 'A' && c <= 'Z') {
				c += up_lo_dif;
			}
			// skip non-alphabetical chars
			if (c >= 'a' && c <= 'z') {
				++_start_freq[c - 'a'];
			}
		}
		// add letters from 'and', reset 'and' vector
		for (n = 0; n < 26; n++) {
			_start_freq[n] += _freq[0][n];
			_freq[0][n] = 0;
		}
	} catch (...) {
		cleanup();
		throw;
	}
}


void engine_fast::run()
{
	do {
		// setup
		int num_iter = 0;
		unsigned int k, n;
		
		// create random seed vector
		for (n = 0; n < 26; n++) {
			_old[n] = _dist(_random_engine);
		}
		
#if DEBUG
		// logging, if desired
		if (_verbosity_level > 1) {
			frequencies(cerr, const_cast<const int*>(_old));
		}
#endif
		
		do {
			// setup
			num_iter++;
			_total_iterations++;
			::memcpy(_new, _start_freq, 26 * sizeof(int));
			
			// count letters in resulting sentence by incrementing result freqmap elements
			for (n = 0; n < 26; n++) {
				if (_old[n] < _numerals.size()) {
					int* p = _freq[_old[n]];
					for (k = 0; k < 26; k++) {
						_new[k] += p[k];
					}
				} else {
					char c = 'a' + n;
					if (_easy_parsing) {
						cout << "OVFL[" << _engine_id << "] " << c << " (" << _old[n] << ")" << endl;
					} else {
						cerr << endl << "overflow: " << c << " (" << _old[n] << ")";
					}
					break;
				}
			}
			
			// increment frequency for 's' for every letter which occurs more than once,
			// and increment the count for every letter which is (or should be) mentioned
			for (n = 0; n < 26; n++) {
				if (_mention_all || _new[n]) {
					++_new[n];
				}
				if (_new[n] > 1) {
					++_new[s_index];
				}
			}
			
#if DEBUG
			// debug output, only if verbosity level is high enough
			if (_verbosity_level > 1) {
				write_result(cerr);
				cerr << endl;
			}
#endif
			
			// test if our result equals the previous one (if so, we found a valid sentence)
			_found = ::memcmp(_new, _old, 26 * sizeof(int)) == 0;
			
			if (_found) {
				break;
			}
			if (num_iter == _maxiter) {
				break;
			} else {
				::memcpy(_old, _new, 26 * sizeof(int));
			}
			
		} while (true);
		
	} while (!_found);
}

void engine_fast::frequencies(ostream& os, const int fm[]) const
{
	bool output = false;
	for (unsigned int n = 0; n < 26; n++) {
		if (fm[n]) {
			if (output) {
				os << ", ";
			}
			char c = n + 'a';
			os << c << " (" << fm[n] << ")";
			output = true;
		}
	}
	os << endl;
}

void engine_fast::numeral_frequencies(ostream& os) const
{
	unsigned int n = 0;
	for (unsigned int i = 0; i < _numerals.size(); i++) {
		os << _numerals[i] << ": ";
		frequencies(os, _freq[i]);
	}
}

void engine_fast::cleanup()
{
	if (_new) {
		::free(_new);
	}
	if (_old) {
		::free(_old);
	}
	if (_start_freq) {
		::free(_start_freq);
	}
	if (_freq) {
		for (unsigned int n = 0; n < _numerals.size(); n++) {
			if (_freq[n]) {
				::free(_freq[n]);
			}
		}
		::free(_freq);
	}
}

engine_fast::~engine_fast()
{
	cleanup();
}

void engine_fast::write_result(ostream& os) const
{
	if (_easy_parsing) {
		os << "RSLT[" << _engine_id << "] ";
	}
	os << _start << " ";
	unsigned int n;
	unsigned int first = 0;
	unsigned int last = 25;
	bool first_found = false;
	for (n = 0; n < 26; n++) { // pre-scan
		if (_new[n]) {
			if (!first_found) {
				first = n;
				first_found = true;
			}
			last = n;
		}
	}
	for (n = 0; n < 26; n++) {
		if (_new[n]) {
			if (n == last) {
				os << " " << _numerals[0] << " ";
			} else if (n > first) {
				os << ", ";
			}
			char c = n + 'a';
			os << _numerals[_new[n]] << " " << c;
			if (_new[n] > 1) {
				os << "'s";
			}
		}
	}
	os << ".";
}

ostream& operator<<(ostream& os, const engine_fast& engine) {
	engine.write_result(os);
	return os;
}

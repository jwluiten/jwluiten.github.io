#ifndef __engine_fast__
#define __engine_fast__

#include <string>
#include <vector>
#include <ostream>
#include <random>

class engine_fast {
public:
	engine_fast(std::string start,
				int maxiter,
				int maxseed,
				std::string path,
				unsigned int vl,
				bool mention_all,
				bool easy_parsing,
				int engine_id);
	~engine_fast();
	
	engine_fast() = delete;
	engine_fast(const engine_fast&) = delete;
	engine_fast& operator=(const engine_fast&) = delete;
	engine_fast(engine_fast&&) = delete;
	engine_fast& operator=(engine_fast&&) = delete;

	void run();
	void write_result(std::ostream& os) const;
	void frequencies(std::ostream& os, const int fm[]) const;
	void numeral_frequencies(std::ostream& os) const;
	unsigned long long total_iterations() const {return _total_iterations; }
	bool found() const { return _found; }
	
protected:
	std::string							_start;
	int									_maxiter;
	unsigned long long					_total_iterations {0};
	std::vector<std::string>			_numerals;
	int**								_freq;
	int*								_start_freq;
	int*								_old;
	int*								_new;
	unsigned int						_verbosity_level;
	bool								_found {false};
	bool								_mention_all;
	bool								_easy_parsing;
	int									_engine_id;
	std::default_random_engine			_random_engine {std::random_device {}()};
	std::uniform_int_distribution<int>	_dist;
	
private:
	void cleanup();
};

std::ostream& operator<<(std::ostream& os, const engine_fast& engine);

#endif // __engine_fast__

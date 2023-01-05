#ifndef __engine__
#define __engine__

#include <string>
#include <vector>
#include <map>

typedef std::map<char, int> freqmap;

//void measurement_func(void* arg);

class engine {
public:
	engine(std::string start,
		   int maxiter,
		   int maxseed,
		   std::string path,
		   unsigned int vl);
	
	void run();
	std::string result() const;
	std::string frequencies(const freqmap& fm) const;
	std::string numeral_frequencies() const;
	unsigned long long total_iterations() const;
	bool found() const { return _found; }
	
protected:
	std::string					_start;
	int							_maxiter;
	int							_maxseed;
	unsigned long long			_total_iterations;
	std::vector<std::string>	_numerals;
	std::vector<freqmap>		_freq;
	freqmap						_start_freq;
	freqmap						_old;
	freqmap						_new;
	unsigned int				_verbosity_level;
	bool						_found;
	
private:
	engine();
	engine(const engine&);
	engine& operator=(const engine&);
};

#endif // __engine__

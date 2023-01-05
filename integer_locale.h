//
//  integer_locale.h
//  locales
//
//  Created by Bob Polis on 13-05-2012.
//  Copyright (c) 2012 Thalictrum. All rights reserved.
//

#ifndef locales_integer_locale_h
#define locales_integer_locale_h

class integer_locale : public std::numpunct<char> {
public:
    typedef char char_type;
    typedef std::string string_type;
    
    explicit integer_locale(size_t r = 0) : std::numpunct<char>(r) {}
    
protected:
    char do_decimal_point() const { return ','; }
    char do_thousands_sep() const { return '.'; }
    std::string do_grouping() const { return "\003"; }
};

#endif

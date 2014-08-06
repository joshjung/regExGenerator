regExGenerator
==============

Generates a regular expression based on a given string and complexity value.

Installation
------------

    npm install -S regexgenerator

Testing
-------

Testing is written to be run via `mocha`.

Example from testing output:

    1: /four\s+score\s+years\s+ago/
          ✓ /four\s+score\s+years\s+ago/ should matche "four score years ago" 
        generate("four score years ago",0.2)
    2: /four\s+..ore\s+years\s+ago/
          ✓ /four\s+..ore\s+years\s+ago/ should matche "four score years ago" 
        generate("four score years ago",0.30000000000000004)
    3: /fo..\s+sco..\s+years\s+.go/
          ✓ /fo..\s+sco..\s+years\s+.go/ should matche "four score years ago" 
        generate("four score years ago",0.4)
    4: /....\s+(sc)+.(re)+\s+(yea)+rs\s+ago/
          ✓ /....\s+(sc)+.(re)+\s+(yea)+rs\s+ago/ should matche "four score years ago" 
        generate("four score years ago",0.5)
    5: /.our\s+..o..\s+yea(rs)+\s+a+(go)+/
          ✓ /.our\s+..o..\s+yea(rs)+\s+a+(go)+/ should matche "four score years ago" 
        generate("four score years ago",0.6)
    6: /.(.|o|o+)..\s+(sco)+re\s+y+ears\s+a(go)+/
          ✓ /.(.|o|o+)..\s+(sco)+re\s+y+ears\s+a(go)+/ should matche "four score years ago" 
        generate("four score years ago",0.7)
    7: /..[a-z][a-z]\s+(sco)+..\s+y(ea|(ea)+)rs\s+a+(go)+/
          ✓ /..[a-z][a-z]\s+(sco)+..\s+y(ea|(ea)+)rs\s+a+(go)+/ should matche "four score years ago" 
        generate("four score years ago",0.7999999999999999)
    8: /....\s+(.co|sco|s(co)+)(re)+\s+(yea)+(rs)+\s+[a-z](go)+/
          ✓ /....\s+(.co|sco|s(co)+)(re)+\s+(yea)+(rs)+\s+[a-z](go)+/ should matche "four score years ago" 
        generate("four score years ago",0.8999999999999999)
    9: /....\s+(..|[a-z][a-z]).(re)+\s+y+ea(rs)+\s+a+go/
          ✓ /....\s+(..|[a-z][a-z]).(re)+\s+y+ea(rs)+\s+a+go/ should matche "four score years ago" 

Example
-------

    var RegExGenerator = require('regexgenerator');
    var regExp = new RegExGenerator().generate('some random string', 0.5);
    console.log(regExp.toString());

License
-------

The MIT License (MIT)

Copyright (c) 2014 Joshua Jung

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

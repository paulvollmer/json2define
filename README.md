# json2define [![Build Status](https://travis-ci.org/paulvollmer/json2define.svg?branch=master)](https://travis-ci.org/paulvollmer/json2define)

This tool parse a json file and create for each item a `#define itemX "variableY"` code-line.  
This can be useful if you want to include some json data into a c or c++ application.

**At the moment this tool is proof of concept software!**


## Installation

Install over npm:

    npm install git://github.com/paulvollmer/json2define.git#v0.1.0


## Usage

To run the tool execute the following command:

    json2define --input "path/to/file.json"


## Frontend

You can find a web-frontend at http://paulvollmer.github.io/json2define


## Development

Clone the repository and install the dependencies by running:

    git clone https://github.com/paulvollmer/json2define.git
    cd json2define
    npm install


## License

Copyright (c) 2014 Paul Vollmer. See the LICENSE file for license rights and limitations (MIT).

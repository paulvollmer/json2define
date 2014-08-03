# json2define

This tool parse a json file and create for each item a `#define itemX "variableY"` code-line.  
This can be useful if you want to include some json data into a c or c++ application.

**At the moment this tool is proof of concept software!**


## Installation


## Usage

To run the tool execute the following command:

    node bin/json2define --input your.json


## Development

Clone the repository and install the dependencies by running:

    git clone https://github.com/FH-Potsdam/json2define.git
    cd json2define
    npm install


## Roadmap

- if a "-" is used at a json item, replace it with "_"
- arrays names not set to define names
- opensource it to github
- create gh-page
- web frontend
- release to npm


## License

Copyright (c) 2014 Paul Vollmer. See the LICENSE file for license rights and limitations (MIT).

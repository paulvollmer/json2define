# json2define

Parse a json file and create for each item a `#define itemX "variableY"` line.  
This can be useful if you want to include some json data into a c or c++ application.

**At the moment this tool is proof of concept software!**


## Installation


## Usage

To run the tool execute the following sample command:

    node bin/json2define -i your.json


## Roadmap

- if an "-" is used at a json item, replace with "_"
- arrays names not set to define names
- opensource it to github
- create gh-page
- web frontend
- release to npm


## License

Copyright (c) 2014 Paul Vollmer. See the LICENSE file for license rights and limitations (MIT).

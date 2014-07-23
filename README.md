# list-directory-contents

Implements `ls -R` for Node.js.

## Installation

```sh
$ npm install merge-defaults
```

## Usage

```javascript
var ls = require('list-directory-contents');

ls('./', function (err, tree) {
  
  // NOTE:
  // everything ending in `/` in the output below is a path to a directory
  // all other paths are to files
  
  
  // `tree` =>
  [
    'index.js',
    'README',
    'package.json',
    'CONTRIBUTING.md',
    'node_modules/',

    'node_modules/lodash/',
    'node_modules/async/',
    'node_modules/fs-extra/',

    'node_modules/fs-extra/index.js',
    'node_modules/fs-extra/lib/',
    'node_modules/fs-extra/node_modules/'
  ];
  
});
```

## Why?

This module is merely a convenience-- @daaku did the hard work :)

It's just a thin wrapper for [walker](https://github.com/daaku/nodejs-walker) that presents a minimalist API.  For EventEmitter usage (with built-in file vs. dir parsing), please use [walker](https://github.com/daaku/nodejs-walker) directly.  See https://github.com/jprichardson/node-fs-extra/issues/63#issuecomment-49733873 for more info on motivations/goals.


## License

MIT &copy; Mike McNeil 2014

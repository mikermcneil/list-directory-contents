/**
 * Module dependencies
 */

var path = require('path');
var assert = require('assert');
var fsx = require('fs-extra');
var ls = require('../');




describe('ls() used on an empty directory', function () {

  var EMPTY_DIR = path.resolve(__dirname, './.tmp');

  before(function (done) {
    fsx.mkdirp(EMPTY_DIR, done);
  });

  it('should return an empty array', function (done){
    ls(EMPTY_DIR, function (err, tree) {
      if (err) return done(err);
      assert.equal(tree.length, 0);
      done();
    });
  });

  after(function (done) {
    fsx.remove(EMPTY_DIR, done);
  });

});




describe('ls() used on a big fat directory', function () {

  var BIG_FAT_DIR = path.resolve(__dirname, './fixtures/app');

  it('should return a flat array containing all files and subdirectories', function (done){
    ls(BIG_FAT_DIR, function (err, tree) {
      if (err) return done(err);
      assert(tree.length > 10, 'Should be at least 10 things in the result `tree` with a directory THAT fat');
      done();
    });
  });



  // This has been hand-tested and works as of july 22, but needs a proper test
  it('should not traverse symbolic links');

});

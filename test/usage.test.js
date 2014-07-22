/**
 * Module dependencies
 */

var assert = require('assert');
var fsx = require('fs-extra');
var ls = require('../');




describe('ls() used on an empty directory', function () {

  before(function (done) {
    fsx.mkdirp('./.tmp', done);
  });

  it('should return an empty array', function (done){
    ls('./.tmp', function (err, tree) {
      if (err) return done(err);
      assert.equal(tree.length, 0);
      done();
    });
  });

});

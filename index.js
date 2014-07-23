/**
 * Module dependencies
 */

var walker = require('walker');



/**
 * [exports description]
 * @param  {[type]}   dir [description]
 * @param  {Function} cb  [description]
 * @return {[type]}       [description]
 */

module.exports = function ls (dir, cb) {

  var spinlock;
  var results = [];

  walker(dir)
  .on('entry', function (entry, stat) {
    // Don't include top-level directory (`dir`) in result `tree`
    if (entry===dir) return;

    results.push(entry);
  })
  .on('error', function (err){
    if (spinlock) return;
    spinlock = true;
    return cb(err);
  })
  .on('end', function (){
    if (spinlock) return;
    spinlock = true;
    return cb(null, results);
  });

};

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

  walker(dir).on('entry', function (entry, stat) {
    console.log('!', 'entry:',entry, 'stat:',stat);
  })
  .on('error', function (){
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

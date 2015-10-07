var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.length = 0;
  newQueue.oldest = 0;
  extend(newQueue, queueMethods);
  return newQueue;
};

var queueMethods = {};

var extend = function(to, from) {
  for(var key in from) {
    to[key] = from[key];
  }
};

queueMethods.size = function() {
  return this.length;
};

queueMethods.enqueue = function(val) {
  this.length++;
  this[this.length + this.oldest] = val;
};

queueMethods.dequeue = function() {
  if(this.length > 0) {
    this.oldest++;
    var temp = this[this.oldest];
    delete this[this.oldest];
    this.length--;
    return temp;
  }
};

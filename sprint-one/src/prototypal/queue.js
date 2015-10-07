var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.length = 0;
  newQueue.oldest = 0;
  return newQueue;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.length;
}

queueMethods.enqueue = function(value) {
  this.length++;
  this[this.length + this.oldest] = value;
}

queueMethods.dequeue = function () {
  var temp;
  if (this.length > 0) {
    this.length--;
    this.oldest++;
    temp = this[this.oldest];
    delete this[this.oldest];
  }
  return temp;
}

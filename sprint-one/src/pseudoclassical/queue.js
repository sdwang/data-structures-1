var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //this = Object.create(Queue.prototype);
  this.length = 0;
  this.oldest = 0;
};

Queue.prototype.size = function() {
  return this.length;
};

Queue.prototype.enqueue = function(val) {
  this.length++;
  this[this.length + this.oldest] = val;
};

Queue.prototype.dequeue = function() {
  var temp;
  if(this.length > 0) {
    this.oldest++;
    temp = this[this.oldest];
    delete this[this.oldest];
    this.length--;
  }
  return temp;
}

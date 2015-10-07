var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.length = 0;
};

 Stack.prototype.size = function() {
  return this.length;
 }

 Stack.prototype.push = function(value) {
  this.length++;
  this[this.length] = value;
 }

 Stack.prototype.pop = function() {
  var temp;
  if (this.length > 0) {
    temp = this[this.length];
    delete this[this.length];
    this.length--;
  }
  return temp;
 }

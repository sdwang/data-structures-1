var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.length = 0;
  return newStack;
};

var stackMethods = {};

stackMethods.size = function() {
  return this.length;
};

stackMethods.push = function(val) {
  this.length++
  this[this.length] = val;
};

stackMethods.pop = function() {
  var temp;
  if(this.length > 0) {
    temp = this[this.length];
    delete this[this.length];
    this.length--;
  }
  return temp;
};

var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack.length = 0;
  extend(newStack, stackMethods);
  return newStack;
};

var extend = function (to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
}

var stackMethods = {};

stackMethods.size = function() {
  return this.length;
}

stackMethods.push = function(value) {
  this.length++;
  this[this.length] = value;
}

stackMethods.pop = function() {
  var temp;
  if (this.length > 0) {
    temp = this[this.length];
    delete this[this.length];
    this.length--;
  }
  return temp;
}

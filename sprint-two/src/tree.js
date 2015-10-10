var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  newTree.children = [];
  extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
}

treeMethods.addChild = function(value) {
  // a child needs a value, and possible childen
  this.children.push(Tree(value));
};

treeMethods.contains = function(target, isTrue) {
  if (isTrue) { return true; }
  isTrue = (this.value === target);
  for (var i = 0; i < this.children.length; i++) {
    // call contains on childen[i]
    isTrue = this.children[i].contains(target, isTrue);
  }
  return isTrue;
};



/*
 * Complexity: What is the time complexity of the above functions?
    1) extend() is linear time. O(n)
      Looking up keys is done in constant time, but looping using
      for (var key in from) is a linear operation.
    
    2) addChild() is constant time. O(1)

    3) contains() is linear time. O(n)
       contains() looks through each node one by one.

    4) Tree() is linear time. O(n)
       extend() is necessarily called within Tree every time.
 */

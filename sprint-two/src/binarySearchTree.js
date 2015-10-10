var BinarySearchTree = function(value) {
  var newTree = Object.create(BinarySearchTree.methods);
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  return newTree;
};

BinarySearchTree.methods = {};

BinarySearchTree.methods.insert = function(newVal) {
  if(newVal < this.value && this.left === null) {
    this.left = BinarySearchTree(newVal);
  } else if(newVal < this.value) {
    this.left.insert(newVal);
  } else if(newVal > this.value && this.right === null) {
    this.right = BinarySearchTree(newVal);
  } else if(newVal > this.value) {
    this.right.insert(newVal);
  }
};

BinarySearchTree.methods.contains = function(value, isFound) {
  if (isFound) { return true; }
  isFound = (this.value === value);
  if (this.right === null && value > this.value) {
    return false;
  } else if(value > this.value) {
    isFound = this.right.contains(value, isFound);
  } else if(this.left === null && value < this.value) {
    return false;
  } else if(value < this.value) {
    isFound = this.left.contains(value, isFound);
  }
  return isFound;
};

BinarySearchTree.methods.depthFirstLog = function(cb, arr) {
  cb(this.value);
  if ( this.left !== null ) {
    this.left.depthFirstLog(cb);
  }
  if ( this.right !== null ) {
    this.right.depthFirstLog(cb);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
    1) BinarySearchTree() is constant time. O(1)

    2) insert() is logarithmic time. O(log n)
       By halving the search size each time via right/left, we reduce
       iterative search time.

    3) contains() is logarithmic time. O(log n)

    4) depthFirstLog is linear time. O(n)
       Recursively call callback on every node in the tree.   
 */

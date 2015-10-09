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
  console.log('value:', value, 'this:',this,'this.value', this.value);
  debugger;
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

BinarySearchTree.methods.depthFirstLog = function(cb) {

};

/*
 * Complexity: What is the time complexity of the above functions?
 */

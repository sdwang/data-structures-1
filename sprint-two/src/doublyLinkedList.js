//JS!

var DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
};

DoublyLinkedList.prototype.addToTail = function(value) {
  //Create new node variable
  var newNode = this.node(value);
  //If there's no head, make it the head
  if(this.head === null) {
    this.head = newNode;
  };
  //If there is a tail, make the tail's .next = node
    //node's previous = the old tail
  if(this.tail !== null) {
    newNode.previous = this.tail;
    this.tail.next = newNode;
  }
  //Make the new node the new tail
  this.tail = newNode;
};

DoublyLinkedList.prototype.removeHead = function() {
  //temporarily save the oldhead's.next node and it's value
  var newHead = this.head.next || null;
  var oldHeadValue = this.head.value;
  //if the oldhead was also the tail, then the new head is the new tail
  if(this.tail === this.head) {
    this.tail = newHead;
  };
  //set the new head to head.next
  this.head = newHead;
  
  //set the new head's previous to null
  if (this.head !== null) {
    this.head.previous = null;
  }
  //return the old head's value
  return oldHeadValue;
};

DoublyLinkedList.prototype.contains = function(value, node) {
  //Start at head
  if(node === undefined) {
    node = this.head;
  }
  //Check value at head
  if(node.value === value) {
    return true
  } else if (this.tail === node) {
    return false;
  } else {
    return this.contains(value, node.next);
  }
};

DoublyLinkedList.prototype.node = function(val) {
  //creates a node {}
  var newNode = {};
  //sets the value as a key and value pair
  newNode.value = val;
  newNode.previous = null;
  newNode.next = null;
  //returns a node {}
  return newNode;
}
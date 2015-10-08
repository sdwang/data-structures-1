var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // addToTail must invoke Node() to make new nodes
    var newNode = Node(value);
    
    // if list has no head, this is head (forever)
    if (list.head === null) {
      list.head = newNode;
    }
    
    // previous tail points to this new tail
    if (list.tail !== null) {
      list.tail.next = newNode;
    }
    
    // new values are the tail
    list.tail = newNode;
  };

  list.removeHead = function() {
    // create temp value to hold head's next
    var newHead = list.head.next;
    var oldHead = list.head.value;
    // remove current head
    delete list.head;
    // head becomes next node
    list.head = newHead;
    return oldHead;
  };

  list.contains = function(target) {
    // iterative crawl along list
    var currentNode = list.head;
    while(true) {
      // keeps going until returns boolean at tail
      if (currentNode === list.tail) {
        if (currentNode.value === target) { return true; }
        return false;
      }
      // return true if target is found
      if (currentNode.value === target) { return true; }
      currentNode = currentNode.next;
    }
    

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var length = 0;
  var queue = 0;
  var temp;

  someInstance.enqueue = function(value) {
    length++;
    storage[length+queue] = value;
  };

  someInstance.dequeue = function() {
    if (length > 0) { 
      length--;
    }
    queue++;
    temp = storage[queue];
    delete storage[queue];
    return temp;
  };

  someInstance.size = function() {
    return length;
  };

  return someInstance;
};

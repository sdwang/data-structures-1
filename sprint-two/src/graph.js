

// ------------------------
// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = {};
  this.nodes[node].value = node;
  this.nodes[node].edges = [];
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if(this.nodes[node] !== undefined) {
    return true;
  }
  return false;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.nodes[node];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if(this.nodes[fromNode].edges.indexOf(toNode) > -1 && this.nodes[toNode].edges.indexOf(fromNode) > -1) {
    return true;
  } else {
    return false;
  }
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].edges.push(toNode);
  this.nodes[toNode].edges.push(fromNode);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var index = this.nodes[fromNode].edges.indexOf(toNode);
  this.nodes[fromNode].edges[index] = undefined;
  index = this.nodes[toNode].edges.indexOf(fromNode);
  this.nodes[toNode].edges[index] = undefined;
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for(var key in this.nodes) {
    cb(this.nodes[key].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
    1) addNode() is constant time. O(1)

    2) contains() is constant time. O(1)

    3) removeNode() is constant time. O(1)

    4) hasEdge() is constant time. O(1)

    5) addEdge() is constant time. O(1)

    6) removeEdge() is linear time. O(n)
       Finding index using indexOf() requires iterative lookup.

    7) forEachNode() is linear time. O(n)
       Iterating over keys in this.nodes is a linear operation.
 */
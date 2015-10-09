

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if ( this._storage[index] === undefined ) { this._storage[index] = []; }
  var bucket = this._storage[index];
  for ( var i = 0; i < bucket.length; i++ ) {
    if ( bucket[i][0] === k ) { var place = bucket[i]; }
  }
  if ( place ) {
    place[1] = v;
  } else {
    this._storage[index].push( [k, v] );
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];
  for ( var i = 0; i < bucket.length; i++ ) {
    if ( bucket[i] === undefined ) { return null; }
    if ( bucket[i][0] === k ) { return bucket[i][1]; }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];
  for ( var i = 0; i < bucket.length; i++ ) {
    if ( bucket[i][0] === k ) { bucket[i] = undefined; }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */



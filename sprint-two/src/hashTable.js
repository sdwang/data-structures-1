

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if ( this._storage[index] === undefined ) { this._storage[index] = []; }
  var tuple = this.find(k);
  if ( tuple ) { tuple[1] = v; }
  this._storage[index].push( [k, v] );
};

HashTable.prototype.retrieve = function(k) {
  var tuple = this.find(k);
  return tuple[1];
};

HashTable.prototype.remove = function(k) {
  var tuple = this.find(k);
  tuple[1] = null;
};

HashTable.prototype.find = function (k) {
  // afterwards var x = this.find(k) === 'tuple'
  // thus x[0] === key, x[1] === value
  var bucket = this._storage[index];
  var result = undefined;
  for ( var i = 0; i < bucket.length; i++ ) {
    if ( bucket[i][0] === k ) { result = bucket[i]; }
  }
  return result;
}

/*
 * Complexity: What is the time complexity of the above functions?
    1) HashTable() is constant time. O(1)   

    2) insert() is constant time. O(1)
       Aspects of these functions, such as getIndexBelowMaxForKey()
       and find(), use iterative operations, but on small values such 
       as strings and buckets, which are generally small enough to be 
       negligible.
    
    3) retrieve() is constant time. O(1)

    4) remove() is constant time. O(1)

    5) find() is constant time. O(1)
 */



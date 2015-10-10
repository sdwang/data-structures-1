

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._maxBucket = 0;
  //this._maxReached = false; // necessary for temporary extra test
};






HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if ( this._storage[index] === undefined ) { this._storage[index] = []; }
  var tuple = this.find(k);
  if ( tuple ) { tuple[1] = v; }
  this._storage[index].push( [k, v] );
  if ( this._storage[index].length > this._maxBucket ) {
    this._maxBucket = this._storage[index].length;
    if ( (this._maxBucket / this._limit) > 0.75 ) { /// CHANGE TO 0.75
      this.refactor();
      //this._maxReached = true; // temp for extra test
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var tuple = this.find(k);
  return tuple[1];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // if(this.find(k) === undefined) {
  //   debugger;
  // }
  var tuple = this.find(k);
  tuple[1] = null;

  // keep track of maxBucket formula
  // if formula is low enough, defactor
  var tempLength = 0;
  for(var i = 0; i < this._storage[index].length; i++) {
    if(this._storage[index][i][1] !== null) {
      tempLength++;
    }
  }
  if( tempLength === this._maxBucket ) {
    this._maxBucket--;
    if((this._maxBucket / this._limit) < 0.50) {
      this.defactor();
    }
  }
};

HashTable.prototype.find = function (k) {
  // afterwards var x = this.find(k) === 'tuple'
  // thus x[0] === key, x[1] === value
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];
  var result = undefined;
  for ( var i = 0; i < bucket.length; i++ ) {
    if ( bucket[i][0] === k ) { result = bucket[i]; }
  }
  return result;
}

HashTable.prototype.refactor = function () {
// if we hit our limit, we have to:
// collect all tuples
  var tuples = this.findTuples();
  console.log(tuples);
  // reset limit
  this._limit = this._limit * 2;
// make new storage (that will be twice as big)
  this._storage = LimitedArray(this._limit);
// hash keys from previous storage
// distribute tuples using hashed keys
  for ( var x = 0; x < tuples.length; x++ ) {
    this.insert(tuples[x][0], tuples[x][1]);
  }
  console.log(this._storage);
}

HashTable.prototype.defactor = function() {

  //collects all tuples
  var tuples = this.findTuples();
  // lowers limit
  this._limit = this._limit / 2;
  // resets storage
  this._storage = LimitedArray(this._limit);
  // re-inserts tuples
  for ( var x = 0; x < tuples.length; x++ ) {
    this.insert(tuples[x][0], tuples[x][1]);
  }
}

HashTable.prototype.findTuples = function() {
  var temp = [];
  for ( var i = 0; i < this._storage.length; i++ ) {
    for ( var j = 0; j < this._storage[i].length; j++ ) {
      temp.push(this._storage[i][j]);
      console.log(this._storage[i][j]);
    }
  }
  return temp;
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



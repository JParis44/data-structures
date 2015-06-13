var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  for(var i = 0; i < this._limit; i++) {
    this._storage.set(i, []);
  }
};

var getIndex = function(arr, key){
  return arr.reduce(function(accumulator, item, index) {
    if(item[0] === key){
      return index;
    } else {
      return accumulator;
    }
  }, -1);
};



    //Time Complexity: O(n/k)
HashTable.prototype.insert = function(key, val){
  var i = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(i);
  var index = getIndex(bucket, key);
  if(index !== -1) {
    bucket[index][1] = val;
  } else {
    bucket.push([key, val]);
  }
    this._storage.set(i, bucket);
};

    //Time Complexity: O(n/k)
HashTable.prototype.retrieve = function(key){
  var i = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(i);
  var index = getIndex(bucket, key);
  if(index !== -1) {
    return bucket[index][1];
  } else {
    return null;
  }
};

    //Time Complexity: O(n/k)
HashTable.prototype.remove = function(key){
  var i = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(i);
  var index = getIndex(bucket, key);
  if(index !== -1) {
        bucket.splice(index, 1);
        this._storage.set(i, bucket);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

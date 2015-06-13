var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  for(var i = 0; i < this._limit; i++) {
    this._storage.set(i, []);
  };
};

HashTable.prototype.insert = function(key, val){
  var i = getIndexBelowMaxForKey(key, this._limit);
  var subArray = this._storage.get(i);
  var contains = subArray.reduce(function(accumulator, item, index){
    if(item[0] === key || accumulator){
      return true;;
    } else {
      return false;
    }
  }, false);
  if(!contains) {
    subArray.push([key, val]);
    this._storage.set(i, subArray);
  }

};

HashTable.prototype.retrieve = function(key){
  var i = getIndexBelowMaxForKey(key, this._limit);
  var subArray = this._storage.get(i);
  var index = subArray.reduce(function(accumulator, item, index){
    if(item[0] === key){
      return index;
    } else {
      return accumulator;
    }
  }, -1);
  if(index !== -1) {
    return subArray[index][1];
  } else {
    return null;
  }
};

HashTable.prototype.remove = function(key){
  var i = getIndexBelowMaxForKey(key, this._limit);
  var subArray = this._storage.get(i);
  var index = subArray.reduce(function(accumulator, item, index){
    if(item[0] === key){
      return index;
    } else {
      return accumulator;
    }
  }, -1);
  if(index !== -1) {
        this._storage.set(i, subArray.splice(index, 1));
        var whatTheHell = this._storage.get(i);
  }
  debugger;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

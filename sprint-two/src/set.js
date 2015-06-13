var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  set.length = 0;
  return set;
};

var setPrototype = {};

    //Time Complexity: O(1)
setPrototype.add = function(item){
  if(!this.contains(item)) {
    this._storage[this.length] = item;
    this.length++;
  }
};

    //Time Complexity: O(n)
setPrototype.contains = function(item){
  for(var i = 0; i < this.length; i++) {
    if(this._storage[i] === item) {
      return true;
    }
  }
  return false;
};

    //Time Complexity: O(n)
setPrototype.remove = function(item){
  var copying = false;
  for(var i = 0; i < this.length; i++) {
    if(this._storage[i] === item) {
      copying = true;
    }
    if(copying){
      this._storage[i] = this._storage[i+1];
    }
  }
  delete this._storage[this.length-1];
  this.length--;

};

/*
 * Complexity: What is the time complexity of the above functions?
 */

var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  set.length = 0;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  if(!this.contains(item)) {
    this._storage[this.length] = item;
    this.length++;
  }
};

setPrototype.contains = function(item){
  for(var i = 0; i < this.length; i++) {
    if(this._storage[i] === item) {
      return true;
    }
  }
  return false;
};

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

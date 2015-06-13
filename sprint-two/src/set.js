var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

    //Time Complexity: O(1)
setPrototype.add = function(item){
  if(!this.contains(item)) {this._storage.push(item);}
};

    //Time Complexity: O(n)
setPrototype.contains = function(item){
  return !(this._storage.indexOf(item) === -1);
};

    //Time Complexity: O(n)
setPrototype.remove = function(item){
  var index = this._storage.indexOf(item);
  if (index !== -1) {this._storage.splice(index, 1);}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

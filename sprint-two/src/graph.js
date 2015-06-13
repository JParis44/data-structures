

var Graph = function(){
};

    //Time Complexity: O(1)
Graph.prototype.addNode = function(node){
  this[node] = {};
};

    //Time Complexity: O(n)
Graph.prototype.contains = function(node){
  var keys = Object.keys(this);
  for(var i = 0; i < keys.length; i++){
    if(keys[i] === node){
      return true;
    }
  }
  return false;
};

    //Time Complexity: O(n)
Graph.prototype.removeNode = function(node){
  if(this[node] !== {}){
    var nodes = Object.keys(this[node]);
    for(var i = 0; i < nodes.length; i++){
      delete(this[nodes[i]].node);

    }
  }
  delete this[node];
};

    //Time Complexity: O(n)
Graph.prototype.hasEdge = function(fromNode, toNode){
  if(this[fromNode].hasOwnProperty(toNode)){
    return true;
  }
  return false;
};

    //Time Complexity: O(1)
Graph.prototype.addEdge = function(fromNode, toNode){
  this[fromNode][toNode] = null;
  this[toNode][fromNode] = null;
};

    //Time Complexity: O(1)
Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this[fromNode][toNode];
  delete this[toNode][fromNode];

};

    //Time Complexity: O(n * cb)
Graph.prototype.forEachNode = function(cb){
  var nodes = Object.keys(this);
  for(var i = 0; i < nodes.length; i++){
    cb(nodes[i]);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */




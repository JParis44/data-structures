

var Graph = function(){
};

Graph.prototype.addNode = function(node){
  this[node] = {};
  //debugger;
};

Graph.prototype.contains = function(node){
  var keys = Object.keys(this);
  //debugger;
  for(var i = 0; i < keys.length; i++){
    if(keys[i] === node){
      return true;
    }
  }
  return false;
};

Graph.prototype.removeNode = function(node){
  if(this[node] !== {}){
    var nodes = Object.keys(this[node]);
    for(var i = 0; i < nodes.length; i++){
      delete(this[nodes[i]].node);

    }
  }
  delete this[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  if(this[fromNode].hasOwnProperty(toNode)){
    return true;
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this[fromNode][toNode] = null;
  this[toNode][fromNode] = null;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this[fromNode][toNode];
  delete this[toNode][fromNode];

};

Graph.prototype.forEachNode = function(cb){
  var nodes = Object.keys(this);
  debugger;
  for(var i = 0; i < nodes.length; i++){
    cb(nodes[i]);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */




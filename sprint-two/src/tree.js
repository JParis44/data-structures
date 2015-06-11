var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fixed
  Object.assign(newTree, treeMethods);

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));


};

treeMethods.contains = function(target){
  var recursiveSearch = function(target, tree){
    if (tree.value === target) {
      return true
    } else {
      if (tree.children === []) {return false;}
      for (var i = 0; i < tree.children.length; i++){
        if(recursiveSearch(target, tree.children[i])){
          return true;
        }
      }
      return false;
    }
  };
  return recursiveSearch(target, this);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */




//POLYFILL!!!!!!!
if (!Object.assign) {
  Object.defineProperty(Object, 'assign', {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function(target) {
      'use strict';
      if (target === undefined || target === null) {
        throw new TypeError('Cannot convert first argument to object');
      }

      var to = Object(target);
      for (var i = 1; i < arguments.length; i++) {
        var nextSource = arguments[i];
        if (nextSource === undefined || nextSource === null) {
          continue;
        }
        nextSource = Object(nextSource);

        var keysArray = Object.keys(Object(nextSource));
        for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
          var nextKey = keysArray[nextIndex];
          var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
          if (desc !== undefined && desc.enumerable) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
      return to;
    }
  });
}

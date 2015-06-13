var Tree = function(value, parent){
  var newTree = {};
  newTree.value = value;
  newTree.parent = parent || null;

  // your code here
  newTree.children = [];  // fixed
  Object.assign(newTree, treeMethods);

  return newTree;
};





var treeMethods = {};

    //Time Complexity: O(1)
treeMethods.addChild = function(value){
  this.children.push(Tree(value));


};

    //Time Complexity: O(n)
treeMethods.contains = function(target){
    if (this.value === target) {
      return true
    } else {
      if (this.children === []) {return false;}
      for (var i = 0; i < this.children.length; i++){
        if(this.contains.call(this.children[i], target)){
          return true;
        }
      }
      return false;
    }
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

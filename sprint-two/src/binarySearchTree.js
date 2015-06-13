var BinarySearchTree = function(value){
  var treeNode = Object.create(BinarySearchTree.prototype);
  treeNode.value = value;
  treeNode.left = null;
  treeNode.right = null;
  return treeNode;
};

    //Time Complexity: O(log n)
BinarySearchTree.prototype.insert = function(value){
  if(value <= this.value){
    if(this.left === null){
      this.left = BinarySearchTree(value);
    } else {
      this.insert.call(this.left, value);
    }
  } else {
    if(this.right === null){
      this.right = BinarySearchTree(value);
    } else {
      this.insert.call(this.right, value);
    }
  }
};

    //Time Complexity: O(log n)
BinarySearchTree.prototype.contains = function(value){
  if(this.value === value){return true;}
  if(value <= this.value){
    if(this.left === null){
      return false;
    } else {
      return this.contains.call(this.left, value);
    }
  } else {
    if(this.right === null){
      return false;
    } else {
      return this.contains.call(this.right, value);
    }
  }


};

    //Time Complexity: O(n * func)
BinarySearchTree.prototype.depthFirstLog = function(func){
  func(this.value);
  if(this.left !== null){
    this.depthFirstLog.call(this.left, func);
  }
  if(this.right !== null){
    this.depthFirstLog.call(this.right, func);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */

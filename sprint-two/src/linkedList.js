var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

    //Time Complexity: O(1)
  list.addToTail = function(value){
    if(list.head === null){
      list.head = Node(value);
      list.tail = list.head;
    } else {
      list.tail.next = Node(value);
      list.tail.next.previous = list.tail;
      list.tail = list.tail.next;
    }
  };

    //Time Complexity: O(1)
  list.addToHead = function (value) {
    if (list.head === null) {
      list.head === Node(value);
      list.tail = list.head;
    } else {
      list.head.previous = Node(value);
      list.head.previous.next = list.head;
      list.head = list.head.previous;
    }
  }

    //Time Complexity: O(1)
  list.removeHead = function(){
    var value = list.head.value;
    if (list.head.next) {list.head.next.previous = null;}
    list.head = list.head.next;
    return value;
  };

    //Time Complexity: O(1)
  list.removeTail = function () {
    var value = list.tail.value;
    if (list.tail.previous) {list.tail.previous.next = null;}
    list.tail = list.tail.previous;
    return value;
  };

    //Time Complexity: O(n)
  list.contains = function(target){
      var currentNode = list.head;
      while(currentNode) {
        if (currentNode.value === target) {return true;}
        currentNode = currentNode.next;
      }
      return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

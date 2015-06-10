var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    var keyArray = Object.keys(storage);
    storage[keyArray.length] = value;
  };

  someInstance.dequeue = function(){
    var keyArray = Object.keys(storage);
    var dequeued = storage['0'];
    for(var i = 0; i < keyArray.length; i++ ){
      storage[i] = storage[i+1];

    }
    delete storage[keyArray.length-1];
    return dequeued;
  };

  someInstance.size = function(){

    return Object.keys(storage).length;
  };

  return someInstance;
};

var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    var keyArray = Object.keys(storage);
    storage[keyArray.length] = value;

  };

  someInstance.pop = function(){
    var keyArray = Object.keys(storage);
    var popped = storage[keyArray.length-1];
    delete storage[keyArray.length-1];

    return popped;

  };

  someInstance.size = function(){
    return Object.keys(storage).length;
  };

  return someInstance;
};

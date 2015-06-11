var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stackInstance = Object.create(stackMethods);
  stackInstance.storage = {};
  return stackInstance;

};

var stackMethods = {
  push:function(value){
         var keyArray = Object.keys(this.storage);
         this.storage[keyArray.length] = value;


       },
  pop: function(){
         var keyArray = Object.keys(this.storage);
         var popped = this.storage[keyArray.length - 1];
         delete this.storage[keyArray.length - 1];

         return popped;
  },
  size: function(){
         return  Object.keys(this.storage).length;


  }
};




var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Stack.prototype.push=function(value){
         var keyArray = Object.keys(this.storage);
         this.storage[keyArray.length] = value;


       };
Stack.prototype.pop= function(){
         var keyArray = Object.keys(this.storage);
         var popped = this.storage[keyArray.length - 1];
         delete this.storage[keyArray.length - 1];

         return popped;
  };
Stack.prototype.size= function(){
         return  Object.keys(this.storage).length;
};

var newStack = new Stack();



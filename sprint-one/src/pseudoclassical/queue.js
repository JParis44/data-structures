var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
    this.storage = {};
};



  Queue.prototype.enqueue = function(value){
            var keyArray = Object.keys(this.storage);
            this.storage[keyArray.length] = value;
  };
  Queue.prototype.dequeue = function(){
            var keyArray = Object.keys(this.storage);
            var dequeued = this.storage[0];
            for(var i = 0; i < keyArray.length; i++){
              this.storage[i] = this.storage[i + 1];

            }
            delete this.storage[keyArray.length-1];

            return dequeued;
  };
  Queue.prototype.size = function(){
         return Object.keys(this.storage).length;
  };




var newQueue = new Queue();



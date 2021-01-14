/*1st 2020-1-11 环形队列，为的是节省内存，一直在这个队列规定的内存上操作;为了方便，就像链表头节点一样，拿出来了一个节点专门做head */
/** 1-12 还用到了开区间的思想来表示head和rear，为了好确定empty和full的情况， 所以（head，rear】，长度为K+1是给开区间留了位置，但是头是head+1 */
/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
  this.array = new Array(k+1);
  this.head = 0;
  this.rear = 0;
};

/** 
* @param {number} value
* @return {boolean}
*/
MyCircularQueue.prototype.enQueue = function(value) {
  if (this.isFull()) {
      return false;
  }
  this.rear = (this.rear+1) % this.array.length;
  this.array[this.rear] = value;
  return true;
};

/**
* @return {boolean}
*/
MyCircularQueue.prototype.deQueue = function() {
  if (this.isEmpty()) {
      return false;
  }
  this.head = (this.head+1) % this.array.length;
  return true;
};

/**
* @return {number}
*/
MyCircularQueue.prototype.Front = function() {
  if (this.isEmpty()) {
      return -1;
  }
  return this.array[(this.head+1) % this.array.length];
};

/**
* @return {number}
*/
MyCircularQueue.prototype.Rear = function() {
  if (this.isEmpty()) {
      return -1;
  }
  return this.array[this.rear];
};

/**
* @return {boolean}
*/
MyCircularQueue.prototype.isEmpty = function() {
  return this.head == this.rear;
};

/**
* @return {boolean}
*/
MyCircularQueue.prototype.isFull = function() {
  return (this.rear+1) % this.array.length == this.head;
};

/** 
* Your MyCircularQueue object will be instantiated and called as such:
* var obj = new MyCircularQueue(k)
* var param_1 = obj.enQueue(value)
* var param_2 = obj.deQueue()
* var param_3 = obj.Front()
* var param_4 = obj.Rear()
* var param_5 = obj.isEmpty()
* var param_6 = obj.isFull()
*/
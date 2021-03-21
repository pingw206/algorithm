/**init 2021-1-13 双头队列，传统队列是从rear push，从head pop；这种双头队列是两边都可以push，pop；（栈是从一头push和pop）
 * 本题思想同621题是一样的，还是用开区间的思想
 * 2021-3-21 做会了621，这题就会了；注意的是减1的时候注意再加个length，不然可能就是负数了
 */
/**
 * Initialize your data structure here. Set the size of the deque to be k.
 * @param {number} k
 */
var MyCircularDeque = function(k) {
  this.array = new Array(k+1);
  this.length = this.array.length;
  this.head = 0;
  this.rear = 0;
};

/**
* Adds an item at the front of Deque. Return true if the operation is successful. 
* @param {number} value
* @return {boolean}
*/
MyCircularDeque.prototype.insertFront = function(value) {
  if (this.isFull()) {
      return false;
  }
  this.array[this.head] = value;
  this.head = (this.head - 1 + this.length) % this.length;
  return true;
};

/**
* Adds an item at the rear of Deque. Return true if the operation is successful. 
* @param {number} value
* @return {boolean}
*/
MyCircularDeque.prototype.insertLast = function(value) {
  if (this.isFull()) {
      return false;
  }
  this.rear = (this.rear + 1) % this.length;
  this.array[this.rear] = value;
  return true;
};

/**
* Deletes an item from the front of Deque. Return true if the operation is successful.
* @return {boolean}
*/
MyCircularDeque.prototype.deleteFront = function() {
  if (this.isEmpty()) {
      return false;
  }
  this.head = (this.head + 1) % this.length;
  return true;
};

/**
* Deletes an item from the rear of Deque. Return true if the operation is successful.
* @return {boolean}
*/
MyCircularDeque.prototype.deleteLast = function() {
  if (this.isEmpty()) {
      return false;
  }
  this.rear = (this.rear - 1 + this.length) % this.length;
  return true;
};

/**
* Get the front item from the deque.
* @return {number}
*/
MyCircularDeque.prototype.getFront = function() {
  if (this.isEmpty()) {
      return -1;
  }
  return this.array[(this.head + 1) % this.length];
};

/**
* Get the last item from the deque.
* @return {number}
*/
MyCircularDeque.prototype.getRear = function() {
  if (this.isEmpty()) {
      return -1;
  }
  return this.array[this.rear];
};

/**
* Checks whether the circular deque is empty or not.
* @return {boolean}
*/
MyCircularDeque.prototype.isEmpty = function() {
  return this.head == this.rear;
};

/**
* Checks whether the circular deque is full or not.
* @return {boolean}
*/
MyCircularDeque.prototype.isFull = function() {
  return (this.rear+1) % this.array.length == this.head;
};

/** 
* Your MyCircularDeque object will be instantiated and called as such:
* var obj = new MyCircularDeque(k)
* var param_1 = obj.insertFront(value)
* var param_2 = obj.insertLast(value)
* var param_3 = obj.deleteFront()
* var param_4 = obj.deleteLast()
* var param_5 = obj.getFront()
* var param_6 = obj.getRear()
* var param_7 = obj.isEmpty()
* var param_8 = obj.isFull()
*/

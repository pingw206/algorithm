/* 2020-3-17 环形队列，也叫循环队列，为的是节省内存，一直在这个队列规定的内存上操作;
为了方便区分什么时候是满的什么时候是空的，拿出来了一个节点专门做head，也可以拿一个节点专门做tail，所以队列长度是比数组长度要多1的---后续可以写一下专门指针做rear的
也可以用开区间的思想来考虑，（head，rear】，head=rear时，空集，就是空的，长度为K+1是给开区间留了位置，但是头是head+1 */
/** 开始时head和rear都指向同一个节点，head用来做标记，push的话，rear就往后走一位，pop的话，head往后走一位，所以判断empty的话，head=rear； 判断Full是rear+1=head
 * 操作数组有加1的操作时就可能溢出，所以要取余；读取数组不需要维护，不用取余
 *  可以再加个功能，读取当前队列的size， this.length; 如果h<r, 就是r-h， 如果r>h, 就是r+（k-h）
 * */
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
  if (this.isFull()) {  //注意括号啊
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
// 关键难点是想通了push的时候怎么做，后面就很简单了，切忌照搬232题

/**
 * Initialize your data structure here.
 */
var MyStack = function() {
    this.myQueue = new Array();
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.myQueue.push(x);
    for (var i = 0; i < this.myQueue.length - 1; i++) {  //length - 1 是关键，恰好倒腾到插入的数字是第一个时停止
       var popVal = this.myQueue.shift();
       this.myQueue.push(popVal);
    }
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    if (this.empty());  //throw exception
    return this.myQueue.shift();
    
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
     if (this.empty());
    return this.myQueue[0];
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.myQueue.length == 0;
    
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
//2021-2-21 | 6-3 
/*关键点： 两个queue实现栈，只能操作到q1中只剩一个数来作为栈顶；
在pop完栈顶后，还要把q2中的数倒腾回q1; top获取栈顶后，不能再倒腾回来，可以继续push进q1
*/
//两种方法，用一个或者两个队列都可以实现

/*方法一 用两个queue实现stack */
//用两个数组做成的队列，只能有队列的操作，也就是shift()从头上弹出,push()从尾巴加入
/**
 * Initialize your data structure here.
 */
 var MyStack = function() {
    this.queue1 = [];
    this.queue2 = [];
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue1.push(x);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    while (this.queue1.length > 1) {
        this.queue2.push(this.queue1.shift());
    }
    var popValue = this.queue1.shift();

    while (this.queue2.length > 0) {
        this.queue1.push(this.queue2.shift());
    }

    return popValue;
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    while (this.queue1.length > 1) {
        this.queue2.push(this.queue1.shift());
    }
    return this.queue1[0]; //取到top值后，不要像pop那样再把q2中的数放回q1，因为q1中还有数，再放回来顺序就不对了
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue1.length == 0 && this.queue2.length == 0;
};


/**方法二 用一个Queue就可以实现
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
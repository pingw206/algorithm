//用stack 实现queue
/*本解法的关键是读懂题目，要用两个栈，第一个用来存push，第二个用来倒置成需要的队列-先进先出
是在peek()中来倒置一下列表，因为peek()没有操作产生，然后pop调用peek实际上就是为了倒置一下，也可以写一个公共的倒置函数供peek,pop用
stack1  stack2
 3         1
 2         2 
 1         3
 */
/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.stack1 = new Array();
    this.stack2 = new Array();
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack1.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (this.empty()) { 
        return;
    }//本题设定没有异常情况，可以不写此句话 
    var popVal = this.peek();  /*!!!这句话非常关键！！！调用peek()方法生成stack2 */
    this.stack2.pop();
    return popVal;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (this.empty()) { 
        return;
    }//本题设定没有异常情况，可以不写此句话 
    if (this.stack2.length == 0) {   /**这个判断很重要，调用的过程遇到stack2中的数用完了，要随时从又push了的stack1中补充；还没用完的话因为先进先出，还有的可以出，可以等全部用完再补充 */
        while (!this.stack1.length == 0) {
            this.stack2.push(this.stack1[this.stack1.length-1]);
            this.stack1.pop();
        }
    }
    return this.stack2[this.stack2.length-1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stack1.length == 0 && this.stack2.length == 0;
};



/*我的错误第一想法 */
// 我嗖嗖嗖10分钟用array实现了queue，没仔细想人家是让用stack的功能实现queue
var MyQueue = function() {
    this.queue = new Array();
    this.length = 0;
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.queue.push(x);
    this.length++;
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    let ele = this.queue.shift();
    this.length--;
    return ele;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.queue[0];
    
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return (this.length == 0);
    
};
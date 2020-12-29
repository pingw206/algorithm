/**
 * 1.这类构造题没想到首先应该怎么写，两个this
 * 2.push， minStack的时候，忘了加小于等于的等于号，就错啦，如果[0,-1,0],minStack应该是[0,0],不然[0]一次pop就没了
 * 3.pop的时候可以加判断条件是否有意义，不过这道题是默认有意义的，也可以不加
};
 */
var MinStack = function() {
    this.stack = new Array();
    this.minStack = new Array();
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
    if (this.minStack.length == 0 || x <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(x);
    }   
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.stack.length == 0) {
        return;
    }
    var popVal = this.stack.pop();
    if (popVal == this.minStack[this.minStack.length-1]) {
        this.minStack.pop();
    } 
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];    
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
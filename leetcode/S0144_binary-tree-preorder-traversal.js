/**没看懂，需要复习 栈的调用；以及写另外一个小函数；
 * 还得能读懂题目，题目给的array是从上到下，从左到右，一行行读的树上的数
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    var arr = [];
    internalPreOrder(root, arr);
    return arr;
};
var internalPreOrder = function(root, arr) {
    if (root == null) {
        return;
    } 
    /* 最小子问题就是root == null的时候 */
    arr.push(root.val);
    internalPreOrder(root.left, arr);  /*把左结点一层层全走完直到为null后，再一层层走回来，然后再走下面一条function */
    internalPreOrder(root.right, arr);
};


// 中序遍历
internalPreOrder(root.left, arr); 
arr.push(root.val);
internalPreOrder(root.right, arr);

//后序遍历
internalPreOrder(root.left, arr); 
internalPreOrder(root.right, arr);
arr.push(root.val);
/** 2021-1-30 最开始第一个函数里面不需要判断root是否为空，注意返回arr
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
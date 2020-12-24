//最开始想到的办法，最小子问题是root == null; 原问题和子问题的关系：子问题的两个子树是平衡二叉树，且root的两个子树的高度差 <= 1; 
//时间复杂度是n*2,因为计算isBalanced递归一遍，计算height又要递归调用一遍，涉及到多次重复计算

//2020-12-24 想到了第一递归平衡树，第二求高度，所以是两层递归，但没有写出来高度的函数，和最大深度是一样的，求树的深度是基本要求，还没有掌握
//注意是调用isBalanced本身，不需要再写一个isTwoBalanced(root.left, root.right),读懂题目要求，左右两个树都要是平衡树，不是组合在一起
var isBalanced = function(root) {
    if (root == null) {
        return true;
    }
    if (isBalanced(root.left) && isBalanced(root.right) && Math.abs(nodeHeight(root.left) - nodeHeight(root.right))<=1) {
        return true;
    }
    else {
        return false;
    }
};

var nodeHeight = function(root) {
    if (root == null) {
        return 0;
    }
    var leftHeight = nodeHeight(root.left);
    var rightHeight = nodeHeight(root.right);
    return Math.max(leftHeight, rightHeight) + 1;  
};
//方法二： ？？？所以想到每次计算完height时顺便存下来每个node的height，存到hash表中,就不用再重复计算了
var isBalanced = function(root) {
    if (root == null) {
        return true;
    }
    var leftHeight = height(root.left);
    var rightHeight = height(root.right);
    if(Math.abs(leftHeight - rightHeight) > 1){
        return false;
    }
    return (isBalanced(root.left) && isBalanced(root.right));
}
var height = function(root) {
    if (root == null) {
        return 0;
    }    
    var map1 = new Map();
    if (map1.has(root)) {
        return map1.value(root);
    }
    var leftHeight = height(root.left);
    var rightHeight = height(root.right);
    var maxHeight = Math.max(leftHeight, rightHeight) + 1;
    map1.set(root, maxHeight);
    return maxHeight;
}
//方法三：???
var isBalanced = function(root) {
    var result = true;
    height(root, result);
    return result;
};

var height = function(root, result) {
    if(result == false) {
        return 0;//return any value
    }
    if (root == null) {
        return 0;
    }
    var leftHeight = height(root.left, result);
    var rightHeight = height(root.right, result);
    if(Math.abs(leftHeight - rightHeigh) > 1) {
        result = false;
    }
    return Math.max(leftHeight, rightHeight) + 1;
}
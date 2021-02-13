//2021-2-13 关键是想到有几种情况，最后一种情况怎么写
//这道题没有想明白定义的情况下去做，直接套用maxDepth()很容易出错，
//深度：从root 到leaf node的距离；
//leaf node: 没有children的node 
//要讨论： 最小子问题 root = null; 然后原问题和子问题存在三种情况： root也是leafNode；root只有一个child；root有两个child

var minDepth = function(root) {
    if (root == null) {
        return 0;
    }
    if (root.left !== null && root.right !== null) {
        return Math.min(minDepth(root.left), minDepth(root.right)) + 1;  
    }
    if (root.left == null && root.right == null) {
        return 1;
    }
    return minDepth(root.left == null ? root.right : root.left) + 1;     //肯定是有一个节点为null的情况   
};
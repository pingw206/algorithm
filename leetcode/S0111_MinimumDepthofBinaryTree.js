//2021-2-13|6-2 
/* 和104题求最大深度的区别在于，有的节点只有一个分支的时候，深度不是没有分支的那边的min 0, 而是有分支的那边的深度
因为最大深度的时候不涉及到这个问题，无脑求max就行，现在无脑求min会有一边的0需要排除掉
要讨论： 最小子问题 root = null; 然后原问题和子问题存在三种情况： root也是leafNode；root只有一个child；root有两个child
*/
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
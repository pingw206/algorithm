//2021-1-31 从root往下，是需要判断两个节点的，所以输入是两个，还需要再写个函数，这点没有想到。  
//方法一 recursive solution， time complexity: 2n ，O（n)
var isSymmetric1 = function(root) {
    if (root == null) {
        return true;
    }
    return isTwoTreesSymmetric(root.left, root.right); 
};

var isTwoTreesSymmetric = function(root1, root2) {
    if (root1 == null && root2 == null) {
        return true;
    }
    if (root1 == null || root2 == null) {
        return false;
    }
    return root1.val == root2.val &&
        isTwoTreesSymmetric(root1.left, root2.right) &&
        isTwoTreesSymmetric(root1.right, root2.left); //这里不能写成if(...)return true; 因为会丢掉很多为false的情况
}
//方法二  BFS: iterative solution
//有点奇怪的解法，但是可以理解，要成对push，成对shift出来比较
var isSymmetric = function(root) {
    var que = []; 
    que.push(root); 
    que.push(root); 
    while (que.length != 0) {
        var lhs = que.shift();
        var rhs = que.shift();
        if (lhs == null && rhs == null) { continue; }
        if (lhs == null || rhs == null) { return false; }
        if (lhs.val != rhs.val) { return false; }
        que.push(lhs.left); que.push(rhs.right);
        que.push(lhs.right); que.push(rhs.left);
    }
    return true;
};
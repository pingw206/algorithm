//2021-1-31 从root往下，是需要判断两个节点的，所以输入是两个，还需要再写个函数，这点没有想到。  
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

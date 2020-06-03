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
        isTwoTreesSymmetric(root1.right, root2.left);
}

//做完100题，再想想这道题就会啦， 小心绕哦～
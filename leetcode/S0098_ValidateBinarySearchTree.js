//还是不太懂， 关键是放置左右的min, max ；别忘等号
var isValidBST = function(root) {
    return internalIsValidBST(root, null, null);
};

var internalIsValidBST = function(root, minNode, maxNode) {
    if (root == null) {
        return true;
    }
    if ((minNode != null && root.val <= minNode.val) ||
    (maxNode != null && root.val >= maxNode.val)) {
        return false;
    }
    return internalIsValidBST(root.left, minNode, root) && 
        internalIsValidBST(root.right, root, maxNode);
}

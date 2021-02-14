/*2021-2-14又是错在此处，只用了本身递归判断了节点处的大小，没判断所有
 2020-12-24 理解题意，不是说左节点比中间的节点小，而是说所有的左子树的节点都比中间节点小，
所以[5,4,6,null,null,3,7] 是false*/  

//关键是每次重新放置左右的min, max，以及从之前带过来min， max；

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

//还是不太懂， 关键是放置左右的min, max， 当左节点是root时，比他大的就是root；当右节点是root时，比他小的就是root ；
//别忘等号

//2020-12-24 理解题意，不是说左节点比中间的节点小，而是说所有的左子树的节点都比中间节点小，
//所以[5,4,6,null,null,3,7] 是false
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

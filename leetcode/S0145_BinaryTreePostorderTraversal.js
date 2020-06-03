var postorderTraversal = function(root) {
  var arr = [];
  myPostorder(root,arr);
  return arr;
};

var myPostorder = function(root, arr) {
  if (root == null) {
      return;
  }
  myPostorder(root.left, arr);
  myPostorder(root.right, arr);
  arr.push(root.val);
}
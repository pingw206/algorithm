var inorderTraversal = function(root) {
  var arr = [];
  myInorder(root, arr);
  return arr;
};
var myInorder = function(root, arr) {
  if (root == null) {
      return;
  }
  myInorder(root.left, arr);
  arr.push(root.val);
  myInorder(root.right, arr);
}
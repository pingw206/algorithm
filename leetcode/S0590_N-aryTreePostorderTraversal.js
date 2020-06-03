var postorder = function(root) {
  var arr = [];
  myPostorder(root, arr);
  return arr;
};
var myPostorder = function(root, arr) {
  if (root == null) {
      return;
  }
  for (var i = 0; i < root.children.length; i++) {
      myPostorder(root.children[i], arr);
  }
  arr.push(root.val);
}
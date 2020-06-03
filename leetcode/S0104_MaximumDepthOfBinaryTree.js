function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var maxDepth = function(root) {
  if (root == null) {
      return 0;
  }
  var leftDep = maxDepth(root.left);
  var rightDep = maxDepth(root.right);
  return Math.max(leftDep, rightDep) + 1;
};
//下面构造一个树，来看stack运行
// [1,2,3,n,n,6,7]
var root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);
// console.log(root);

var dep = maxDepth(root);
console.log("dep: " + dep);
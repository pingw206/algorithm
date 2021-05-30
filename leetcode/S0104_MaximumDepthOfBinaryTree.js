//2021-1-30 不需要再额外构建一个函数来递归；实在是没有想到，实质还是从头往下递归的思想，上面是左右两个深度再加一，这样的话最上面就是0
//方法一 DFS
var maxDepth = function(root) {
  if (root == null) {
      return 0;
  }
  var childrenDepth = Math.max(maxDepth(root.left), maxDepth(root.right));
  return childrenDepth + 1;
};

//方法二 
// BFS
var maxDepth = function(root) {
  if (root == null) { return 0; }
      
  var queue = [];
  queue.push(root);
  var height = 0;
  while (queue.length != 0) {
      var curLevelSize = queue.length;
      for (var i = 0; i < curLevelSize; i++) {
          var node = queue.shift();
          if (node.left != null) {
              queue.push(node.left);
          }
          if (node.right != null) {
              queue.push(node.right);
          }
      }
      height++;
  }
  return height;
};
//解析：下面构造一个树，来看stack运行
// [1,2,3,n,n,6,7]
var root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);
// console.log(root);

var dep = maxDepth(root);
console.log("dep: " + dep);
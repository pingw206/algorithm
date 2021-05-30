/**2020-5-1 ｜2021-5-30*/

//方法一 递归解法
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

//方法二 迭代写法 ：如何把递归翻译成迭代
// DFS: using a stack to simulate the recursive process
var inorderTraversal = function(root) {
  if (root == null) {
      return [];    
  }
  var result = [];
  var stack = [];
  while (root != null) {
      stack.push(root);
      root = root.left;
  }
  while (stack.length != 0) {
      var topNode = stack[stack.length-1];
      stack.pop();
      result.push(topNode.val);
      var rightNode = topNode.right;
      while (rightNode != null) {
          stack.push(rightNode);
          rightNode = rightNode.left;
      }
  }
  return result;
};
/**2021-5-30
 * 注意是原地改动树，不需要返回值，所以就像是
 */
// 方法一 递归recursive solution: O(logN) stack space
var flatten = function(root) {
  if (root == null) { return; }

  flatten(root.left);
  flatten(root.right);
 //上面两步后，就是默认root的左右两边都是按要求写好的了，现在要把左右两边和root拼成要求的格式 
  var right = root.right;
  root.right = root.left;
  root.left = null;
  
  var temp = root;
  while (temp.right != null) {
      temp = temp.right;
  }
  temp.right = right;
}
// 方法二 迭代 iterative solution: O(n) space
//这个方法我想到了，先把前序遍历的数组求出来，这里数组里存的不是数字，而是节点（所以把数组变成树，不需要新创建树）
var flatten = function (root) {
  if (root == null) {
    return;
  }
  var preorder = [];
  preOrder(root, preorder);

  root.left = null;
  var pointer = root;
  for (var i = 1; i < preorder.length; i++) {
    preorder[i].left = null;
    pointer.right = preorder[i];
    pointer = pointer.right;
  }
}
var preOrder = function(root,preorder) {
    if (root == null) {
        return;
    }
    preorder.push(root);
    preOrder(root.left, preorder);
    preOrder(root.right, preorder);
}
  
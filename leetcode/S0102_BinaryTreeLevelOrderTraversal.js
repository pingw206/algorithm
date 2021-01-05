//first: 2020-01-05 想明白array里面还可以存node，不只是node.val ,什么都可以存
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (root == null) {
      return [];
  }
  var que = new Array();
  que.push(root);
  var result = new Array();
  while (que.length != 0) {
      var currenLayer = new Array();
      var currentLayerCount = que.length;
      for (var i = 0; i < currentLayerCount; i++) {
          var node = que.shift();
          currenLayer.push(node.val);
          if (node.left != null) {
              que.push(node.left);
          }
          if (node.right != null) {
              que.push(node.right);
          }
      }
      result.push(currenLayer);
  }
  return result;
};

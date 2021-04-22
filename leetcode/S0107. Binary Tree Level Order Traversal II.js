/**
 * 2021-4-18
 */
var levelOrderBottom = function(root) {
  if (root == null) {
      return [];
  }
  var result = [];
  var queue = [root];
  
  while (queue.length !== 0) {
      var currentLayer = [];
      var currentCount = queue.length;
      for (var i=0; i<currentCount; i++) {
          var node = queue.shift();
          currentLayer.push(node.val);
          if (node.left !== null) {
              queue.push(node.left)
          }
          if (node.right !== null) {
              queue.push(node.right)
          }
      }
      result.push(currentLayer);
  }
  return result.reverse();
};
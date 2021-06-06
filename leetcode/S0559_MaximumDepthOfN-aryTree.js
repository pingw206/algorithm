
//2020-12-22| 2021-1-30 | 6-2
// subDepth的最开始定义直接取0，不要取maxDepth(root.children[0]), 超时报错。总会变大的。
//方法一 DFS
var maxDepth = function(root) {
  if (root == null) {
      return 0;
  }
  var childrenCount = root.children.length;
  var subDepth = 0;
  for( var i = 0; i < childrenCount; i++) {
      var curDepth = maxDepth(root.children[i]);
      subDepth = Math.max(subDepth, curDepth);
  }
  return subDepth + 1;
};
//方法二 BFS
var maxDepth = function(root) {
  if (root == null) { return 0; }
      
  var queue = [];
  queue.push(root);
  var height = 0;
  while (queue.length != 0) {
      var curLevelSize = queue.length;
      for (var i = 0; i < curLevelSize; i++) {
          var node = queue.shift();
          for (var j = 0; j < node.children.length; j++) {
              queue.push(node.children[j]);
          }
      }
      height++;
  }
  return height;
};
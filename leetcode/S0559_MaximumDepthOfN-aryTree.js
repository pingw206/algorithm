
//2021-1-30 subDepth, curDepth 有点弄晕了
//2020-12-22 依然卡在了求最大值，思考了下，没有做下去；我也想到了要么迭代，要么依次比较
//subDepth 定义在了外层，所以它的值是随着里层变化一直变化的；这点是关键
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
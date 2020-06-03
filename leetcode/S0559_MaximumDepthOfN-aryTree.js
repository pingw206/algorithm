
//关于一组数怎么求最大值难为了我半天，弄了个数组还搜了个apply函数，还是老司机轻车熟路呀
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
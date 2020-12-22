
//关于一组数怎么求最大值难为了我半天，弄了个数组还搜了个apply函数，还是老司机轻车熟路呀
//2020-12-22 依然卡在了求最大值，思考了下，没有做下去；我也想到了要么迭代，要么依次比较
//subDepth 定义在了外层，所以它的值是随着里层变化一直变化的；这点是关键
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
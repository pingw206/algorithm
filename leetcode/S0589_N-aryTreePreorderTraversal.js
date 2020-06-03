
//敢相信我离答案只差 var ， 竟然是因为var i = 0; 忘了加var，变成了全局变量不再变化---第二次记得再分析一下这个的影响
// 我能想到去打印出来看看root.children; root.children.length分别是什么，就离做对不远啦
var preorder = function(root) {
  var arr = [];
  internalPreorder(root, arr);
  return arr;
};

var internalPreorder = function(root, arr) {
  if (root == null) {
      return;
  }
  arr.push(root.val);
  for(var i = 0; i < root.children.length; i++) {
      internalPreorder(root.children[i], arr);
  }
}
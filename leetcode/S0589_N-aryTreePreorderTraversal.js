// init 我能想到去打印出来看看root.children; root.children.length分别是什么;离做对只差了个var
//2020-12-22 完全没有想到root.children的存在，没有好好思考，盲目套用了
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
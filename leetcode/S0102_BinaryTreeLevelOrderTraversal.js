//2020-01-05 想明白array里面还可以存node，不只是node.val ,什么都可以存
//2021-3-7 用队列，不是栈，也不是表达式套表达式的递归； 用队列是因为每一层先存进来的数字要按顺序先输出来，这样可以保证在内循环完这一层之前，已经把下一层的数push进去了，但是弹出来的还是之前先push进来的，不会弹后面push的下一层的
//别忘了最开始的边界条件root==null分开讨论，不然后面node.val无意义
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (root == null) {
      return [];
  }
  var que = new Array(); // 存放node
  que.push(root);  //先把root push进队列
  var result = new Array(); // 存放每层的node.val
  while (que.length != 0) {
      var currenLayer = new Array(); // 存放一层的node.val
      var currentLayerCount = que.length; //这一层的长度取决于当前队列的长度，这个数字在刚进入while的时候根据此时的que定下来，不会再受for循环里面que的变化而影响; 但是会受上一次while循环结束时que的变化影响
      for (var i = 0; i < currentLayerCount; i++) {  //遍历队列长度
          var node = que.shift();   //从队列头部弹出
          currenLayer.push(node.val);  //弹出的数字存入当前层
          if (node.left != null) {
              que.push(node.left);  //然后入队：root的左和右节点，等下一次while循环再操作
          }
          if (node.right != null) {
              que.push(node.right);
          }
      }
      result.push(currenLayer);  //把当前层存入结果中
  }
  return result;
};

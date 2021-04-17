/** 2021-4-17 
 * 102变种，输出隔行反向的数组，可以先生成数组，然后往result里再push的时候再反向就容易些了
 * 
 */
var zigzagLevelOrder = function(root) {
  if (root == null) {
      return [];
  }
  
  var queue = [root];
  var result = [];
  var height = 0;
  while (queue.length != 0) {
      var curLevelLength = queue.length;
      var curLevel = [];
      for (var i = 0; i < curLevelLength; i++) {
          var frontNode = queue.shift();
          curLevel.push(frontNode.val);
          if (frontNode.left != null) {
              queue.push(frontNode.left);
          }
          if (frontNode.right != null) {
              queue.push(frontNode.right);
          }
      }
      if (height % 2 == 0) {
          result.push(curLevel.map((x)=>x));  //复制数组
      } else {
          result.push(curLevel.reverse());  //数组翻转，但是原数组还存在
      }
      height++;  //注意height层级
  }
  return result;
};
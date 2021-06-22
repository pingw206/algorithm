/** 2021-4-17 ｜6-22
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
      var curLevelLength = queue.length; //*a.这一步很有用，在下面for循环中，不能直接用queue.length,因为queue会因为循环而变化
      var curLevel = [];
      for (var i = 0; i < curLevelLength; i++) {  //这里对应*a
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
          result.push(curLevel); 
      } else {
          result.push(curLevel.reverse());  //翻转数组
      }
      height++;  //注意height层级
  }
  return result;
};
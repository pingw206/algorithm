/** 2021-5-9
 * 跟102思路一样的，只不过n叉树要遍历children
 * 
 */
var levelOrder = function(root) {
  if (root == null) {
      return [];
  }
  
  var queue = [root];
  var result = [];
  while (queue.length != 0) {
      var curLevelLength = queue.length;
      var curLevel = [];
      for (var i = 0; i < curLevelLength; i++) {
          var frontNode = queue.shift();
          curLevel.push(frontNode.val);
          /* 我的写法
          for (var j=0; j<node.children.length;j++) {
            que.push(node.children[j])
          }
          */
          if (frontNode.children != null) {
              frontNode.children.forEach(function(child){
                  queue.push(child);
              });
          }
      }
      result.push(curLevel.map((x)=>x));//这里倒也不必要用map
  }
  return result;
};
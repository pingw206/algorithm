/** 2021-5-9
 * BFS经典同类题
 */

var averageOfLevels = function(root) {
  if (root == null) {
      return [];
  } 
   var result = [];
   var que = [root];
   while (que.length !== 0) {
       var sum = 0;  //题目会自动处理输出5位小数，所以我不用做处理
       var currentCount = que.length;
       for (var i=0; i<currentCount; i++) {
           var node = que.shift();
           sum += node.val;
            if (node.left != null) {
               que.push(node.left);
           }
           if (node.right != null) {
               que.push(node.right)
           }
       }
       result.push(sum/currentCount);  
       //磊是这么做的 var levelAverage = curLevel.reduce((a, b) => a + b, 0) / curLevel.length;
   }
   return result;
};
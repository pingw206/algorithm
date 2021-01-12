/**2020-1-11 我完全没有想到怎么来判断，消消乐原理：最小子树 a # # 这样肯定是前序遍历； 
 * 关键词：迭代
 */
/**
 * @param {string} preorder
 * @return {boolean}
 */

var isValidSerialization = function(preorder) {
  var preorderArray = preorder.split(",");
  var stack = new Array();
  for (var i = 0; i < preorderArray.length; i++) {
      stack.push(preorderArray[i]);
      while (stack.length > 2 &&
             stack[stack.length-1] == "#" &&
             stack[stack.length-2] == "#") {
          // if the parent node is already resolved, then return false
          if (stack[stack.length-3] == "#") {  //这个情况是 ### 没必要存在的情况。这种case没跑通，发现的特别判断
              return false;
          }
          stack.pop(); stack.pop(); stack.pop();
          stack.push("#");
      }
  }
  console.log(stack);
  return stack.length == 1 && stack[0] == "#";
};

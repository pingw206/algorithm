/**2021-1-11 | 2021-3-22 | 6-8
我完全想不到怎么来判断， 所以这种题就只能记住解决思路
 * 关键词：迭代
消消乐原理：最小子树 a # # 这样肯定是前序遍历；
 *  如果最小子树是，那么把最小子树去掉后，还应该是前序遍历，所以就依次去掉是前序的树，最后只剩下一个树，还是前序
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
					//这个情况是 因为长度为3时， 边界case ### 是一种没必要存在的情况, 如 “###”， 或"1,#,#,#,#"
          if (stack[stack.length-3] == "#") { 
             return false;
          }
          stack.pop(); stack.pop(); stack.pop();
          stack.push("#");
      }
  }
  return stack.length == 1 && stack[0] == "#";
};
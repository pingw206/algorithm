//2020-1-6 注意数组转变成字符串的方法
/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
  var stk = new Array();
  for (var i = 0; i < S.length; i++) {
      if (stk.length != 0 && stk[stk.length-1] == S[i]) {  //排除stk为空的开始，这样让length-1有意义
          stk.pop();
      } else {
          stk.push(S[i]);
      }
  }
  return stk.join('');  //数组转变成字符串的好办法，我还创建了个空字符串，遍历数组concat
};
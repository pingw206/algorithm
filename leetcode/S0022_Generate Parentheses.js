/** 2021-4-12 | 6-8
 *  想明白条件是关键： 条件是剩余的括号数，也就是还没使用的
 *     可以push “(” 的条件是，还有剩余的“(” ---- 此时不管“)”，会在后面的条件中做限制判断
 *     可以push “)” 的条件是，剩余的“)”要比“(”多 ---- 也就是用上的右括号比左括号少，还可以push右
 *  想不明白过程可以在debug里面运行一下看看， 还是挺难空想明白的，但是要通过运行来理解过程
 * 
 * 
 */
var generateParenthesis = function(n) {
    
  var result = [];
  var path = [];
  
  dfs(n, n, path, result);
  return result;
};

var dfs = function(leftRemain, rightRemain, path, result) {
  if (leftRemain == 0 && rightRemain == 0) {
      result.push(path.join(""));
  }

  if (leftRemain > 0) {
      path.push("(");
      dfs(leftRemain-1, rightRemain, path, result);
      path.pop();
  }
  if (leftRemain < rightRemain) {
      path.push(")");
      dfs(leftRemain, rightRemain-1, path, result);
      path.pop();
  }
}

generateParenthesis(3)
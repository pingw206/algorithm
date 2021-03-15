
var combinationSum2 = function(candidates, target) {
  candidates.sort(function(a, b) {
      return a-b;  //排序
  });
  var result = [];
  var path = [];
  genComb(candidates, 0, path, result, target);
  return result;
};
var genComb = function(candidates, start, path, result, target) {
  if (start > candidates.length || candidates[start] > target) {
      return;  //跳出栈的条件：遍历完数组 或者 数字比target大
  }
  for (var i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] == candidates[i-1]) {
          continue; //横着相同数字只过一次，continue就是不往下走了，走for循环里下一个i
      }
      path.push(candidates[i]);
      if (target == candidates[i]) {  
          result.push(path.map((x)=>x));
      }
      genComb(candidates, i+1, path, result, target-candidates[i]);
      path.pop();
  }
}

combinationSum2([2,5,2,1,2],5);
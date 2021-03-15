/** 2021-3-15 照着131题解法改了出来
 * 【1，2，3】的解法有8个，其实是求Cn0+Cn1+...+Cnn = 2*n = 2*3 = 8, 理解起来就是每个数字都可能包含或者不包含，就是2*2*2
 * 
 * 
 */

var subsets = function(nums) {
  var result = [];
  result.push([]);
  var path = [];
  dfs(nums, 0, result, path);
  return result;
};
var dfs = function(nums, start, result, path) {
  if (start >= nums.length) {
      return;
  }
  for (var i=start; i<nums.length; i++) {
      path.push(nums[i]);
      result.push(path.map((x)=>x));
      dfs(nums, i+1, result, path);
      path.pop();
  }
}
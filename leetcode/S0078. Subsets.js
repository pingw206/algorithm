/** 2021-3-15｜6-1 | 7=6
  照着131题解法改了出来
 * 【1，2，3】的解法有8个，其实是求Cn0+Cn1+...+Cnn = 2*n = 2*3 = 8, 理解起来就是每个数字都可能包含或者不包含，就是2*2*2
 * 按照第一个数向后遍历，然后第二个数，一直到最后一个数，也就是结果是
 * [[],[1],[1,2],[1,2,3],[1,3],[2],[2,3],[3]]
 */

  var subsets = function(nums) {
    var result = [];
    result.push([]);
    var path = [];
    dfs(nums, 0, result, path);
    return result;
  };
  var dfs = function(nums, start, result, path) {
    if (start >= nums.length) { //剪枝条件：start变成最后一个数字之后，就不满足了
        return;
    }
    for (var i=start; i<nums.length; i++) {
        path.push(nums[i]);
        result.push(path.map((x)=>x));   //我竟然这里卡住了，想还需要什么条件才能push，完全不需要啊
        dfs(nums, i+1, result, path);
        path.pop();
    }
  }
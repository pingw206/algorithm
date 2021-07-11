
/** 2021-3-11 | 5-18 | 7-2
 * 跟77题的区别是，每个数字可以用多次，画树形图的时候注意，往下可以重复写一个数字，但是横向不要重复，当垂直加起来超过7时停止
  这里最好不要再新建一个sum和target比较，返回条件也不再是触到最后一个数返回，而是target减小到0时返回
 * 其实也是硬币组合问题，问最多的组合数，用DP解法，让求所有的组合，用DFS回溯法 
 */

 

  var combinationSum = function(candidates, target) {
    var paths = [];
    var path = [];
    dfs(0, candidates, target, path, paths);
    return paths;
  };
  
  var dfs = function(start, candidates, target, path, paths) {
    if (target <= 0) {
        return;
    }
    for (var i = start; i < candidates.length; i++) {
        path.push(candidates[i]);
        if (target == candidates[i]) {
            paths.push(path.map((x)=>x)); 
        }
        dfs(i, candidates, target-candidates[i], path, paths); //上一层是几，这层还是从数字几开始，可重复
        path.pop();
    }
  }
  // 方法二
  // date: 2021.7.11
  
  var combinationSum = function(candidates, target) {
      var paths = [];
      var path = [];
      dfs(candidates, 0, target, path, paths);
      return paths;
  };
  
  var dfs = function(candidates, start, target, path, paths) {
      if (target < 0) {
          return;
      }
      if (target == 0) {
          paths.push(path.map((x)=>x));
      }
      for (var i = start; i < candidates.length; i++) {
          path.push(candidates[i]);
          dfs(candidates, i, target-candidates[i], path, paths);
          path.pop();
      }
  }
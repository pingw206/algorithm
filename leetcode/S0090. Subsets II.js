/**2021-4-10  距离做78题过去了25天，好久没做题了，脑袋有点懵
 * 
 * 
 *  
 */

var subsetsWithDup = function(nums) {
  nums.sort(function(a, b) { return a-b;});
  
  var paths = [[]];
  var path = [];
  dfs(nums, 0, 1, path, paths);
  return paths;
};

var dfs = function (nums, start, depth, path, paths) {  //跟78题相比多了depth
  if (depth-1 == nums.length) {  //或者是不要这个判断条件，后面循环结束时就是i==nums.length, 因为depth比i大1，也就是depth-1 ==nums.length
      return;
  }
  for (var i = start; i < nums.length; i++) {
      if (i > start && nums[i] == nums[i-1]) {  //走完一层i后，也就是走完1，12，122 该进入2时，判断一下；所以再进入第二个2时，就要跳出了
          continue;  //和前面的数字相同的话，跳过本次i循环，进入i++
      }
      path.push(nums[i]);
      paths.push(path.map((x)=>x));
      dfs(nums, i+1, depth+1, path, paths);
      path.pop();
  }
}
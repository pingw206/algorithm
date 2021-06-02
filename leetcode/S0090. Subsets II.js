/**2021-4-10  ｜6-1
 * 首先要排序一下nums，避免出现给[4,4,4,1,4]这种情况
 * 然后其实去重就关键一句判断，需要细细品味
 *  
 */
//方法一
 var subsetsWithDup = function(nums) {
  nums.sort(function(a,b){return a-b;})  //排序
  var path = [];
  var result = [];
  result.push([]);
  dfs(nums,0,path,result);
  return result;
};
var dfs = function(nums,start,path,result) {
  if (start >= nums.length) {
      return;
  }
  for (var i=start;i<nums.length;i++) {
    //跟78题的区别，不能是i>0；也就是说当前的2已成定局，再下一个2时才采取行动；也就是可以从【1，2】到【1，2，2】；但不可能从【1，2】再到【1，2】
      if (i>start && nums[i] == nums[i-1]) {  
          continue;
      }
      path.push(nums[i]);
      result.push(path.map(x=>x));
      dfs(nums,i+1,path,result);
      path.pop()
      
  }
}
//方法二, 或者可以引入depth
var subsetsWithDup = function(nums) {
  nums.sort(function(a, b) { return a-b;});
  
  var paths = [[]];
  var path = [];
  dfs(nums, 0, 1, path, paths);
  return paths;
};

var dfs = function (nums, start, depth, path, paths) {  //多了depth
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
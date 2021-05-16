/** 2021-3-11
 *  跟17题相比，因为是k个 1～n的数字的组合，所以多了个start，标记从几到n
 * 学会画树形图 k=2，n=4，注意不重复的，到3就停止，因为要满足深度是2，
 *    1            2          3
 * 2  3  4       3   4        4
 * 
 */

 //方法一更好一些,给k逐渐减少数字
 var combine = function(n, k) {
  var nums = new Array(n).fill(0);
  nums.forEach(function(num, index) {
      nums[index] = index+1;
  });   //把1～n写进数组里，方便操作nums=[1,2,3,4]
  var paths = [];
  var path = [];
  dfs(0, nums, k, paths, path);
  return paths;
};
var dfs = function(start, nums, k, paths, path) {  //从start到n的数字；k通过倒数限定多少个数字的组合
  if (k == 0) { //没有数字了
      return;   
  }
  for (var i = start; i <= nums.length-k; i++) { //因为nums的index是从0开始，所以start=0，i=nums.len-k
      path.push(nums[i]);
      if (k - 1 == 0) { // or path.length == k
          paths.push(path.map((x)=>x));
      }
      dfs(i+1, nums, k-1, paths, path); //path push完一个数，k-1
      path.pop();//上面的dfs k==0返回后, 就删掉一个数，删完也是返回
  }
}
 //方法二 广度范围不太好理解 
 var combine = function(n, k) {  //n=4,k=2
  var paths = [];
  var path = [];
  dfs(1, 1, paths, path, n, k);
  return paths;
};
/**
* depth: 1-indexed
* start: 1-indexed
*/
var dfs = function(depth, start, paths, path, n, k) {
  if (depth > k) {  //跳出条件，组合不能多于K个长度--深度
      return;
  }
  for (var i = start; i <= n+depth-k; i++) {  //---广度，已经有的个数（dep-1）+ (max...n)本层最大数max到n的个数 =k总个数 即 （dep-1)+(n-max+1)=k 即max = n+dep-k 推理出来的；其实也可以i<=n,可以通过，只不过白多走一些步骤
      path.push(i);
      if (depth == k) {  //路尽头标志
          paths.push(path.map((x)=>x));
      }
      dfs(depth+1, i+1, paths, path, n, k);
      path.pop();
  }
}
/** 2021-3-11 | 5-16 | 7-2 
 *  跟17题相比，因为是k个 1～n的数字的组合，不能有[1,1],也不能有[2,1]
    所以多了个start，标记从几到n, 避免重复
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
    for (var i = start; i <= nums.length-k; i++) { //因为nums的index是从0开始，所以start=0，i最大只能到nums.len-k，是为了最后一个数还能有深度k，比如这里是到3
        path.push(nums[i]);
        if (k == 1) { // or path.length == k
            paths.push(path.map((x)=>x));
        }
        dfs(i+1, nums, k-1, paths, path); //是i+1, 不是start+1;  path push完一个数，k-1
        path.pop();//上面的dfs k==0返回后, 就删掉一个数，删完也是返回
    }
  }
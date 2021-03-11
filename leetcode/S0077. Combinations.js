/** 2021-3-11
 *  跟17题相比，因为是k个 1-n的数字的组合，所以多了个start，标记从几到n
 * 学会画树形图 
 *   1             2          3
 * 2  3  4       3   4        4
  3 4 4          4
 * 
 */

 //方法二  
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
  for (var i = start; i <= n+depth-k; i++) {  //---广度，n-i+1(范围) > k-depth（个数） 推理出来的
      //console.log(i); 1234-234-34
      path.push(i);
      if (depth == k) {  //路尽头标志
          paths.push(path.map((x)=>x));
      }
      dfs(depth+1, i+1, paths, path, n, k);
      path.pop();
  }
}
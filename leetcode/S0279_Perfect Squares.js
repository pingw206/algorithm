/*2021-2-19 
解法的关键在于f(n)有多重组合方式，而不是说直接从能减掉的最大平方数往下算
例如n=43，那么f(43)=f(43-36)+1或f(43-25)+1或者f(43-16)+1, ..., 或者f(42-1)+1, 
然后从何这些子问题f(43-36), f(43-25), ... , f(43-1)中选择一个最小的解，再加上1即为f(43)的解；
对于n来依赖sqrt(n)个子问题，递推关系可以表示为 f(n) = min{f(n-1)+1, f(n-4)+1, ... , f(n-sqrt(n)*sqrt(n)+1)}，
其中sqrt(n)为平方根向下取整，但是在DP过程中并不需要计算sqrt(n)；
注意加的那个1就是减掉的那个数
*/
//方法一 首先看一下好理解的方法,用一个暂时的数组来存放dp[i];
var numSquares = function(n) {
  var dpTable = new Array(n+1);//n+1是为了给0留位置
  dpTable[0] = 0; // 0的人为设置是有意义的，方便后面[i-j*j]结果为0时的调用
  for (var i = 1; i <= n; i++) {
      var tempArray = new Array(); // 存放这一轮的所有子问题的结果数
      for (var j = 1; j*j <= i; j++) {
          tempArray.push(dpTable[i-j*j]+1);
      }
      dpTable[i] = Math.min.apply(null, tempArray);//从子问题结果数中选一个最小数放到dp[i]
  }
  return dpTable[n];
};
//方法二 比较好，张氏
var numSquares = function(n) {
  var dpTable = new Array(n+1);
  dpTable[0] = 0; // initialization of dp table
  for (var i = 1; i <= n; i++) {
      // f(i) depends on sqrt(i) sub problems
      // f(i) = min{f(i-1), f(i-4), ... , f(i-sqrt(i)*sqrt(i))} + 1
      var minNum = i; // max number of squares，人为设置一个初始最大值，方便后面求min时不断覆盖掉
      for (var j = 1; j*j <= i; j++) {
          minNum = Math.min(dpTable[i-j*j]+1, minNum);
      }
      dpTable[i] = minNum;
  }
  return dpTable[n];
};
//方法二，计算平方根比较耗费资源，不推荐计算
var numSquares = function(n) {
  var dpTable = new Array(n+1);
  dpTable[0] = 0; // f(0) = 0;
  dpTable[1] = 1; // f(1) = 0;
  for (var i = 2; i <= n; i++) {
      var sqrt = Math.floor(Math.sqrt(i));
      var minNum = i; // i could be made up with i 1s.
      for (var j = 1; j <= sqrt; j++) {
          minNum = Math.min(dpTable[i-j*j], minNum);
      }
      dpTable[i] = minNum + 1;
  }
  return dpTable[n];
};
//2021-2-25 我是没想到怎么把多个数的乘积DP下去
/**
 * 整数n可能拆成 1+(n-1)，2+(n-2), 3+(n-3), ... , (n-2) + 2; 因此递推关系为
f(n)=max {i*(n-i), i*f(n-i)}，其中i∈{1, ..., n-2}，i*(n-i)是把n拆成两个数，i*f(n-i)是拆成i和整数(n-1)的拆分；
 */

var integerBreak = function(n) {
  var dpTable = new Array(n+1);
  dpTable[0] = 0;
  dpTable[1] = 1;
  for (var i = 2; i <= n; i++) {
      var curMax = 1; // defaule: 1*1*1*...*1=1
      for (var j = 1; j < i; j++) {
          // i can be broken into two numbers {i-j, j}
          //                   or more numbers than two {f(i-j), j}
          curMax = Math.max(curMax, (i-j)*j, dpTable[i-j]*j);
      }
      dpTable[i] = curMax;
  }
  return dpTable[dpTable.length-1];
};
/**2021-2-3 没太懂。用二维的数组来表示，是区别于之前的地方。最后一个格子是上面和左面的方法之合。可以先横着遍历或者竖着遍历 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  var dpTable = new Array(m);
  for (var i = 0; i < m; i++) {
      dpTable[i] = new Array(n);
  }
  
  for (var i = 0; i < m ; i++) {
      for (var j = 0; j < n; j++) {
          if (i == 0 || j == 0) {
              dpTable[i][j] = 1;
          } else {
              dpTable[i][j] = dpTable[i-1][j] + dpTable[i][j-1];
          }
      }
  }
  
  return dpTable[m-1][n-1];
};
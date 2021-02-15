/*2021-2-15 我有一点点想到了障碍怎么处理，就是一个点遇到由障碍组成时，那么要不算障碍的方法，也就是0的处理 */

var uniquePathsWithObstacles = function(obstacleGrid) {
  var m = obstacleGrid.length; //行数
  var n = obstacleGrid[0].length; //列数
  
  var dpTable = new Array(m);
  for (var i=0; i < m; i++) {
      dpTable[i] = new Array(n).fill(0); //这里区别于62题的地方，必须得填0，不然后面break跳过的时候，里面没有数字
  }
  
  //initialize the boundary of dp table 第一行和第一列的方法填1处理
  for (var j=0; j<n; j++) {
      if (obstacleGrid[0][j] == 1) {
          break;
      }
      dpTable[0][j] = 1;
  }
  for (var k=0; k<m; k++) {
      if (obstacleGrid[k][0] == 1) {
          break;
      }
      dpTable[k][0] = 1;
  }
  // dp progress
  for (var i=1; i < m; i++) {
      for (var j=1; j < n; j++) {
          if (obstacleGrid[i][j] == 1) {
              dpTable[i][j] = 0;
          } else {
              dpTable[i][j] = dpTable[i-1][j] + dpTable[i][j-1]
          }
      }
  }
  
  return dpTable[m-1][n-1];
};

/* 方法二
*我试图不在初始的时候赋值0，在后面再赋值，经过多次尝试，发现没那么简单，尤其是不能跳过break 
而且不能先判断 if (obstacleGrid[k][0] == 1) {
          dpTable[k][0] = 0;
          都会导致障碍物后面还会被填值，遇到障碍物，后面就都走不成了，都是0，循环都不能再走
*/
var uniquePathsWithObstacles = function(obstacleGrid) {
  var m = obstacleGrid.length; //行数
  var n = obstacleGrid[0].length; //列数
  
  var dpTable = new Array(m);
  for (var i=0; i < m; i++) {
      dpTable[i] = new Array(n);
  }
  
  //initialize the boundary of dp table 第一行和第一列的方法填1处理
  for (var j=0; j<n; j++) {
      if (obstacleGrid[0][j] == 0) {
          dpTable[0][j] = 1;
      } else {
         for (var v=j;v<n;v++){
             dpTable[0][v] = 0; 
         }
         break;
         
      }
  }
  for (var k=0; k<m; k++) {
      if (obstacleGrid[k][0] == 0) {
          dpTable[k][0] = 1;
      } else {
          for (var v=k;v<m;v++){
             dpTable[v][0] = 0; 
          }
          break;
      } 
  }
  // dp progress
  for (var i=1; i < m; i++) {
      for (var j=1; j < n; j++) {
          if (obstacleGrid[i][j] == 1) {
              dpTable[i][j] = 0;
          } else {
              dpTable[i][j] = dpTable[i-1][j] + dpTable[i][j-1]
          }
      }
  }
  console.log(dpTable)
  return dpTable[m-1][n-1];
};
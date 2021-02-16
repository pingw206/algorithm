/**2021-2-16 我自己一遍写出来啦，就是有些地方是dpTable还是grid开始没分清楚 */
var minPathSum = function(grid) {
  var n = grid.length;
  var m = grid[0].length;
  
  var dpTable = new Array(n);
  for (var i=0; i< n; i++) {
      dpTable[i] = new Array(m);
  }
  
  for (var i=0; i<n; i++) {
      for (var j=0; j<m; j++) {
          if (i==0 && j==0){
              dpTable[0][0] = grid[0][0];
          } else if (i==0) {
              dpTable[0][j] = dpTable[0][j-1] + grid[0][j];
          } else if (j==0) {
              dpTable[i][0] = dpTable[i-1][0] + grid[i][0];
          } else {
             dpTable[i][j] = Math.min(dpTable[i-1][j], dpTable[i][j-1]) + grid[i][j]; 
          }
          
      }
  }
  console.log(dpTable)
  return dpTable[n-1][m-1];
};

/**张磊的解法 */
var minPathSum = function(grid) {
  var m = grid.length;
  var n = grid[0].length;
  
  var dpTable = new Array(m);
  for (var i = 0; i < m; i++) {
      dpTable[i] = new Array(m).fill(0);
  }
  
  // initialize the boundary
  dpTable[0][0] = grid[0][0];
  for (var i = 1; i < m; i++) {
      dpTable[i][0] = dpTable[i-1][0] + grid[i][0];
  }
  for (var j = 1; j < n; j++) {
      dpTable[0][j] = dpTable[0][j-1] + grid[0][j];
  }
  
  // dp progress: left to right, top to bottom
  for (var i = 1; i < m; i++) {
      for (var j = 1; j < n; j++) {
          dpTable[i][j] = Math.min(dpTable[i-1][j], dpTable[i][j-1]) + +grid[i][j];
      }
  }

  return dpTable[m-1][n-1];
};
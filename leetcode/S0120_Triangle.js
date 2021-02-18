/*2021-2-18 三角形这个最后有多个出口，跟之前的正方形不同，那种只有一个出口在右下角。所以方法也不太相同。不能再用之前的方法。
需要把最后一行的每个出口都计算一下，然后取和的最小值。不能直接取最后一行的最小的数字往上推，因为不是看每一行的数字是否最小，
而是看每种路径的和最小。这是我的错误解法忽略的地方*/
/**方法一 先实现一下 space complexity: O(n*n) 的方法，dpTable算成一个矩阵，好理解一点 */
var minimumTotal = function(triangle) {
  // initialize the DP table
  var dpTable = new Array(triangle.length);
  for (var i = 0; i < triangle.length; i++) {
      dpTable[i] = new Array(triangle[i].length).fill(0);
  }
  
  // initialization of DP
  dpTable[0][0] = triangle[0][0];
  
  // DP progress
  for (var i = 1; i < triangle.length; i++) {
      for (var j = 0; j < triangle[i].length; j++) {
          if (j == 0) { // only one path for the first node
              dpTable[i][j] = dpTable[i-1][j] + triangle[i][j];
          } else if (j == i) { // only one path for the last node
              dpTable[i][j] = dpTable[i-1][j-1] + triangle[i][j];
          } else { // two paths for other nodes in the same row
              dpTable[i][j] = Math.min(dpTable[i-1][j-1], dpTable[i-1][j]) + triangle[i][j];
          }
      }
  }
  
  return Math.min.apply(null, dpTable[dpTable.length-1]);//求数组中最小的数的方法
};
/**方法二 不用保存成矩阵，因为每次算完只保存最后一轮的结果就行，所以用矩阵
 *  using tempDpTable to swap dpTable，每一轮算完再变tempTable*/
var minimumTotal = function(triangle) {
  // initialize the DP table
  var dpTable = new Array(triangle.length);
  
  // initialization of DP
  dpTable[0] = triangle[0][0];
  
  // DP progress
  for (var i = 1; i < triangle.length; i++) {
      var tempDpTable = dpTable.map((x)=>x);//copy 一个数组，不是引用，不会改变原来的数组
      for (var j = 0; j <= i; j++) {
          if (j == 0) { // only one path for the first node
             tempDpTable[0] = dpTable[0] + triangle[i][0];
          } else if (j == i) { // only one path for the last node
              tempDpTable[i] = dpTable[i-1] + triangle[i][j];
          } else { // two paths for other nodes in the same row
              tempDpTable[j] = Math.min(dpTable[j], dpTable[j-1]) + triangle[i][j];
          }
      }
      dpTable = tempDpTable;
  }

  return Math.min.apply(null, dpTable);
};
/**方法三 最好的办法--不用temp， 倒着覆盖的方法往dpTabe里填数，把之前算出来的数更改；注意必须是倒着填，不然会被覆盖 */
var minimumTotal = function(triangle) {
  // initialize the DP table
  var dpTable = new Array(triangle.length);
  
  // initialization of DP
  dpTable[0] = triangle[0][0];
  
  // DP progress
  for (var i = 1; i < triangle.length; i++) {
      for (var j = i; j >= 0; j--) {
          if (j == i) { // only one path for the last node
              dpTable[i] = dpTable[i-1] + triangle[i][j];
          } else if (j == 0) { // only one path for the first node
              dpTable[0] = dpTable[0] + triangle[i][0];
          } else { // two paths for other nodes in the same row
              dpTable[j] = Math.min(dpTable[j], dpTable[j-1]) + triangle[i][j];
          }
      }
  }

  return Math.min.apply(null, dpTable);
};

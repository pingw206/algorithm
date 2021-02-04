//2021-2-4 这道题应该能做出来的；不要用push的方法，而要用直接赋值的方法；关键是想好两个边界怎么判断；然后怎么定上一层的值。
var generate = function(numRows) {
  var dpTable = new Array(numRows);
  for (var i=0; i<numRows;i++) {
    dpTable[i] = new Array(i+1);
  }
  for (var i=0;i<numRows; i++) {
    for (var j=0;j<i+1;j++){
      if (j==0||j==i) {
        dpTable[i][j] = 1;
      } else {
        dpTable[i][j] = dpTable[i-1][j-1] + dpTable[i-1][j];
      }
    }
  }
  return dpTable;
}
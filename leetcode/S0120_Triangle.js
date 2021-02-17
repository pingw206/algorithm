//我的方法不对，2021-2-17 想想哪里不对
var minimumTotal = function(triangle) {
  var n = triangle.length;
  var dpTable = new Array(n);
  
  dpTable[0] = triangle[0][0]; 
  
  for (var i=1; i<n; i++) {
      let minTri = triangle[i][0];
      let minIndex = 0;
      for (var j=0; j<i;j++) {           
          if (triangle[i][j] < minTri) {
              minTri = triangle[i][j];
              minIndex = j;
          }
      }
      console.log(minIndex)
      if (minIndex == 0) {
          dpTable[i]=triangle[i-1][minIndex]+ triangle[i][minIndex];
      } else {
          dpTable[i]= Math.min(triangle[i-1][minIndex], triangle[i-1][minIndex-1]) + triangle[i][minIndex] + dpTable[i-2];
      }
      
  }
  
  return dpTable[n-1];
};
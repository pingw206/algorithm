/** 2021-2-28
 * 其实还是LCS类
 * (  四个角分别是   A  |  Aa
                f1 B  |  B  f2
                  ----|----
                f3 A  |  Aa  f4
                   Bb |  Bb
如果 a==b，f4 == f1
区别点在于 a!= b, 把B变成A，f4有三条路可以走， f4=f2+1(delete b:Bb => B）;f4=f3+1(insert a:Bb => Bba);f4=f1+1(replace b 为a: Bb => Ba)
现在多了一种replace方法，可以直接把f1变到f4
*/
var minDistance = function(word1, word2) {
  var dpTable = new Array(word1.length+1);
  for (var i = 0; i < dpTable.length; i++) {
      dpTable[i] = new Array(word2.length+1);
  }
  
  // initialize the DP table
  dpTable[0][0] = 0;
  for (var i = 1; i < dpTable.length; i++) {
      dpTable[i][0] = i;
  }
  for (var j = 1; j < dpTable[0].length; j++) {
      dpTable[0][j] = j;
  }
  
  // DP Progress
  for (var i = 1; i < dpTable.length; i++) {
      for (var j = 1; j < dpTable[0].length; j++) {
          if (word1[i-1] == word2[j-1]) {
              dpTable[i][j] = dpTable[i-1][j-1];
          } else {
              dpTable[i][j] = Math.min(dpTable[i-1][j-1], dpTable[i-1][j], dpTable[i][j-1]) + 1;
          }
      }
  }
  
  return dpTable[dpTable.length-1][dpTable[0].length-1];
};
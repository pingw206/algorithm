/** 2021-2-27  这是一道非常经典的题
 * 1. 求两个字符串的最长公共子序列；子序列的定义为：顺序不变，不要求连续的字符集，例如："ace"是"abcde"的一个子序列
 * 2. DP表画成二维：横向是text1字符串，纵向是text2字符串；
 * 3. 定义二维DP表，f(i,j)表示text1[0:i]和text2[0:j]两个子串的解，f(i,j)依赖两个子问题；递推公式如下
dp[i][j]={ dp[i−1][j−1]+1,if text1[i]==text2[j];
           max⁡(dp[i−1][j],d[i][j−1]), if text1[i]!=text2[j] }
    4.注意DP表的初始化：二维DP表，维度为[text1.length+1][text2.length+1]，第一行和第一列都为0表示其中有一个字符串为空的情况
    5.扩展：求出这个LCS字符串 ，还没看明白 
*/

var longestCommonSubsequence = function(text1, text2) {
  // initialize the DP table: fill in the first row and first column with 0
  var dpTable = new Array(text1.length+1);
  dpTable[0] = new Array(text2.length+1).fill(0);
  for (var i = 1; i < dpTable.length; i++) {
      dpTable[i] = new Array(text2.length+1);
      dpTable[i][0] = 0;
  }

  // DP preogress
  for (var i = 1; i < dpTable.length; i++) {
      for (var j = 1; j < dpTable[i].length; j++) {
          if (text1[i-1] == text2[j-1]) {   //注意这里字符串要少1的，因为dp表里多了一个0
              dpTable[i][j] = dpTable[i-1][j-1] + 1;
          } else {
              dpTable[i][j] = Math.max(dpTable[i-1][j], dpTable[i][j-1]);
          }
      }
  }

  return dpTable[dpTable.length-1][dpTable[0].length-1];  //或dpTable[text1.length][text2.length]
};
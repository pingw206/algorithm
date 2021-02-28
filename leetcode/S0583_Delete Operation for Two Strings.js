/** 2021-2-28 跟LCS其实类似的思想，推导公式有区别
 * 两个方法，方法一，直接推导DP
 * f(i,j)表示word1[0:i]和word2[0:j]两个子串的解，f(i,j)依赖两个子问题，递推公式如下
dp[i][j]={dp[i−1][j−1],if word1[i]==word2[j]
          min⁡(dp[i−1][j], d[i][j−1])+1, if word1[i]!=word2[j]}
思考证明一下： 什么时候上一步是由对角线推出，什么时候是由上下的最小值推出
(例如，四个角分别是   A  |  Aa
                f1 B  |  B  f2
                  ----|----
                f3 A  |  Aa  f4
                   Bb |  Bb
当a == b时， 由对角推导的话，因为多的这两个字符相同，不需要删除，故 dp[i][j]= dp[i−1][j−1]；
当a == b时， 如果由侧边,如上面Aa,B 推导，可能不需要删,等于d[i][j−1], 如(ef g 和 fc) 到 (ef g 和 fc g);
            也有可能需要删掉多余的b,如（ef g和eg)到(ef g和eg g)，g和前面已有的重复了,故d[i][j−1]+1,
            因为不确定，所以不能用侧边推导，只能由对角推导
当a != b时， 由侧边推导，多了一个不同的，删掉这个， 故 d[i][j−1]+1, 因为求最小删除，所以是min
当a != b时， 如果由对角推导，+2,可能需要删掉两个不同的ab，也可能导致删多，不是最优解(ea和aa 到 ea a和aa b ，删2+2个就多了)
            但是可以放到min{}里面，不过没必要，因为肯定是大于等于侧边推导的  
            【证明】对角和侧边大小关系：f4 = min{f1+2,f2+1,f3+1}
            因f2 = f1 +1 或 f2 = f1 -1  (a是多余的要删掉 或 a等于B中最后一个数字，f1中删掉的B中的一个不需要删了)
            故f1 = f2 -1 或 f1=f2+1， 故min{f1+2,f2+1,f3+1} => min{f2-1+2,f2+1+2,f2+1,f3+1} =>min{f2+1,f2+3,f2+1,f3+1} 所以没必要写对角线的结果，肯定是大于等于侧边的      

 * 方法二， 求出来LCS，然后 size1+size2 -2LCS  （sea + eat - 2ea = st）
 */
//方法一
var minDistance = function(word1, word2) {
  var dpTable = new Array(word1.length+1);
  dpTable[0] = new Array(word2.length+1).fill(0);
  for (var i = 1; i < dpTable.length; i++) {
      dpTable[i] = new Array(word2.length+1);
  }
  
  dpTable[0][0] = 0;
  // initialize the first column of DP table
  for (var i = 1; i < dpTable.length; i++) {
      dpTable[i][0] = i;  //跟0相比，多的都要删掉
  }
  // initialize the first row of DP table
  for (var j = 1; j < dpTable[0].length; j++) {
      dpTable[0][j] = j;   //跟0相比，多的都要删掉
  }

  for (var i = 1; i < dpTable.length; i++) {
      for (var j = 1; j < dpTable[i].length; j++) {
          if (word1[i-1] == word2[j-1]) {
              dpTable[i][j] = dpTable[i-1][j-1];
          } else {
              dpTable[i][j] = Math.min(dpTable[i-1][j], dpTable[i][j-1]) + 1;
          }
      }
  }
  
  return dpTable[dpTable.length-1][dpTable[0].length-1];
};
//或者方法一里面的长度像我这样用word表示，不过这样不容易清楚行列都是谁
var minDistance = function(word1, word2) {
  var dpTable = new Array(word1.length+1);
  for (var i=0; i<word1.length+1; i++) {
      dpTable[i] = new Array(word2.length+1);
  }
  for (var j=0;j<word1.length+1;j++) {
      dpTable[j][0] = j;  //一次出错是因为这里写成了 dpTable[0][j]  注意行列不要弄反
  }

  for (var j=1;j<word2.length+1;j++) {
      dpTable[0][j] = j;
  }
  for (var i = 1; i<word1.length+1;i++) {
      for (var j=1;j<word2.length+1;j++) {
          if (word1[i-1] == word2[j-1]) {
              dpTable[i][j] = dpTable[i-1][j-1];
          } else {
              dpTable[i][j] = Math.min(dpTable[i-1][j],dpTable[i][j-1]) + 1;
          }
      }
  }
  return dpTable[word1.length][word2.length];
};

//方法二， size1+size2 -2LCS

var minDistance = function(word1, word2) {
  // initialization the DP table: fill in the first row and first column with 0
  // var dpTable = new Array(text1.length+1).fill(new Array(text2.length+1)); // WRONG!
  var dpTable = new Array(word1.length+1);
  dpTable[0] = new Array(word2.length+1).fill(0);
  for (var i = 1; i < dpTable.length; i++) {
      dpTable[i] = new Array(word2.length+1);
      dpTable[i][0] = 0;
  }

  // DP preogress
  for (var i = 1; i < dpTable.length; i++) {
      for (var j = 1; j < dpTable[i].length; j++) {
          if (word1[i-1] == word2[j-1]) {
              dpTable[i][j] = dpTable[i-1][j-1] + 1;
          } else {
              dpTable[i][j] = Math.max(dpTable[i-1][j], dpTable[i][j-1]);
          }
      }
  }
  
  return word1.length + word2.length - 2*dpTable[dpTable.length-1][dpTable[0].length-1];
};
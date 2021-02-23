/**2021-2-23 这道题好难想
 * 跟322题的区别是，那道题是求最小值，不怕出现重复的现象，这道题求和，要避免重复的组合出现，所以一维数组不再可以，要用二维数组
 * 重复举例：coins=[1,2],sum=3, f(3) = sum{f(1)+1, f(2)+1}={{1,2},{ {1,1,1},{2,1} },} 其中f(1)+1是指由2组成的情况f(3-2)，和剩余为1， 加上1种也就是2这种； 
 * 二维数组解释 dp[i][j] = dp[i-1][j]+dp[i][j-coins[i-1]]，比如coins = [1,2,5], amount = 100, 运行到i=3时
 * 1.coins数组是按大小顺序排列的，
 * 2. dp[i][j] 中 i表示coins的length， i=1时组成硬币种类是[1],i=2时硬币种类[1,2],i=3时硬币种类[1,2,5]是按顺序排列的
 * 3. dp[i][j] 中 j是指题目中的amount，也就是sum
 * 4. dp[i-1][j] 中 i-1是不含5的时候，length=i-1=2, 也就是coins=[1,2] 组成和为10的情况数
 * 5. dp[i][j-coins[i-1]] 是说i=3时，length = 3,coins=[1,2,5]，比前面多了一个5，所以这个时候amount=100-5=95；倒不是说这个组成中只有一个5， 还能有别的5，但是就是在dp[3][95]的组成中了，下面接着推了
 * 6. 全解：由[1,2,5]组成100的两个子问题是，子问题由[1,2]组成的100 + 子问题由[1,2,5]组成的95的种类和（这里100-5 就是1种的意思） 
 *    
 */

var change = function(amount, coins) {
  // initialize the DP table
  var dpTable = new Array(coins.length+1);
  for (var i = 0; i < dpTable.length; i++) {
      dpTable[i] = new Array(amount+1).fill(0);
      dpTable[i][0] = 1;
  }
  
  // DP progress
  for (var i = 1; i <= coins.length; i++) {
      for (var j = 1; j <= amount; j++) {
          dpTable[i][j] = dpTable[i-1][j] + (j-coins[i-1] >= 0 ? dpTable[i][j-coins[i-1]] : 0);
      }
  }
  
  return dpTable[coins.length][amount];
};
/* 2021-2-22
和279题完美平方数是一种题型，90%思路都是类似的。
这里依然不可以人为的觉得先分配最大的coin来组合，而是每种都有可能，通过计算得出哪种最少
递推关系是 f(amount - coins[j])+1, 其中coin[j]是那个一种可能
*/
var coinChange = function(coins, amount) {
  coins.sort(function(a,b){return a-b;});
   
  var dpTable = new Array(amount+1);

  // initialize the DP table
  dpTable[0] = 0;

  //dp Progress
  for (var i=1; i<=amount; i++) {
    var minNum = -1; // default value: -1, means i cannot be made up,无法加和得出时的返回值
    for (var j=0;coins[j] <= i && j<coins.length;j++) {
      // the sub problem should be valid
      if (dpTable[i-coins[j]] != -1) {
        minNum = (minNum == -1) ? dpTable[i-coins[j]]+1 : Math.min(minNum, dpTable[i-coins[j]]+1);
      }
    }
    dpTable[i] = minNum;
  }
  return dpTable[dpTable.length-1];
};
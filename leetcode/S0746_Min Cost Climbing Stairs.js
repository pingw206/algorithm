/*init:2021-1-27 动态规划要从顶层的思想来往下想，而不是常规的思考办法从1往n；所以f(n)= min（f(n-1)+f(n-2))
跳到顶楼，可以从f(n-1)起跳，也可以从f(n-2)起跳，取花费最少到台阶起跳。一直倒推到最少情况是f(3):可以从第一级起跳，
也可以从第二级起跳，都不需要之前积累的cost。 但是特殊情况是跳到第一或第二级，是从外面跳进来的，不需要花费。
注意规则：从某层起跳要花钱，最后一步要跳走，跳到顶上。
用动态规划表DPTable，保存中间结果
*/
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  var dpTable = new Array(cost.length+1);
  dpTable[0] = 0;
  dpTable[1] = 0;
  dpTable[2] = Math.min(cost[0], cost[1]);
  for (var i = 3; i < cost.length+1; i++) {
      dpTable[i] = Math.min(dpTable[i-1]+cost[i-1], dpTable[i-2]+cost[i-2]);
  }
  return dpTable[dpTable.length-1];
};
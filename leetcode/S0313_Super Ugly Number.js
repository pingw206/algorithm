//2021-2-24 跟264题一样，就是没想到primes数组不固定时怎么用index，也是需要一个IndexTable的
//求最小值是用迭代的方法慢慢替换的
var nthSuperUglyNumber = function(n, primes) {
  var dpTable = new Array(n);
  dpTable[0] = 1;
  
  var indexTable = new Array(primes.length).fill(0); //照例先给index赋值0，再慢慢往上加
  for (var i = 1; i < n; i++) {
      var curMin = undefined;
      for (var j = 0; j < primes.length; j++) {
          curMin = curMin == undefined ? dpTable[indexTable[j]]*primes[j] : Math.min(curMin, dpTable[indexTable[j]]*primes[j]);
      }
      dpTable[i] = curMin;
      for (var j = 0; j < primes.length; j++) {
          if (curMin == dpTable[indexTable[j]]*primes[j]) {
              indexTable[j]++;
          }
      }
  }
  return dpTable[dpTable.length-1];
};
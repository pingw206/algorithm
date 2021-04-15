/**2021-2-26 | 4-15 
 * 复习一下质数的相关定义
 * 1.质数：除了1和它本身外不存在任何因子的数
 * 2.任何数最后都可以分解成全部是质数的乘积
 * 3.判断一个数n是不是质数，可以用n 除以 2到√n之间的所有的质数，如果都不能整除，那么n是质数
 *  （因为a.如果能整除，说明有别的因子存在(除去1和他本身)，别的因子也是由质数乘积组成的
 *    b. 之所以只除到√n， 因为（√n）^2=n, 如果比√n大的因子存在，那么必然存在比√n小的因子，在之前已经算过了，所以走到一半就够了
 * 4.开跟号运算比较耗费资源，难算，还涉及到整除问题，所以用平方来反向限定
 */

var countPrimes = function(n) {
  if (n <= 2) { return 0; }
  
  var primes = new Array();
  primes.push(2);
  
  for (var i = 3; i < n; i++) {    //注意没有等于号，题目是less than
      var isPrime = true;
      for (var j = 0; j < primes.length && primes[j]*primes[j] <= i; j++) {  //注意因子要算到等号
          if (i % primes[j] == 0) {
              isPrime = false;
              break;  //这个break可以不用写，但是其实有一个因数存在就不用继续下去了，节省计算
          }
      }
      if (isPrime) {
          primes.push(i);    
      }
  }
  
  return primes.length;
};
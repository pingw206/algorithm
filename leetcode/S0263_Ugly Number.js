//2021-2-19 我的递归解法，一遍过。这道题不算标准的DP题
var isUgly = function(num) {
  if (num <=0) {
      return false;
  } else if (num == 1){
      return true;
  } else if(num%2 == 0){
      return isUgly(num/2);
  } else if(num%3 == 0){
      return isUgly(num/3);
  } else if (num%5 == 0){
      return isUgly(num/5);
  } else {
      return false;
  }
};
//方法二 迭代循环，张氏解法
var isUgly = function(num) {
  if (num <= 0) {
      return false;
  }
  var primes = [2, 3, 5];
  primes.forEach(function(prime){
      while (num % prime == 0) {
          num /= prime;
      }
  });
  return num == 1;
};

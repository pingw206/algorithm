//2021-2-25 好好搞懂位运算
//做题基础：如何看一个数中有几个1（🌰8， 就是拿(1,10,100,1000)分别与8与，得到几个非0的结果，就是8中有几个1
/*位移：
<<	零填充左位移	通过从右推入零向左位移，并使最左边的位脱落。
>>	有符号右位移	通过从左推入最左位的拷贝来向右位移，并使最右边的位脱落。
>>>	零填充右位移	通过从左推入零来向右位移，并使最右边的位脱落。
*/

//方法一，原始解法，非DP方法，复杂度O（32n），因为默认限制了bit是32位的，js里面没声明
var countBits = function(num) {
  var result = [];
  for (var i=0; i<=num; i++) {
      var bitNum = 0;
      for (var j=0; j<= 31; j++) {
          if ( (i & (1 << j)) !== 0 ) {  //依次得到1，10，100，1000等可以用位移，也可以乘2
              bitNum++;
          }  
      }
      result.push(bitNum);
  }
  return result;
};

//方法二，DP解法，总结规律，如果是偶数的话，最后一位是0， 除以2后，两个数的1数量依然是一样的；如果是奇数，除以2后会少1
//这里偶数奇数就是看最后一位是不是1，这样用&1更快，比除以2
var countBits = function(num) {
  var dpTable = new Array(num+1);
  dpTable[0] = 0;
  for (var i = 1; i <= num; i++) {
      if (i & 1) { // same as if (i % 2) but mode operation % is more inefficient
          dpTable[i] = dpTable[i >> 1] + 1;
      } else {
          dpTable[i] = dpTable[i >> 1];
      }
  }
  return dpTable
};
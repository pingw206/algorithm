/** 2021-2-2|3-29| 6-9  */
/*  字母对应的编码是从1-26，所以要引入一个判断是否是有效编码的函数，一位数的时候不能是0，两位数的时候要转成十进制再判断 10<=x<=26
还是很典型的DP题 ，dpTable字符串多一位数后，如果多的这一位数字有效，那么和dpTable[i-1]种方法一样；等等，同爬楼梯
 递推公式为：F(n) = {F(n-1) if s[n] is valid} + {F(n-2) if s[n-1:n] is valid}；
语法1： str.substring(indexStart[, indexEnd]) 
提取从 indexStart 到 indexEnd（不包括）之间的字符
如果省略 indexEnd，substring 提取字符一直到字符串末尾。
语法2：str.substr(start[, length])   （该方法应该尽量被避免，不过在这个题中还是很好用的）
start 开始提取字符的位置。length 提取的字符数。
 */
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  // edge case: s="0"
  if (s.length == 1) {
      return isValidEncoding(s) ? 1 : 0;
  }
  
  var dpTable = new Array(s.length);
  dpTable[0] = isValidEncoding(s[0]) ? 1 : 0;
  dpTable[1] = (isValidEncoding(s[1]) ? dpTable[0] : 0) + (isValidEncoding(s.substr(0, 2)) ? 1 : 0);
  for (var i = 2; i < s.length; i++) {
      dpTable[i] = (isValidEncoding(s[i]) ? dpTable[i-1] : 0) + (isValidEncoding(s.substr(i-2+1, 2)) ? dpTable[i-2] : 0);
  }
  return dpTable[dpTable.length-1];
};

/**
* @param {string} encoding
* @return {boolean}
*/
var isValidEncoding = function(encoding) {
  if (encoding.length == 1) {
      return encoding != "0";  //这里是字符串
  } else if (encoding.length == 2) {
      var num = parseInt(encoding, 10);   // 直接parseInt(encoding)也行，因为输入的都是数字
      return (num >= 10 && num <= 26);
  } else {
      return false;  //本题中不需要这层判断，但是作为一个独立的函数还是严谨一些好，万一别人传3个长度呢
  }
}
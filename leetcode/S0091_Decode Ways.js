/** init 2021-2-2 看了半天人家的答案才看懂，让我想到设置这些条件已经很难了，再实现就更难了。。。*/


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
      return encoding != "0";
  } else if (encoding.length == 2) {
      var num = parseInt(encoding, 10);
      return (num >= 10 && num <= 26);
  } else {
      return false;  //本题中不需要这层判断，但是作为一个独立的函数还是严谨一些好，万一别人传3个长度呢
  }
}

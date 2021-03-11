/** 2021-3-11  之前的题是一棵树找路径，现在是多棵树
 * ① DFS：把n个for循用递归实现；② BFS：两个vector互相交换；
 * 
 */
var letterCombinations = function(digits) { //digits = "23"
  var digitCharMap = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];  // “23”-“abc"*"def"
  var result = []; // better to allocate the memory proactively
  var path = []
  genComb(0, digits, path, result, digitCharMap);
  return result;
};

var genComb = function(index, digits, path, result, digitCharMap) {  //index=0时
  if (index >= digits.length) {  //保证index < "23".length, 也就是说digits是几个数字，那么组合中单词的长度就是几个字母;跳出栈调用的语句
      return;
  }
  var curCharSet = digitCharMap[digits[index]];  //“abc”，在这一步换树
  for (var i = 0; i < curCharSet.length; i++) {   
      path.push(curCharSet[i]); //path = [a]
      if (index == digits.length-1) {  //走到路尽头的标志（叶子节点）
          result.push(path.map((x)=>x).join(""));
      }
      genComb(index+1, digits, path, result, digitCharMap); //index=1, curCharSet = "def",path=["a","d"], 此时index == digits.length-1, 走完一条路径跳出栈,下面pop,继续一条新路
      path.pop();
  }
}
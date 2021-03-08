/** 2021-3-5 
 * 1. 字母转换数字，a在ASCII表中对应的是97，然后别的字母依次增加；这里要和0开始是a对应起来
 * 2. 数字是一开始就转换成字母再遍历？还是生成path之后再转换？---生成path，比较之前转换
 * 3. 字符串比较大小，是从首位开始比较，比如 ab < ac; a < ab;
 * 4. result不能定义为一个空字符串，要定义成对象；因为在函数中，简单数据类型是copy出来的，不会被改变，
 * 引用地址的对象才会被改变；还要知道对象的创建方式，如何赋值
 * 
 */

var smallestFromLeaf = function(root) {
  var result = new Object({"key":""});
  var path = [];
  findSmallest(root, path, result);
  return result["key"];
};
var findSmallest = function(root, path, result) {
  if (root == null) {
      return;
  }
  path.push(root.val);
  if (root.left == null && root.right == null) {
      var str = generateString(path);
      result["key"] = result["key"] == "" ? str : (str < result["key"] ? str : result["key"]);
  }
  findSmallest(root.left, path, result);
  findSmallest(root.right, path, result);
  path.pop();
}
//数字转字符串，注意是要倒序来
var generateString = function(path) { 
  var str = "";
  for (var i = path.length-1; i >= 0; i--) {
      str += String.fromCharCode(97+path[i]);
  }
  return str;
}
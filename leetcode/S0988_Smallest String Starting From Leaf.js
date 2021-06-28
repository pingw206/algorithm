/** 2021-3-5 | 4-29 | 6-28
 * 1. 十进制ASCII 码转成字符 String.fromCharCode（65）； // A  字符转十进制ASCII码  'a'.charCodeAt() // 97
 * 本题 0对应a ，a在ASCII表中对应的是97，所以要再加97再转，然后别的字母依次增加；
 * 2. 数字什么时候转换成字母？---先用数字生成path，然后通过调用一个转换函数，在比较之前转换
 * 3. 字符串比较大小，是从首位开始比较，比如 ab < ac; a < ab; 所以正好跟题目要求一样，直接用小于号就能比较
 * 4. result不能定义为一个空字符串，要定义成对象；因为在函数中，简单数据类型string是copy出来的，放到函数里运行不会改变之前定义好的result，只会再复制一份，
   之前题目result = [], 数组是复杂数据类型，引用地址的对象会被改变。所以也要把这里定义成对象。
   要知道对象的创建方式，如何赋值
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
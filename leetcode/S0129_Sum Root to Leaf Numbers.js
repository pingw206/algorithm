/** 2021-3-2 与257题基本方法一致，拓展的思路在于返回sum时的快捷写法 
* 假设树是 [1,2,4,3,null,5] 结果是[[1,2,3],[4,5]] 
*/
/**
 * 方法一 同257题
 *   generate all paths from root to leaf,
 *   then calculate the sum
 *   两个forEach的嵌套，来循环每个数
 *   将[1,2,3]逐位相加的办法，通过循环来给每一次结果乘10再加上位上的数字
 */
var sumNumbers = function(root) {
  var paths = [];
  var path = [];
  generatePath(root, paths, path);
  var sum = 0;
  paths.forEach(function(item) {
      var num = 0;
      item.forEach(function(digit) {
          num = num*10 + digit;  //num 依次是 1-12-123-1-14-145
      });
      sum += num; //sum 依次是 123-268
  });
  return sum;
};
var generatePath = function (root, paths, path) {
  if (root == null) {
      return;
  }
  path.push(root.val);
  if (root.left == null && root.right == null) {
      paths.push(path.map((x)=>x)); // copy the path
  }
  generatePath(root.left, paths, path);
  generatePath(root.right, paths, path);
  path.pop();
};

/**
 * 方法二: 直接用sum和numbers
 *   use a int variable sum instead of path array
 */
var sumNumbers = function(root) {
  var nums = [];
  dfs(root, nums, 0); //nums依次是 123-145
  var sum = 0;
  nums.forEach(function(num) {
      sum += num;
  });
  return sum;
};
var dfs = function (root, numbers, num) {
  if (root == null) {
      return;
  }
  num = num*10 + root.val;  //num在栈中依次是 1-12-123-14-145 注意num在每层栈中的不同值
  if (root.left == null && root.right == null) {
      numbers.push(num);
  }
  dfs(root.left, numbers, num);
  dfs(root.right, numbers, num);
};
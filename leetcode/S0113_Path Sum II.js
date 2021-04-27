/** 2021-3-4 ｜ 4-27
 * 这道题我开始没想到里面函数的入参写哪些，参考了一下入参就写出来了
 * 第二次完全自己写，写成了很原始的套路方法，在pathSum函数里面又forEach了两遍来挑出来符合条件的数组
 * 
 */
var pathSum = function(root, targetSum) {
  var result = [];
  var path = [];
  findPath(root, targetSum, result, path, 0);
  return result;
};

var findPath = function(root, targetSum, result, path, sum) {
  if (root == null) {
      return;
  }
  sum += root.val;
  path.push(root.val);
  if (root.left == null && root.right == null) {
      // sum is the sum of path  
      /** 或者我把sum写到了这里面,会比外面那层相比少一些，只有全部路径下的的几个sum
          path.forEach(function(item) {
            sum += item;
          })
       */
      if (sum == targetSum) {
          result.push(path.map((x)=>x));
      }
  }
  findPath(root.left, targetSum, result, path, sum);
  findPath(root.right, targetSum, result, path, sum);
  path.pop();
}
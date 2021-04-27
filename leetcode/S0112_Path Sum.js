/** 2021-3-3 ｜ 4-26
 * 依旧是典型的DFS，学会简洁一些。同129题
 * 不同的处理方法还是做出来
 * 
 */
 //方法一，推荐简洁方法
 var hasPathSum = function(root, targetSum) {
  return hasPath(root, targetSum, 0);
};

var hasPath = function(root, targetSum, sum) {
  if (root == null) {
      return false;  //一条路走完还没匹配上，这条路就标为false,内部栈跳出用
  }
  sum += root.val;
  if (root.left == null && root.right == null) {
      if (sum == targetSum) {
          return true;  //唯一让这条路线是true的情况
      }
  }
  
  if (hasPath(root.left, targetSum, sum)) {  //难点在这，即要走这步，又要用来判断， 一条路是true的时候才能返回true，false不做处理； 只要有一条路能match到targetSum就能返回了
      return true;
  }
  if (hasPath(root.right, targetSum, sum)) {
      return true;
  }
  return false;  //也就是上面栈都跳出后，最后是最上面的root的路线都没匹配上，返回false
} 


 //方法二，老方法，比较麻烦一些
 var hasPathSum = function(root, targetSum) {
  var path = [];
  var paths = [];
  var res = []
  generatePath(root, path, paths);

  paths.forEach(function(path) {
      var num = 0
     path.forEach(function(item) {
          num += item ;
      });
      res.push(num)
  })

  return res.includes(targetSum); 
};

var generatePath = function(root, path, paths) {
  if (root == null) {
      return;
  }
  path.push(root.val);
  if (root.left == null && root.right == null) {
      paths.push(path.map((x)=> x));
  }
  generatePath(root.left, path, paths);
  generatePath(root.right, path, paths);
  path.pop()
}
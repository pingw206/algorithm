/** 2021-3-9
 *  按照BST的方向遍历，按顺序把到两个节点的两个路径列出来，然后看两个路径的最后一个公共的节点，
 * 如[6,2]和[6,8]最小公共节点是6
 * [6,2]和[6,2,4]最小公共节点是2
 * BST与普通二叉树的LCA区别 - BST不需要走两个子方向，只需要走一个，可以在O(logn)找到；
 * 2. 还有一个值得注意的点是，p, q都是一个子树，不是一个数字，所以要注意存的是节点,什么时候需要取val
 *  console.log(pathP)  ==>  [ [6,2,8,0,4,7,9,null,null,3,5], [2,0,4,null,null,3,5] ]
    console.log(pathP[indexOfLCA]) ==>  [6,2,8,0,4,7,9,null,null,3,5]
    console.log(pathP[indexOfLCA].val)  ==> 6
 */

 /**
 * recursion solution  递归方法
 */
var lowestCommonAncestor = function(root, p, q) {
  var pathP = [];
  var pathQ = [];
  findPath(root, pathP, p);
  findPath(root, pathQ, q);
  
  var indexOfLCA = 0;
  while (indexOfLCA < Math.min(pathP.length, pathQ.length)) {
      if (pathP[indexOfLCA].val != pathQ[indexOfLCA].val) {  //这里比较节点的val
          break;
      }
      indexOfLCA++;
  }
  return pathP[indexOfLCA-1];  //这里返回的是节点
};
var findPath = function(root, path, target) {
  if (root == null) {
      return;
  }
  path.push(root);  //push节点
  if (target.val == root.val) {  //比较两个val
      return;
  }
  if (target.val < root.val) {
      findPath(root.left, path, target);
  } else {
      findPath(root.right, path, target);
  }
}

/**
* iteration solution  迭代方法
*/
var lowestCommonAncestor = function(root, p, q) {
  var pathP = findPath(root, p);
  var pathQ = findPath(root, q);
  
  var indexOfLCA = 0;
  while (indexOfLCA < Math.min(pathP.length, pathQ.length)) {
      if (pathP[indexOfLCA].val != pathQ[indexOfLCA].val) {
          break;
      }
      indexOfLCA++;
  }
  return pathP[indexOfLCA-1];
};
var findPath = function(root, target) {
  var path = [];
  while (true) {
      path.push(root);
      if (target.val == root.val) {
          break;
      }
      if (target.val < root.val) {
          root = root.left;
      } else {
          root = root.right;
      }
  }
  return path;
}
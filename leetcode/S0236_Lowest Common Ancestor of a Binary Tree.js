/** 2021-3-9 与235题区别，1是左右两个子树都要去遍历 2.找到后就返回不需要走完，所以要给return标记true， false （？这块还不明白）
 */
var lowestCommonAncestor = function(root, p, q) {
  var pathP = [];
  var pathQ = [];
  findPath(root, pathP, p);
  findPath(root, pathQ, q);
  
  var indexOfLCA = 0;
  while (indexOfLCA < Math.min(pathP.length, pathQ.length)) {
      if (pathP[indexOfLCA].val != pathQ[indexOfLCA].val) {
          break;
      }
      indexOfLCA++;
  }
  return pathP[indexOfLCA-1];
};

var findPath = function(root, path,target) {
  if (root == null) {
      return false;
  }
  path.push(root);
  if (target.val == root.val) {
      return true;
  }
  if (findPath(root.left, path,target) || findPath(root.right, path, target) ) {
      return true;
  }
  path.pop();
  return false;
}


//扩展，这个题中说明了p，q是存在的，如果不存在，这样写
var lowestCommonAncestor = function(root, p, q) {
  var pathP = [];
  var pathQ = [];
  var isPExist = isFindTarget(root, p, pathP);
  var isQExist = isFindTarget(root, q, pathQ);
  
  // assume that: p or q might not exist
  if (!isPExist || !isQExist) {
      return null;
  }
  
  var indexOfLCA = 0;
  while (indexOfLCA < Math.min(pathP.length, pathQ.length)) {
      if (pathP[indexOfLCA].val != pathQ[indexOfLCA].val) {
          break;
      }
      indexOfLCA++;
  }
  return pathP[indexOfLCA-1];
};
var isFindTarget = function(root, target, path) {
  if (root == null) {
      return false;
  }
  path.push(root);
  if (target.val == root.val) {
      return true;
  }
  if (isFindTarget(root.left, target, path) || isFindTarget(root.right, target, path) ) {
      return true;
  }
  path.pop();
  return false;
}
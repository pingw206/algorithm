/** 2021-3-9｜5-15 与235题区别，1是左右两个子树都要去遍历，可以用前序遍历的方法 
 * 2.找到后就返回不需要走完，所以要给return标记true， false；如果是true的话就会一路返回到root跳出来，
 * 如果是false只会返回到上一层
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
  if (findPath(root.left, path,target) || findPath(root.right, path, target) ) { //需要返回值true/false 是给这里用的
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

//扩展：为了debug， 怎么写程序和怎么写输入的树？
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
    if (findPath(root.left, path,target)) {  //为了看断点，把或拆分成两条，更好理解
        return true;
    } 
    if (findPath(root.right, path, target) ) { 
        return true;
    }
    path.pop();
    return false;
  }
  /** 构造树 */
  function TreeNode(val) { 
      this.val = val;
      this.left = this.right = null;
  }
  var root1 = new TreeNode(1);
  root1.left = new TreeNode(0);
  root1.right = new TreeNode(8);
  
  var root2 = new TreeNode(2);
  root2.left = new TreeNode(7);
  root2.right = new TreeNode(4);
  
  var root5 = new TreeNode(5);
  root5.left = new TreeNode(6);
  root5.right = root2;
  
  var root3 = new TreeNode(3);
  root3.left = root5;
  root3.right = root1;
  
  
  lowestCommonAncestor(root3,root5.left,root2.right);
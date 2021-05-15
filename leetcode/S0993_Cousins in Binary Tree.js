/** 2021-3-10 ｜ 5-15
 * 这题区别于236的地方是，这里的x，y是value不是节点，所以比较root.val == target，pathX[pathX.length - 2] 和push的时候要注意
 * 我的思路是对的：要满足 两个路径长度（深度）相等，且倒数第二个节点不同
 */

var isCousins = function(root, x, y) {
  var pathX = [];
  var pathY = [];
  findPath(root, pathX, x);
  findPath(root, pathY, y);
  // x and y are diffrent, hence the pathX and pathY must be great than 1，所以就不用判断length>2了
  return pathX.length == pathY.length && pathX[pathX.length - 2] != pathY[pathY.length - 2];
};

var findPath = function(root, path, target) {
  if (root == null) {
      return;
  }
  path.push(root.val);
  if (root.val == target) {  
      return true;
  }
  if (findPath(root.left, path, target) || findPath(root.right, path, target)) {
      return true;
  }
  path.pop();  //这里是说这条路没有找到target， 要退回去一步，比如左边找完了找右边，不能把刚刚左边的路线还记在path中
  return false; //没有找到的，标记false， 找到的话在上面就返回了，也不会pop和返回false
}
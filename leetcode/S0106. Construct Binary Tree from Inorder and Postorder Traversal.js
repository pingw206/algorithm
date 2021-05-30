/** 2021-5-30 同105题，就是略繁琐，小地方容易出错，思想很清晰
 * 
 */

var buildTree = function(inorder, postorder) {
  return buildTreeHelper(inorder,0,inorder.length,postorder,0,postorder.length);
};
var buildTreeHelper = function(inorder,inStart,inEnd,postorder,postStart,postEnd) {
  if (inStart >= inEnd) {
      return null;
  }
  var root = new TreeNode(postorder[postEnd-1]);  //postEnd,不能写postorder.length-1
  var rootIndex = inStart;
  while (inorder[rootIndex] != root.val) {
      rootIndex++;
  }
  var leftLength = rootIndex - inStart;
  /**或者是 一样的
   *     root.left = buildTreeHelper(inorder, inStart, inStart+leftLength,
                                postorder, postStart, postStart+leftLength);
    root.right = buildTreeHelper(inorder, inStart+leftLength+1, inEnd,
                                 postorder, postStart+leftLength, postEnd-1);
    要注意一定要写inEnd，而不是inorder.length,postEnd同理
   */
  root.left = buildTreeHelper(inorder,inStart,rootIndex,postorder,postStart,postStart+leftLength);
  root.right = buildTreeHelper(inorder,rootIndex+1,inEnd,postorder,postStart+leftLength,postEnd-1);
  return root;
}
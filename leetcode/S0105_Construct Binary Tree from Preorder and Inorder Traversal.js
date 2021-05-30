/*init 2021-5-29 */
/**这个题的意义：序列化和反序列化一棵树。可以把一个树结构用只存前序和中序遍历的数组来保存在文档中 *
 * 前序遍历的第一个数字是root，因为存的是unique的数，在中序数组中遍历找到这个数，这个数之前的数组都是左子树，后面的数组是右子树；记下来左子树的长度，在前序数组中除去第一个root接着数这个长度就是前序中的左子树，再接着就是前序中的右子树。---这样子就找到两个遍历之间的关系和结构，然后继续下去【递归】每个子树。把每一个root存起来，相应的存左子树，右子树，就是树结构来。
 * 前序数组范围
 * preorder range: [preStart, preEnd)
 * 中序数组范围
 * inorder rnage: [inStart, inEnd)
 */

var buildTree = function(preorder, inorder) {
  return buildTreeHelper(preorder, 0, preorder.length,
                         inorder, 0, inorder.length);
};

var buildTreeHelper = function(preorder, preStart, preEnd,
                             inorder, inStart, inEnd) {
  if (preStart >= preEnd) {  //别忘了等于号
      return null;   //前序数组是空的时候返回，或者判断中序数组也一样，一定要返回null才是树，
  }
      
  var root = new TreeNode(preorder[preStart]); 
  var rootIndex = inStart;
  while (inorder[rootIndex] != root.val) {
      rootIndex++;
  }
  var leftLength = rootIndex - inStart;
  root.left = buildTreeHelper(preorder, preStart+1, preStart+1+leftLength,
                               inorder, inStart, inStart+leftLength);
  root.right = buildTreeHelper(preorder, preStart+1+leftLength, preEnd,
                                inorder, rootIndex+1, inEnd);
  return root;
}
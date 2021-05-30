/* init2021-5-30
 * 其实跟105，106题大差不差的，还是根据root分别找左子树，右子树
 */
var constructFromPrePost = function(pre, post) {
  return helper(pre, 0, pre.length, post, 0, post.length);
};

// preorder range: [preStart, preEnd)
// postorder rnage: [postStart, postEnd)
var helper = function(pre, preStart, preEnd,
                    post, postStart, postEnd) {
  if (preStart >= preEnd) {
      return null;
  }
  
  var root = new TreeNode(pre[preStart]);
  if (preStart+1 == preEnd) {  //开区间，也就是只有一个node的时候
      return root;
  }

  var indexOfLeftRoot = 0; // post的index，是0而不是postStart
  for (var i = postStart; i < postEnd; i++) {
      if (post[i] == pre[preStart+1]) {
          indexOfLeftRoot = i;
          break;
      }
  }
  
  var lenghtOfLeftChild = indexOfLeftRoot-postStart+1;
  //注意下面中用index而不是用postStart的地方
  root.left = helper(pre, preStart+1, preStart+1+lenghtOfLeftChild, post, postStart, indexOfLeftRoot+1);
  root.right = helper(pre, preStart+1+lenghtOfLeftChild, preEnd, post, indexOfLeftRoot+1, postEnd-1);
  
  return root;
}
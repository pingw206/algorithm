/** 2021-5-23
 *  我竟然就差没想到while条件里面写什么。。。
 */
// iterative solution
var searchBST = function(root, val) {
    while (root != null) {
        if (root.val < val) {
            root = root.right;
        } else if (root.val > val) {
            root = root.left;
        } else {
            return root;
        }
    }
    return null;
  };
  
  // resursive solution
  var searchBST = function(root, val) {
    if (root == null) {
        return null;
    }
    if (root.val < val) {
        return searchBST(root.right, val);   // 这里要有return
    } else if (root.val > val) {
        return searchBST(root.left, val);    // 这里要有return
    } else {
        return root;
    }
  };
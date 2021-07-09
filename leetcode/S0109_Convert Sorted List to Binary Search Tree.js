// date: 2021.7.9
/*依次把链表的中间点作为根结点，类似⼆分的思想，递归排列所有结点。
通过快慢指针找到中间节点 */

// solution1, Not break down the original list
var sortedListToBST1 = function(head) {
  return helper(head, null);
};
// list range: [head, tail)
var helper = function(head, tail) {
  if (head == tail) { return null; }   //这里一定要是null, 空节点要是null表示
  var slower = head;
  var faster = head;
  while (faster != tail && faster.next != tail) {
      slower = slower.next;
      faster = faster.next.next;
  }
  var root = new TreeNode(slower.val);
  root.left = helper(head, slower);        // [head, slow)
  root.right = helper(slower.next, tail);  // [slow->next, tail)
  return root;
};

// solution2
// The original list was break down. This is not a good solution.
var sortedListToBST = function(head) {
  if (head == null) { return null; }
  if (head.next == null) {
      return new TreeNode(head.val);
  }

  var slower = head;
  var faster = head;
  while (faster != null && faster.next != null && faster.next.next != null && faster.next.next.next != null) {
      slower = slower.next;
      faster = faster.next.next;
  }
  var rootNode = slower.next;
  var left = head; slower.next = null;
  var right = rootNode.next;
  
  var root = new TreeNode(rootNode.val);
  root.left = sortedListToBST(left);
  root.right = sortedListToBST(right);;
  return root;
};
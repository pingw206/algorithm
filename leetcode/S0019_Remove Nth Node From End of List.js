// date: 2021.6.24
/*
要在一遍内执行完的问题就是指针不能知道当前节点是倒数第几个，所以考虑用快慢指针
快指针比慢指针快n个节点，当快指针的下一个元素为空就说明慢指针的下一个节点应该删除。
如果链表本来就只有一个节点，删除之后就是空，所以不能返回head,而是应该new一个新的节点指向head,返回新节点的next;
*/
var removeNthFromEnd = function(head, n) {
  var dummyNode = new ListNode(0, head); // 学到了，虚拟头结点的命名，这题构造函数更简单了
  var slower = dummyNode;
  var faster = dummyNode;
  for (var i=1;i<=n;i++) {
      fast = fast.next;
  }
  while (fast.next != null) {
      fast = fast.next;
      slow = slow.next;
  }
  slower.next = slower.next.next;
  return dummyNode.next;
};
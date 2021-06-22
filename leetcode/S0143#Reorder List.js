// init2021-6-22
/*
L0 → L1 → … → Ln - 1 → Ln
L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
做题步骤:
	1. 使用快慢指针来找到链表的中点，并将链表从中点处断开，形成两个独立的链表。
  2. 将第二个链表翻转。
  3. 将第二个链表的元素间隔地插入第一个链表中。

通过快慢指针找链表中点原理：
  1.如果链表中节点个数为偶数时1 2 3 4 5 6，当快指针停在倒数第二个节点5时，慢指针指向中点前一个节点3；
  2.如果链表中节点个数为奇数时1 2 3 4 5，当快指针走完停在最后一个节点5，慢指针刚好指向中点3。
*/
var reorderList = function(head) {
  if (head == null || head.next == null) {
      return;
  }
  
  var slower = head;
  var faster = head;
  
  // when the loop ends, slower will be the tail of left part
  while (faster.next != null && faster.next.next != null) {   // 因为faster一次走两步，所以不用判断faster != null, 一下子跳不过去
      slower = slower.next;
      faster = faster.next.next;
  }
  var right = reverse(slower.next);
  slower.next = null;
  
  var pointer = head;
  while (right != null) {
      var temp = right;
      right = right.next;
      temp.next = pointer.next;
      pointer.next = temp;
      
      pointer = pointer.next.next;
  }
};

var reverse = function(head) {
   var dummyNode = new ListNode(0);
   while (head != null) {
       var temp = head;
       head = head.next;
       temp.next = dummyNode.next;
       dummyNode.next = temp;
   }
   return dummyNode.next;
};
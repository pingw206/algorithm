//这个解法是新建链表来做， 但是也符合空间复杂度O（1），时间O（n)，因为接下来存的节点还是head里面的，如果新建了数组来分别存，才是空间复杂度On
//2020-12-17 想到了新建两个链表，但是对于两个链表如何通过一个指针来写入，没太搞清楚
var oddEvenList = function(head) {
  var oddHead = new ListNode(0);
  var evenHead = new ListNode(0);

  var oddNode = oddHead;
  var evenNode = evenHead;
  
  var index = 1;
  while (head != null) { 
      if (index % 2 == 1) {
          oddNode.next = head;
          oddNode = oddNode.next;
      } else {
          evenNode.next = head;
          evenNode = evenNode.next;
      }
      head = head.next;
      index++;
  }
  
  evenNode.next = null;    //这个小地方要注意，第二次丢了,链表要有头有尾; **关键点，不然就会陷入circle

  oddNode.next = evenHead.next;
  
  return oddHead.next;
  
};
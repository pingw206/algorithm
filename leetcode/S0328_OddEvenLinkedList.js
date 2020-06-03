//真的是要被这道题气死了，自己把自己绕晕了，链表的指向；什么叫新弄一个链表来做，什么叫原地改动，我之前一直是原地改动，乱七八糟
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
  
  evenNode.next = null;    //这个小地方要注意，第二次丢了
  oddNode.next = evenHead.next;
  
  return oddHead.next;
  
};
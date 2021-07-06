// date: 2021.7.5

var partition = function(head, x) {
  var leftPart = new ListNode(0);
  var rightPart = new ListNode(0);
  
  var pointerLeft = leftPart;
  var pointerRight = rightPart;
  
  while (head != null) {
      if (head.val < x) {
          pointerLeft.next = head;
          pointerLeft = pointerLeft.next;
      } else {
          pointerRight.next = head;
          pointerRight = pointerRight.next;
      }
      head = head.next;
  }
  pointerLeft.next = rightPart.next;
  pointerRight.next = null;   //这一步千万别忘了，因为可能head后面还有小于的节点，不然就带上了
  
  return leftPart.next;
};
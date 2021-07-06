// date: 2021.7.6 
// 插入排序

var insertionSortList = function(head) {
  var dummyNode = new ListNode(0);
  
  while (head != null) {
      var nextHead = head.next;
      
      var pointer = dummyNode;
      while (pointer.next != null && pointer.next.val < head.val) {
          pointer = pointer.next;
      }
      head.next = pointer.next;
      pointer.next = head;
      
      head = nextHead;
  }
  
  return dummyNode.next;
};
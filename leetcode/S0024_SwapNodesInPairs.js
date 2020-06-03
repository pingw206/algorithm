
//刚开始用暴力解法的时候，觉得很麻烦，没有写下去；但是其实就是这个方法；所以要 自信+耐心+实现
//即使是麻烦的方法，也要清晰化，比如不要在赋值的时候出现link.next.next尽量都另取一个变量名
//当第一个节点会发生变化时，要用头节点

var swapPairs = function(head) {
  var headNode = new ListNode(0);
  headNode.next = head;
  var pointer = headNode;
  while(pointer.next !== null && pointer.next.next !== null) {
      var firstNode = pointer.next;
      var secondNode = firstNode.next;
      var thirdNode = secondNode.next;
      pointer.next = secondNode;
      secondNode.next = firstNode;
      firstNode.next = thirdNode;
      pointer = pointer.next.next;
  }
  return headNode.next;
};
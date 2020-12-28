//真的是要被绕哭，头插法在中间，还没有搞一个新链表出来
    // [1, end1] -> [start2, end2] -> [start3, length]
    //   ==> 
    // [1, end1] -> [end2, start2] -> [start3, length]
//2020-12-28 想明白哪个是在新链表上生成，哪个是在原链表上走（或是需要的链表上走），有点难以理解，cursorNode一直在新链表之外需要的链表上
var reverseBetween = function(head, m, n) {
  if (head == null) {
      return null;
  }
  var newList = new ListNode(0);
  newList.next = head;
  var end1 = newList;
  for (var i = 1; i < m; i++) {
      end1 = end1.next;
  }
  var start2 = end1.next;
  end1.next = null;
  
  var cursorNode = start2;
  for (var i = m; i <= n; i++) {
      var nextCursorNode = cursorNode.next;
      
      var tempNode = end1.next;
      end1.next = cursorNode;
      cursorNode.next = tempNode;
      
      cursorNode = nextCursorNode;
  }
  start2.next = cursorNode;
  return newList.next;  
};
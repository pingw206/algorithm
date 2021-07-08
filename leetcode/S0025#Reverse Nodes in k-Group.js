// date: 2021.7.6

var reverseKGroup = function(head, k) {
  var dummyNode = new ListNode(0);
  var pointer = dummyNode;
  
  while (head != null) {
      var start = head;
      var end = head;
      for (var i = 1; i < k && end != null; i++) {
          end = end.next;
      }
      
      if (end == null) {
          head = null;
          pointer.next = start;
      } else {
          head = end.next;
          // alwasy append node in [start, end] after pointer
          var temp = start;
          for (var i = 0; i < k; i++) {
              var nextTemp = temp.next;
              temp.next = pointer.next;
              pointer.next = temp;
              temp = nextTemp;
          }
          pointer = start;
      }
  }
  
  return dummyNode.next;
};
// date: 2021.7.7

// D & C: merge sort
var sortList1 = function(head) {
  if (head == null || head.next == null) {
      return head;
  }
  
  var slower = head;
  var faster = head;
  while (faster != null && faster.next != null && faster.next.next != null) {
      slower = slower.next;
      faster = faster.next.next;
  }
  
  // divide the linked list into two parts: right and left part
  var right = slower.next;
  var left = head; slower.next = null;
  
  var sortedLeft = sortList(left);
  var sortedRight = sortList(right);
  
  // conquer: merge two sorted linked lists
  var dummyNode = new ListNode(0);
  var pointer = dummyNode;
  while (sortedLeft != null && sortedRight != null) {
      if (sortedLeft.val < sortedRight.val) {
          pointer.next = sortedLeft;
          sortedLeft = sortedLeft.next;
      } else {
          pointer.next = sortedRight;
          sortedRight = sortedRight.next;
      }
      pointer = pointer.next;
  }
  pointer.next = (sortedLeft != null) ? sortedLeft : sortedRight;
  return dummyNode.next;
};

// Quick Sort
var sortList2 = function(head) {
  var dummyNode = new ListNode(0, head);
  quickSort(dummyNode, null);
  return dummyNode.next;
};

// quick sort in range (start, end)
var quickSort = function(start, end) {
  // invalid range, or just one node: return
  if (start.next == end || start.next.next == end) {
      return;
  }
  
  // partition
  var pivot = start.next;
  var pointer1 = start;
  var pointer2 = pivot;
  var pointer = pivot.next; // skip pivot node
  while (pointer != end) {
      var nextPointer = pointer.next;
      if (pointer.val < pivot.val) {
          pointer1.next = pointer;
          pointer1 = pointer1.next;
      } else {
          pointer2.next = pointer;
          pointer2 = pointer2.next; 
      }
      pointer = nextPointer;
  }
  pointer1.next = pivot;
  pointer2.next = end;
  
  quickSort(start, pivot);
  quickSort(pivot, end);
};
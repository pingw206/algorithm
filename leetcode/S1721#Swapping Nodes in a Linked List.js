// date: 2021.7.5
// 这个题初看很繁琐，但是把逻辑都理清楚了，把变量名命名清楚，也不算复杂，可以作为锻炼

var swapNodes = function(head, k) {
  var dummyNode = new ListNode(0, head);
  var len = length(head);
  k = k > len/2 ? len+1-k : k;     //这点不要漏考虑
  
  // leftA->A->rightA->...->leftB->B->rightB
  var leftA = dummyNode;
  for (var i = 1; i < k; i++) {
      leftA = leftA.next;
  }
  var A = leftA.next;
  var rightA = A.next;
  
  var leftB = dummyNode;
  for (var i = 1; i < len+1-k; i++) {
      leftB = leftB.next;
  }
  var B = leftB.next;
  var rightB = B.next;
  
  // case1: A == B, or can be return when len is odd and k == len/2
  if (A == B) {
      return dummyNode.next;
  }
  
  // case2: A.next == B
  if (A.next == B) {
      leftA.next = B; B.next = A; A.next = rightB;
      return dummyNode.next;
  }
  
  // normal case: rightA might == leftB
  leftA.next = B; B.next = rightA;
  leftB.next = A; A.next = rightB;
  
  // normal case:
  return dummyNode.next;
};

var length = function(head) {
  var len = 0;
  while (head != null) {
      len++;
      head = head.next;
  }
  return len;
};
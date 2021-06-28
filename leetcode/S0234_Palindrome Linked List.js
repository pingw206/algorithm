// date: 2021.6.24

// Solution1  space O (n)
var isPalindrome1 = function(head) {
  var arr = [];
  while (head != null) {
      arr.push(head);
      head = head.next;
  }
  var left = 0, right = arr.length-1;
  while (left < right) {
      if (arr[left].val != arr[right].val) {  //别忘了这里是val
          return false;
      }
      left++;
      right--;
  }
  return true;
};

// Solution2   space O(1)
var isPalindrome = function(head) {
  var slower = head;
  var faster = head;
  while (faster != null && faster.next != null && faster.next.next != null) {
      slower = slower.next;
      faster = faster.next.next;
  }
  
  var right = reverse(slower.next);
  var left = head; slower.next = null;
  
  // lenth(right) == length(left) || lenth(right) = length(left)+1
  var isPalindrome = true;
  while (right != null) {
      if (right.val != left.val) {
          isPalindrome = false;
          break;
      }
      right = right.next;
      left = left.next;
  }
  
  recoverList(slower, right);
  return isPalindrome;
};
  
var recoverList = function(leftTail, right) {
  right = reverse(right);
  leftTail.next = right;
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
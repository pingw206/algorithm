//2021-1-8 我的解法
var getDecimalValue = function(head) {
  var len = 0; 
  var pointer = head;
  while (pointer != null) {
      len++;
      pointer = pointer.next;
  }
  var sum = 0;
  for (var i=0; i< len; i++) {
      sum += Math.pow(2,(len-1-i))*head.val; 
      head = head.next;
  }
  return sum;
};

//张磊的更简便解法
var getDecimalValue = function(head) {
  var result = 0;
  while (head != null) {
      result = result*2 + head.val;
      head = head.next;
  }
  return result;
};
//2020-01-07 我竟然一遍过啦，虽然觉得很绕，但是还是要试一试，万一过了呢
var mergeInBetween = function(list1, a, b, list2) {
  var pointer1 = list1;
  for (var i=0; i<a-1; i++){
      pointer1 = pointer1.next;
  }
  var start1 = pointer1;
  for (var j=a; j<=b;j++){
      pointer1 = pointer1.next;
  }
  var end1 = pointer1.next;
  start1.next = list2;
  var pointer2 = list2;
  while (pointer2.next != null){
      pointer2 = pointer2.next;
  }
  pointer2.next = end1;
  return list1;
};


//附张磊的解法
var mergeInBetween = function(list1, a, b, list2) {
  var start = null; // a-1 node
  var end = null; // b+1 node
      
  var head = list1;
  for (var i = 0; i < a-1; i++) {
      head = head.next;
  }
  start = head;
  
  for (var i = 0; i < b-a+2; i++) {
      head = head.next;
  }
  end = head;
  
  var tail2 = null; // tail node of list2
  var head2 = list2;
  while (head2.next != null) {
      head2 = head2.next;
  }
  tail2 = head2;
  
  start.next = list2;
  tail2.next = end;
  return list1;
};
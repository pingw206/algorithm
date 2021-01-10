//第二种解法，一次性搬过来，不要用最开始那种一次次搬的写法，太麻烦。虽然这个也挺麻烦的，但是就是这样写哦
//认真+恒心，都是自己写出来哒，虽然写完都麻烦的怀疑自己
//2020-12-14 倒数第二步 tail1.next要放对位置，不能过早的置为null，会影响别人，尤其是这种引用
//2021-1-10 又丢了k==0 的讨论
var rotateRight = function(head, k) {
    if (head == null) {
        return head;
    }
    
    var linkLength = 0;
    var len = head;
    while (len !== null) {
        len = len.next;
        linkLength++;
    }
    k = k % linkLength;
    if (k === 0) {
        return head;
    }
    
    var shiftStep = linkLength - k; 
    var pointer = head;
    while (shiftStep !== 1) {
        pointer = pointer.next;
        shiftStep--;
    }
    var tail1 = pointer;
    var head2 = pointer.next;
    while (pointer.next !== null) {
        pointer = pointer.next;
    }
    var tail2 = pointer;
    tail2.next = head;
    tail1.next = null;
    return head2;
    
};



//自己的最开始做法，自己硬着头皮不嫌麻烦做下来的
//提交了4次才成功：1忘了额外声明head == null; 2.忘了 head.next == null 3.没考虑到k>length时到简化做法，导致测试用例k特别大时超时
//其实还是没有考虑全边界条件
var rotateRight = function(head, k) {
  if (head == null) {
      return head;
  }
  if (head.next == null) {
      return head;
  }
  var linkLength = 0;
  var len = head;
  while (len !== null) {
      len = len.next;
      linkLength++;
  }
  k = k % linkLength;
  var headNode = new ListNode(0);
  headNode.next = head; 
  while (k !== 0) {
      var pointer = headNode;
      var secondNode = pointer.next;
      while (pointer.next !== null && pointer.next.next !== null){
          pointer = pointer.next;
      }
      var lastNode = pointer.next;
      pointer.next = null;
      lastNode.next = secondNode;
      headNode.next = lastNode;
      k--;
  }
  return headNode.next;
};
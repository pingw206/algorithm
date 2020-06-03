//我自己20分钟一遍过哦～ 开始卡在了最后一个节点要不要单独处理上，后来发现循环时已经处理了呀：）
//宝子还有一种投机取巧的方法，就是新建一个链表，把符合的数放进去，不符合的数不放，不推荐

var removeElements = function(head, val) {
  var headNode = new ListNode(0);
  headNode.next = head;
  var pointer = headNode;
  while (pointer.next !== null) {
      if (pointer.next.val === val) {
          pointer.next = pointer.next.next;
      } else {    
          pointer = pointer.next;   //第二遍错的是没有把这句话写进else,写到了平行地方，结果[1,1]就没有查出来
      }
  }
  return headNode.next;
};
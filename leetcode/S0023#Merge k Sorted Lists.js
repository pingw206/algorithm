// date: 2021.7.5
/* 跟21题的区别是合并K个链表，但思想还是要两两合并。
	如果按最先想到的，先合并前两个，合并好了再合第三个，再第四个...k, 这样思想对，但是效率低，通不过
分治法 Divide and Conquer Approach
方法一 （递归）将原链表分成两段，然后对每段调用递归函数，suppose 返回的 left 和 right 已经合并好了，
然后再对 left 和 right 进行合并，合并的方法就使用 Merge Two Sorted Lists 中的解法即可
方法二 （迭代）不停的对半划分，比如k个链表先划分为合并两个 k/2 个链表的任务，再不停的往下划分，
直到划分成只有一个或两个链表的任务，开始合并。举个例子来说比如合并6个链表，那么按照分治法，
首先分别合并0和3，1和4，2和5。这样下一次只需合并3个链表，再合并1和3，最后和2合并就可以了

*/
//solution 1 
var mergeKLists = function(lists) {
  return mergeHelper(lists, 0, lists.length-1);
};

var mergeHelper = function(lists, start, end) {
  if (start > end) {
      return null;
  }
  if (start == end) {
      return lists[start];
  }
  
  var mid = Math.floor((start+end)/2);
  var leftPart = mergeHelper(lists, start, mid);
  var rightPart = mergeHelper(lists, mid+1, end);
  return mergeTwoLinkedList(leftPart, rightPart);
  
}

var mergeTwoLinkedList = function(head1, head2) {
  var dummyNode = new ListNode(0);
  var pointer = dummyNode;
  while (head1 != null && head2 != null) {
      if (head1.val < head2.val) {
          pointer.next = head1;
          head1 = head1.next;
      } else {
          pointer.next = head2;
          head2 = head2.next;
      }
      pointer = pointer.next;
  }
  
  if (head1 != null) {
      pointer.next = head1;
  } else {
      pointer.next = head2;
  }
  return dummyNode.next;
};

//solution 2 迭代
var mergeKLists = function(lists) {
  var n = lists.length;
  if (n == 0) {return null};
  while (n > 1) {
      var k = Math.floor((n + 1) / 2);
      for (var i = 0; i < Math.floor(n / 2); i++) {
          lists[i] = mergeTwoLinkedList (lists[i], lists[i + k]);
      }
      n = k;
  }
  return lists[0];
};
var mergeTwoLinkedList = function(head1, head2) {}//同上solution1
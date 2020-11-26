// iteratively or recursively 循环或递归两种方法实现 
//1.循环: 用头插法，先创造一个新链表， 0， 然后往前面循环依次插入 1-2-3-4-5， 变成 0-1；0-2-1；0-3-2-1； 最后返回0.next;
//newList一位置永远不动，一直在0那里
var reverseList = function(head) {
  var newList = new ListNode(0);
  while (head !== null) {
      var headNode = head;
      head = head.next;//断开联系，赶紧更新head,以免被headNode影响
      headNode.next = null; //跟head断开,这一步在这个题里不是很重要，但是操作到最后是最后一个节点就很必要，不然后面还带着一长串
      
      //接下来用头插法append to head
      var nextNode = newList.next;
      newList.next = headNode;
      headNode.next = nextNode;
  }
  return newList.next;
};
//小优化，可以先把后面接上，再接前面，这样少个temp;
var reverseList = function(head) {
  var newList = new ListNode(0);
  while (head !== null) {
      var headNode = head;
      head = head.next;
      //先接后面，再接前面：
      headNode.next = newList.next;
      newList.next = headNode;
      
  }
  return newList.next;
};

//2.递归
/*递归有三步：1，最小值时的返回值；2，已知f(n-1)时，如何计算f(n) 3,计算f(n)后返回值是什么 
*/
var reverseList = function(head) {
  if (head == null) {
      return head;
  }
  
  return myReverse(head);  //下面才是递归
};

var myReverse = function(head) {
  // step 1: minimal problem
  if (head.next == null) {
      return head;
  }
  // step 2: call subProblem myReverse(n-1)，实际上是一个append to tail的问题；
  //关键是理解myReverse(head.next)是一个已经反转好的链表---根据返回值看出来的；然后这个链表是怎么表示的，也是只能表示第一个节点，然后遍历
  var subList = myReverse(head.next);
  var subNode = subList;
  while (subNode.next !== null) {
      subNode = subNode.next;
  }
  subNode.next = head;
  head.next = null;  // head 节点append to tail
  // step 3: return
  return subList;    
}

//另外，n与f(n-1)怎么分，可以是第一个数和后面的链表，也可以是前面的链表和最后一个数，前者更好做一点，因为后者还要遍历完才能拿到最后一个数
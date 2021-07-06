// init: 2021.6.23
// solution1
/* 算数思路：
	 1. fast 和 slow 相遇的时候，slow肯定没有走遍历完链表，而fast已经在环内循环了n圈(1<=n)；
   2. 假设环长为r, slow走了(a+b)步，则fast走了 (a+b)+nr 步，
   递推关系： fast走的步数 = slow走的步数+在环上循环的n圈
             fast走的步数 = slow走的步数 * 2       
           => 2*(a+b) = a+b+nr => a = nr - b
   3. 从链表头再设一个指针start,每次走1步，slow也继续出发，两个指针必定相遇，相遇点为环入口点。
			因为到入口点，start会走a+xr = (n+x)r - b， slow走 yr-b  , 所以她俩也就是差几圈的问题，总会相遇，
       可以用极限法分析，比如a特别短，或者环特别大，某个指针肯定要绕好几圈才能遇到另一个
*/
var detectCycle = function(head) {
  var slower = head;
  var faster = head;
  var hasCycle = false;
  while (faster != null && faster.next != null) {
      slower = slower.next;
      faster = faster.next.next;
      if (slower == faster) {
          hasCycle = true;
          break;
      }
  }
  if (!hasCycle) {
      return null;
  }
  
  var p1 = head;
  while (true) {
      if (p1 == slower) {       //要先判断，再往后挪，不然[1,2]在1入口，这种会错往后多1
          return p1;
      }
      p1 = p1.next;
      slower = slower.next;
  }
};
// solution2
var detectCycle = function(head) {
  var slower = head;
  var faster = head;
  var hasCycle = false;
  while (slower != null && faster != null && faster.next != null) {
      slower = slower.next;
      faster = faster.next.next;
      if (slower == faster) {
          hasCycle = true;
          break;
      }
  }
  if (!hasCycle) {
      return null;
  }
  
  var length = 0;
  do {
      slower = slower.next;
      faster = faster.next.next;
      length++;
  }
  while (slower != faster);
  
  var p1 = head;
  var p2 = head;
  for (var i = 0; i < length; i++) {
      p1 = p1.next;
  }
  while (p1 != p2) {
      p1 = p1.next;
      p2 = p2.next;
  }
  return p1;
};


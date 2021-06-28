// date: 2021.6.24
/* 我还在想如何区分[4,1,8,4,5] 和[5,6,1,8,4,5]的交点是[8,4,5]而不是[1,8,4,5]
所以是用hash来区分呀！
注意1是不同的，8才是相同的，比较的是node存的地址，不是说val和next

*/
var getIntersectionNode = function(headA, headB) {
  var hashSet = new Set();
  while (headA != null) {
      hashSet.add(headA);
      headA = headA.next;
  }
  while (headB != null) {
      if (hashSet.has(headB)) {
          return headB;
      }
      headB = headB.next;
  }
  return null;
};
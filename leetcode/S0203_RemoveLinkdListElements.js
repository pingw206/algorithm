/* 2020-12-16 |2021-5-26
没做出来的原因是：1. 遇到连续的数字应该怎么一起跳过去，其实用if else跳转就可以，
2. 卡在了最后一个节点要不要单独处理上，后来发现循环时已经处理了呀：）
还有一种投机取巧的方法，就是新建一个链表，把符合的数放进去，不符合的数不放，空间复杂度大，不推荐
*/
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
  
  /*2021-1-10 想通else 里面写pointer = pointer.next; 绝对是本题最重要的点，意思就是重新开始while一次循环
  我这次提交依然没想到，导致虽然对了，但是很麻烦，要处理连续相同值出现的情况*/
  //不推荐这种解法
  var removeElements = function(head, val) {
      var headNode = new ListNode(0);
      headNode.next = head;
      var pointer = headNode;
      
      while (pointer !== null && pointer.next !== null) {
          if (pointer.next.val == val) {
              var valNode = pointer.next;
              while (valNode !== null && valNode.val == val) {
                  valNode = valNode.next;
              }
              pointer.next = valNode;
          }
          pointer = pointer.next;
      }
      
      return headNode.next;
  };
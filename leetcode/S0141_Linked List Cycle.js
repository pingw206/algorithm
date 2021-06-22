// init2021-6-22 
//原来pos不是输入变量呀！想多了
// faster一定会先进入环，所以判断条件判断faster就行，
//二者在环上相遇的时候slower还没走完一圈---因为每一步fast到slow的距离都会缩短1步，他们之间的距离不会大于环的长度 （不过如果f,s都在环的入口处，s正好走完一圈）
var hasCycle = function(head) {
  var slower = head;
  var faster = head;
  while (faster != null && faster.next != null) {
      faster = faster.next.next;
      slower = slower.next;
      if (faster == slower) {
          return true;
      }
  }
  return false;
};
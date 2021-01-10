//2020.05.24 我自己并没有做出来，需要再熟练这种方法
/*2020-12-17 涉及到的节点比较复杂而已，逻辑并不复杂：我也想到了需要考虑三个或者更多节点，
没想到可以抽象成：一个指针节点，一个开始一个终止节点来确定重复的节点*/
/* 2021-1-10 还是困在了想跟203题一样的做法，往后考虑pointer.next.next节点，并不能做出来；还是这种设开始终止的办法好 */

var deleteDuplicates = function(head) {
    var newNode = new ListNode(0);   //即使开头是0也不冲突
    newNode.next = head;
    var cursorNode = newNode;
    while (cursorNode.next != null) {  //注意这里是.next
        var startNode = cursorNode.next;
        var endNode = startNode;
        while (endNode.next != null && endNode.next.val == startNode.val) {
            endNode = endNode.next;
        }
        if (startNode == endNode) {  //是否是同一个节点,注意这里是节点相同，不仅仅是val相同，也就是只有一个数，endNode没有变
            cursorNode = startNode;
        } else {
            cursorNode.next = endNode.next;
        }
    }       
    return newNode.next;
};


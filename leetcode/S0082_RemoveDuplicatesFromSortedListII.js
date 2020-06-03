//2020.05.24 我自己并没有做出来，需要再熟练这种方法

var deleteDuplicates = function(head) {
    var newNode = new ListNode(0);   //即使开头是0也不冲突
    newNode.next = head;
    var cursorNode = newNode;
    while (cursorNode.next != null) {
        var startNode = cursorNode.next;
        var endNode = startNode;
        while (endNode.next != null && endNode.next.val == startNode.val) {
            endNode = endNode.next;
        }
        if (startNode == endNode) {  //是否是同一个节点
            cursorNode = startNode;
        } else {
            cursorNode.next = endNode.next;
        }
    }       
    return newNode.next;
};


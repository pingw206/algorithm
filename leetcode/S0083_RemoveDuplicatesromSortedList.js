//2020-12-17更新我自己的好理解的解法，注意while循环里面依然是if else的关系，不是都会进行的
var deleteDuplicates = function(head) {
    var pointer = head;
    while (pointer != null && pointer.next != null) {
        if (pointer.val == pointer.next.val) {
            pointer.next = pointer.next.next;
        } else {
            pointer = pointer.next;
        }
    }
    if (pointer != null) {
        pointer = pointer.next;
    }
    return head;
};
//最优解法---我还有点没搞懂
var deleteDuplicates = function(head) {
    var cursorNode = head;
    while (cursorNode != null) {
        var endNode = cursorNode.next;
        while (endNode != null && endNode.val == cursorNode.val) {
            endNode = endNode.next;
        }
        cursorNode.next = endNode;
        cursorNode = endNode;  //这里不可以是cursorNode = cursorNode.next ???
    }
    return head;
};


//我的解法---非常原始，耗费空间，性能很低
var deleteDuplicates = function(head) {
    if (head == null){
        return head;
    }
    var newList = new ListNode(head.val);
    var newPointer = newList;
    var pointer = head.next;
    while (pointer != null){
        if (pointer.val == newPointer.val){
            pointer = pointer.next;
        } else {
            let temp = new ListNode(pointer.val);
            newPointer.next = temp;
            newPointer = newPointer.next;
            pointer = pointer.next;
        }
    }
    return newList;
};
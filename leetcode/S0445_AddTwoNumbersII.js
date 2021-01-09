//2020-05-28
//先做一遍002题，其实主旨思想都是要从个位开始算。这题有两个考察点： 用栈来体现从个位开始算；用头插法把节点往前放，注意最前面还是有个头的，这不是倒序，最前面的0一直在前面。
//2020-12-02 我想到了头插法 ，但是想不到用栈来从个位算input
//2021-1-9 不能反转input list， 但是可以放到栈里面啊，这里还是没想到！！

var addTwoNumbers = function(l1, l2) {
    var stk1 = [];
    var stk2 = [];
    while (l1 != null) {
        stk1.push(l1.val);
        l1 = l1.next;
    }
     while (l2 != null) {
        stk2.push(l2.val);
        l2 = l2.next;
    }
    var carrior = 0;
    var newList = new ListNode(0);
    while (stk1.length != 0 || stk2.length != 0) {
        var val1 = 0, val2 = 0;
        if (stk1.length != 0) {
            var val1 = stk1.pop();
        }
        if (stk2.length != 0) {
            var val2 = stk2.pop();
        }
        var sum = val1 + val2 + carrior;
        carrior = (sum >= 10) ? 1 : 0;
        sum = (sum >= 10) ? sum -10 : sum;
 
        appendToHead(newList, sum);    
    }
    if (1 == carrior) {
        appendToHead(newList, 1);
    }
    return newList.next;
};

var appendToHead = function(header, val) {
    var newNode = new ListNode(val);
    newNode.next = header.next;
    header.next = newNode;
}
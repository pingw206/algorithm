/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 最后用三元运算符来简化判断
var mergeTwoLists = function(l1, l2) {
    var newList = new ListNode(0);
    var cursorNode = newList;
    while (l1 != null && l2 != null) {
        if (l1.val <= l2.val) {
            cursorNode.next = l1;
            l1 = l1.next;
        } else {
            cursorNode.next = l2;
            l2 = l2.next;
        }
        cursorNode = cursorNode.next; // i++
    }
    cursorNode.next = (l1 != null) ? l1 : l2;
    return newList.next;
};


//搞清链表的小练习 1 打印链表  （这些练习都要在LeetCode中的环境中实现，js没有链表这个函数功能）
var mergeTwoLists = function(l1, l2) {
    printList(l1);
};

var printList = function(node) {
    var pointer = node;
    while(pointer != null) {
        console.log(pointer.val);
        pointer = pointer.next;        
    }
};


//小练习2 把链表变成array
var mergeTwoLists = function(l1, l2) {
        var arr = toArray(l1);
        console.log(arr);    //这里如果还像练习1那么写是没有输出的哦
        
    };
    var toArray = function(node) {
        var array = [];
        var pointer = node;
        while(pointer != null){
            array.push(pointer.val);
            pointer = pointer.next;
        }
        return array;
    };
//练习3 把array变成链表
 var mergeTwoLists = function(l1, l2) {
        var arr = toArray(l1);
        return toList(arr);
    };
    var toArray = function(node) {
        var array = [];
        var pointer = node;
        while(pointer != null){
            array.push(pointer.val);
            pointer = pointer.next;
        }
        return array;
    };
    
    var toList = function(arr) {
        var node = new ListNode(0);
        var pointer = node;
        var i = 0;
        while(i < arr.length) {
            pointer.next = new ListNode(arr[i]);   //第一次出错是因为这里 pointer.next = arr[i]
            pointer = pointer.next;
            i++;
        }
        //console.log(pointer);     此时pointer是ListNode { val: 4, next: null }
        return node.next;
    }
    
    //删除第i个node---方法一
    var mergeTwoLists = function(l1, l2) {
        return deleteNode(l1,1);
    };
    var deleteNode = function(l1,i) {
        if (i == 1) {     //没法删除第一个node
            return l1.next;   
        }
        var pointer = l1;
        var j = 1;
        while(j < i -1 ) {
            pointer = pointer.next;
            j++;
        }
        pointer.next = pointer.next.next;      // 如果前面改条件，这里写pointer = pointer.next 是不行的哦，必须找到要删除的结点的前一个结点
        return l1;
    }
    // 删除第i个node ----方法二
    var mergeTwoLists = function(l1, l2) {
        return deleteNode(l1,1);
    };
    var deleteNode = function(l1,i) {
        var head = new ListNode(0);   //这样就不用专门搞个i=1啦
        head.next = l1; //注意这里
        var pointer = head;
        var j = 1;
        while (j < i) {
            pointer = pointer.next;
            j++;
        }
        pointer.next = pointer.next.next;
        return head.next;   // 这个如果return l1, 不能删除第一个数
    }

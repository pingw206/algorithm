/*我的第一版，遇到了仨问题：1、不知道怎么让pointer3.next不为空的情况下赋值 ---可以直接赋值啊，开始只限制在了poiner3.next.val = l1.val+l2.val
2.竟然在判断条件的时候用了if (l1 = null) 等号和赋值啊！！！3.忽略最前面一个进位 另外，帮我完善了一下用三元运算符来简化if else只有一行时 */
var addTwoNumbers = function(l1, l2) {
    var l3 = new ListNode(0);
    var pointer3 = l3;
    var a = 0;    
    while(l1 != null || l2 != null) {
        var l1Value = l1 != null ? l1.val : 0;
        var l2Value = l2 != null ? l2.val : 0;
        pointer3.next = new ListNode(l1Value + l2Value + a); //1.一分钱难倒英雄汉的地方
        pointer3 = pointer3.next;
        if (pointer3.val >= 10) {
            pointer3.val = pointer3.val - 10;
            a = 1;
        } else {
            a = 0;
        }
        if (null != l1) {
            l1 = l1.next;           
        }
        if (null != l2) {
            l2 = l2.next;
        }
    }
    if (a == 1) {
        pointer3.next = new ListNode(a);   // 最前面的进位忽略了
    }
    return l3.next;
};    
// 张磊的优化写法
var addTwoNumbers = function(l1, l2) {
    var l3 = new ListNode(0);
    var pointer3 = l3;
    var carrier = 0;
    while (l1 != null || l2 != null) {
        var a = 0;
        var b = 0;
        if (l1 != null) {
            a = l1.val;
            l1 = l1.next;           
        }
        if (null != l2) {
            b = l2.val;
            l2 = l2.next;
        }
        var sum = a + b + carrier;
        if (sum >= 10) {
            sum -= 10;
            carrier = 1;
        } else {
            carrier = 0;
        }
        pointer3.next = new ListNode(sum); //一分钱难倒英雄汉的地方
        pointer3 = pointer3.next;
    }
    if (carrier === 1) {
        pointer3.next = new ListNode(1);   // 最前面的进位忽略了
    }
    return l3.next;
};    
        

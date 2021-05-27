/* 2020-12-02 | 2021-1-9| 2021-5-26
1、不知道怎么让pointer3.next不为空的情况下赋值 ---可以直接赋值啊，开始只限制在了poiner3.next.val = l1.val+l2.val
2.竟然在判断条件的时候用了if (l1 = null) 等号和赋值啊！！！
3.忽略最前面一个进位 另外，帮我完善了一下用三元运算符来简化if else只有一行时 
4.循环条件两个只要有一个不为空就行，我想复杂了，里面写成了都不为空，结果判断循环结束再加尾巴很麻烦
*/
var addTwoNumbers = function (l1, l2) {
    var sumList = new ListNode(0);
    var l3 = sumList;
    var carrier = 0;
    while (l1 != null || l2 != null) {  //用或的方式判断，这样能直接加完两个数，不会剩下一个数的尾巴
        let num1 = 0;
        let num2 = 0;
        if (l1 != null) {
            num1 = l1.val;
            l1 = l1.next;
        }
        if (l2 != null) {
            num2 = l2.val;
            l2 = l2.next;
        }
        let sum = num1 + num2 + carrier;
        carrier = sum >= 10 ? 1 : 0;
        sum = sum >= 10 ? (sum - 10) : sum;
        l3.next = new ListNode(sum);  //赋值
        l3 = l3.next;

    }
    if (carrier == 1) {   //最后一位的进位不要忽略
        l3.next = new ListNode(1);
    }
    return sumList.next;

};
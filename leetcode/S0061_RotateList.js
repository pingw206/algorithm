//2020-12-14 |2021-1-10|5-26|7-8
//注意区别结果是 [4,5,1,2,3] 而不是[5,4,1,2,3]
//倒数第二步 tail1.next要放对位置，不能过早的置为null，会影响别人，尤其是这种引用
// 不要丢了head == null, 和k==0 的讨论
// 不需要创建头节点; 没有明确指代tail1,tail2,head2,导致绕的不对
var rotateRight = function(head, k) {
    if (head == null) {  //关键别忘1
        return head;
    }
    
    var len = getLen(head);
    k = k % linkLength;
    if (k === 0) {    //关键别忘2
        return head;
    }
    
    var shiftStep = linkLength - k; 
    var pointer = head;
    while (shiftStep !== 1) {
        pointer = pointer.next;
        shiftStep--;
    }
    var tail1 = pointer;
    var head2 = pointer.next;
    while (pointer.next !== null) {  //关键是这里，这里不要走head2
        pointer = pointer.next;
    }
    var tail2 = pointer;
    tail2.next = head;
    tail1.next = null;  //这里必须在最后再指向null，不能在最上面命名tail1后就指向null
    return head2;
    
};
var getLen = function(head) {
	var len = 0;
	while (head != null) {
		len++;
		head = head.next;
	}
	return len;
}


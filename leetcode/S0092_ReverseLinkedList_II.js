//2020-12-28 | 2021-5-25
/* 分三段， 关键是中间这段 
	 [1, end1] -> [start2, end2] -> [start3, length]
       ==> 
   [1, end1] -> [end2, start2] -> [start3, length]
*/ 
var reverseBetween = function(head, left, right) {
    if (head == null) {
        return null;
    }
    var newList = new ListNode(0);
    newList.next = head;
    //1.走到end1
    var end1 = newList;
    for (var i=1; i<left;i++) {
        end1 = end1.next;
    }
   
    //2.中间段用头插法来翻转 
    var start2 = end1.next;
    end1.next = null; //end1断开后面，这样才可以当做一段没有尾巴的数组来翻转头插

    var cursorNode = start2;
    for (i=left;i<=right;i++) {
        var headNode = cursorNode;
        cursorNode = cursorNode.next;

       /*  var tempNode = end1.next;
        end1.next = headNode;
        headNode.next = tempNode; */

        headNode.next = end1.next;
        end1.next = headNode;

    }
    //3.start2接start3
    start2.next = cursorNode; 
    return newList.next;
};
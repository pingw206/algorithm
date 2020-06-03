//2020-5-25 第一遍没看懂题，竟然是如此简单的意思？就是给你一个节点，让你删掉，不用遍历去找这个节点，不是说给你一个val


var deleteNode = function(node){
    //判断是不是最后一个或者空节点，本题中已经预先说了不会给最后一个节点，所以也可以不用写这句
    if (node == null || node.next == null){
        return;
    }
    node.val = node.next.val;
    node.next = node.next.next;
}
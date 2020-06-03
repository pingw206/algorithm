var isSameTree = function(p, q) {
    if (p == null && q == null) {
        return true;
    } 
    if (p == null || q == null) {
        return false;
    } 
    return (p.val == q.val && isSameTree(p.left,q.left) && isSameTree(p.right, q.right)); 
}
 
// 我对于迭代还是不清楚，导致因为没有写p.val == q.val这个判断条件耽误了太长时间做这道题，40分钟？？
// f(n-1)只是指它下面的都可以用这个函数，但是这个层级本身也是需要判断的呀！
var isSameTree = function(p, q) {
    if (p == null && q == null) {
        return true;
    } 
    if (p == null || q == null) {
        return false;
    } 
    return (p.val == q.val && isSameTree(p.left,q.left) && isSameTree(p.right, q.right)); 
}
 
// 2021-1-31 没有写p.val == q.val这个判断条件, f(n-1)只是指它下面的都可以用这个函数来判断，但是这个层级本身也是需要判断的呀！
// 而且最后一句， 是直接return 里面含true或false了，不要只返回true丢了false的情况
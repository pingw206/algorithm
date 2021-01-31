//方法一： 将最小子问题设为 root == null的时候
// 然后子问题是f(n-1),也就是应用了函数的invertTree(root.left)与invertTree(root.right);子问题内部用函数解决了，但是子问题（之间）还需要操作交换
// 这个题区别于之前的遍历题方法是有返回值，用来处理null的情况，试着用没有返回值的处理方式写一下？ （不管有没有返回值，都会跳出一层递归）
var invertTree = function(root) {
    if (root == null) {
        return null;  //不再是return;
    }
    
    // 1: resolve two sub question，保证子问题都已经是反转树
    invertTree(root.left);
    invertTree(root.right);
    
    // 2: 然后再交换已经是反转树的子问题 swap root.left and root.right---这里不是交换root.left.val
    var temp = root.left;    
    root.left = root.right;
    root.right = temp;

    return root;  //注意这里的返回值，其实是所有操作都完成后的最外层
};

//方法二：将root !== null 并且 没有左右子节点的时候看作最小子问题  （需要处理root == null 以及 root一边为null的情况）
var invertTree = function(root) {
    if (root == null) {
        return null;
    }
    return invertTree1(root);
};

var invertTree1 = function(root) {
    if (root.left == null && root.right == null) {
        return root;
    }
    
    // s1: resolve two sub question
    var subLeft = root.left != null ? invertTree1(root.left) : null;
    var subRight = root.right != null ? invertTree1(root.right) : null;
    
    // s2: swap root.left and root.right
    var temp = root.left;    
    root.left = root.right;
    root.right = temp;

    return root;
};
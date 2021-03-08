/** 2021-3-8 没咋看懂
 * 不用从头出发，所以每一层都可以重新往下走，也就是有两个地方有root.left, root.right的入口
 * 判断符合时也不用判断叶子节点，直接等于targetSum就行
 * 
 */

var pathSum = function(root, sum) {
  var num = new Object({"key":0});
  preOrder(root, sum, num);
  return num["key"];
};

var preOrder = function(root, targetSum, num) {
  if (root == null) {
      return;
  }
  calcSumNum(root, 0, targetSum, num);//第一层root都走完后
  preOrder(root.left, targetSum, num);//第二层root.left往下走
  preOrder(root.right, targetSum, num)
}

var calcSumNum = function(root, sum, targetSum, num) {  //从root节点一直走下去加一起
  if (root == null) {  //直到走完才返回
      return;
  }
  sum += root.val;
  if (sum == targetSum) { //遇到target就加1，但是不返回，继续走
      num["key"]++;
  }
  calcSumNum(root.left, sum, targetSum, num);
  calcSumNum(root.right, sum, targetSum, num);
}
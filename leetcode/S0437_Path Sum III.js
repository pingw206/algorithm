/** 2021-3-8 没咋看懂
 * 不用从头出发，所以每一层都可以重新往下走，也就是有两个地方有root.left, root.right的入口
 * 判断符合时也不用判断叶子节点，直接等于targetSum就行
 * 
 * 第一 calcSumNum是sum题常规写法，第二 因为从每个节点都可以再出发去计算跟下面节点的sum，所以要从这个节点开始遍历，选择一种遍历方法即可，比如这里的前序遍历，preOrder， 
 * 
 */

var pathSum = function(root, targetSum) {
  var num = new Object({"key":0});
  preOrder(root, targetSum, num);
  return num["key"];
};

var preOrder = function(root, targetSum, num) {
  if (root == null) {
      return;
  }
  calcSumNum(root, 0, targetSum, num);//第一层root都走完后--前序遍历访问这个root
  preOrder(root.left, targetSum, num);//第二层root.left往下走---前序遍历左节点
  preOrder(root.right, targetSum, num) //前序遍历右节点
}

var calcSumNum = function(root, sum, targetSum, num) {  //从root节点一直走下去加一起
  if (root == null) {  //直到走完才返回
      return;
  }
  sum += root.val;
  if (sum == targetSum) { //遇到target就加1，表示有了一种组合方法; 不会返回，继续算下去，sum可能会比target大，但是因为节点有负数的存在，所以还有可能再出现合适的sum的
      num["key"]++;
  }
  calcSumNum(root.left, sum, targetSum, num);
  calcSumNum(root.right, sum, targetSum, num);
}
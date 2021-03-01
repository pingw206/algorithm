/** 2021-3-1 被输出格式弄懵，没想到真的就要踏踏实实照人家的格式来。。
 *  要学会这种新创建一个函数，输入多个变量的方法
 * 深度遍历，走完一条路，打印出来一条路；其实是调用栈的问题：走下去时候，遇到的节点都push进去栈，
 * 当走到叶子节点的时候打印出来，然后把叶子节点pop出来，继续push别的节点，走第二条路
 * 最后path调用栈都一层层弹出，变为[]
 * 
 */
/**
 * map() 方法创建一个新数组，其结果是该数组中的每个元素是调用一次提供的函数后的返回值。
 * const array1 = [1, 4, 9, 16]; 
 * const map1 = array1.map(x => x * 2);
 * console.log(map1); 
 * expected output: Array [2, 8, 18, 32]
 * 
 * 另外，map 不修改调用它的原数组本身，所以用path.map((x)=>x）来 copy 节点，并且不会影响下面继续使用path
 */
/**
 * join()方法
 * a=[1,2,5]
 * a.join("->")  ===> "1=>2=>5"
 * 所以paths = [[1,2,5],[1,3]]有两个item，
 *   paths.map(function(item) {
      return item.join("->"); 
      遍历每个item用=>join起来
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  var paths = []; //存放所有路的结果 [[1,2,5],[1,3]]
  var path = []; //一条路
  generatePath(root, paths, path);
  return paths.map(function(item) {
      return item.join("->");  //
  });
};

var generatePath = function (root, paths, path) {
  if (root == null) {
      return;
  }
  path.push(root.val);   //入栈  [1,2,5]
  if (root.left == null && root.right == null) {
      paths.push(path.map((x)=>x)); // 判断是叶子节点，copy the path [1,2,5] 放入结果表paths中
  }
  generatePath(root.left, paths, path);
  generatePath(root.right, paths, path);
  path.pop();   //调用走完，5节点出栈 ==> [1,2]
}
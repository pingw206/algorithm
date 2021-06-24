/** 2021-3-1 | 4-21 | 6-24
 * 不要被输出格式弄懵
 * arr.join([separator])方法， 指定一个字符串来分隔数组的每个元素，返回一个所有数组元素连接的字符串。 如果separator是空字符串("")，则所有元素之间都没有任何字符。
 * a=[1,2,5]
 * a.join("->")  ===> "1->2->5"
 * paths = [[1,2,5],[1,3]]有两个item，用map遍历每个item,item内用=>join起来
 *   paths.map(function(item) {
      return item.join("->"); 

 map() 方法创建一个新数组，其结果是该数组中的每个元素是调用一次提供的函数后的返回值。
 map 不修改调用它的原数组本身，所以用path.map((x)=>x）来 copy 节点，并且不会影响后面的调用继续使用之前的path
 * const array1 = [1, 4, 9, 16]; 
 * const map1 = array1.map(x => x * 2);
 * console.log(map1); 
 * expected output: Array [2, 8, 18, 32]     

 * 深度遍历，走完一条路，打印出来一条路；其实是调用栈的问题：走下去时候，遇到的节点都push进去栈，
 * 当走到叶子节点的时候打印出来，然后把叶子节点pop出来，继续push别的节点，走第二条路
 * 最后path调用栈都一层层弹出，变为[]

 * dfs() 一个函数跳出去---要么里面遇到了return语句，要么函数所有语句都执行完了。
 */

 var binaryTreePaths = function(root) {
  var paths = []; //存放所有路的结果 [[1,2,5],[1,3]]
  var path = []; //一条路
  generatePath(root, paths, path);
  return paths.map(function(item) {
      return item.join("->");  // 或 paths.map(x=>x.join("->"));
  });
};

var generatePath = function (root, paths, path) {
  if (root == null) {
      return;
  }
  path.push(root.val);   //入栈  [1,2,5]
  if (root.left == null && root.right == null) {
      paths.push(path.map((x)=>x)); // 判断是叶子节点，copy the path [1,2,5] 放入结果表paths中, 或写path.map(x=>x)
  }
  generatePath(root.left, paths, path);
  generatePath(root.right, paths, path);
  path.pop();   //调用走完，5节点出栈 ==> [1,2]
}
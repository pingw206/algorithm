/** 2021-4-25 ｜ 6-23
 * 开始想的是完全改变结构，只push右节点，后来发现左节点也是会存在的；后来改成右节点不存在的情况下push左节点，还是遇到了错误，没有push左节点，但是下一层会露出来左节点的子节点，[1,2,3,4]，这种最后一层的时候怎么处理？
 * 所以其实不用想这么多，还是用老方法push到queue中，只不过往result中push的时候，只push当前层最后一个节点，这就很好的符合了题目要求
 */

 var rightSideView = function(root) {
    if (root == null) {
        return [];
    }
    
    var queue = [root];
    var result = [];
    while (queue.length != 0) {
        var curLevelLength = queue.length;
        var curLevel = [];
        for (var i = 0; i < curLevelLength; i++) {
            var frontNode = queue.shift();
            curLevel.push(frontNode.val);
            if (frontNode.left != null) {
                queue.push(frontNode.left);
            }
            if (frontNode.right != null) {
                queue.push(frontNode.right);
            }
        }
        result.push(curLevel[curLevel.length-1]);  //或result.push(curLevel.pop());
    }
    return result;
  };
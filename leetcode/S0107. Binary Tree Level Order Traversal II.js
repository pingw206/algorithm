/*2021-4-18 ｜ 6-22
1. Array.prototype.reverse() 

reverse() 方法将数组中元素的位置颠倒，并返回该数组。数组的第一个元素会变成最后一个，数组的最后一个元素变成第一个。该方法**会改变**原数组。

2. Array.prototype.map()

map() 方法创建一个新数组，其结果是该数组中的每个元素是调用一次提供的函数后的返回值。

这里倒是也可以不用map

3. 其实最后我开始想的是先把result pop出来，然后再push， duck 不必， reverse()方法完全可以做到，熟知array的操作很有必要
*/
var levelOrderBottom = function(root) {
    if (root == null) {
        return [];
    }
    var result = [];
    var queue = [root];
    
    while (queue.length !== 0) {
        var currentLayer = [];
        var currentCount = queue.length;
        for (var i=0; i<currentCount; i++) {
            var node = queue.shift();  //队列 shift 
            currentLayer.push(node.val);
            if (node.left !== null) {
                queue.push(node.left)
            }
            if (node.right !== null) {
                queue.push(node.right)
            }
        }
        result.push(currentLayer); // 或用result.unshift(curLevel)
    }
    return result.reverse();
};
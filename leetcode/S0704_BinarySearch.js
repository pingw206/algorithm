/*第一种方法，闭区间
1. 在闭区间[left,right]中寻找，所以mid不论是floor还是ceil，都是在这个区间中
while 的条件也是要保证区间中有数，那么就是“<="，不用复杂的举例
2. 找到的时候，left 和right可能相遇，也可能没相遇
[left, mid-1, mid, mid +1, right]
3. while循环中可以是小于号吗？如果等号可以吗？可以举例极限情况，如只剩下1个数或2个数，看是否能找到或者是否能停止循环
*/

var search = function(nums, target) {
    var left = 0; 
    var right = nums.length - 1;
    while (left <= right) {
      var mid = Math.floor((right+left)/2); // Math.ceil，一样的，在闭区间的哪边都能找到
      if (nums[mid] === target) {
        return mid;
      }else if (nums[mid] > target) {
        right = mid - 1;  //right = mid行吗? 不行，极端情况只有两个数的时候，就停不下来了
      } else {
        left = mid + 1;
      }
    }
    return -1;  
};

/******第二种方法：在[ )的区间中查找
1. while什么时候停止，区间为空集时，对于左闭右开的区间，那么就是left=right时，所以保持while循环应该left<righ
2.为什么只能floor?  因为要把mid放到左边的闭区间上
3. LR是不是一定会相遇？是，相遇时停止。和第一种方法的区别是在while循环中不返回，停止后再返回。
4, 用左开右闭跑一遍
5，扩展：这种方法可以找target不在数列中时应该放的位置--35题；
        还可以找数列中有重复的数字时，第一个位置和最后一个位置--34题;
*/
var search = function(nums, target) {
  var left = 0;
  var right = nums.length;
  while (left < right) {
      var mid = Math.floor((left+right)/2);
      if (nums[mid] < target) {
          left = mid +1;
      } else if (nums[mid] > target) {
          right = mid ;
      } else {
          return mid;
      }
  }
  return -1;
};
// 用lower bound来写也可以
 var binarySearch = function(a,target) {
     var left = 0;
     var right = a.length;
     while (left < right) {   // 注意此处是小于
        var mid = Math.floor((left + right)/2)
         if (a[mid] < target) {
             left  = mid + 1;
         } else {
             right = mid;
         }
     }
    if(nums[left]===target){  //left=right
      return left;
    }else{
      return -1;
  } 
}

 /*
 binary search
		○ 注意如果数组是倒序的，应该target < nums[mid] 的符号怎么变 
		○ 优化：if 各个条件的顺序，把情况出现很少的条件放到后面
如何证明你的算法是对的： 开始条件是对的、递推过程能成立、能终止----归纳推演
*/


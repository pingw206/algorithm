/** 2021-5-23
 *  还是用二分法的思想，但是没想到
 * [5,6,7,0,1,2,3]
 *  可以把数组分成两部分[0,mid), [mid,length)，左边的数字全部比第一个数大；右边的数字全部比最后一个数小；
 * 最后循环结束的时候，mid就是最小数，也就是left所在的index。
   但是还有一种可能是 【1，2，3，4，5】这样子得到的left是length，应该返回第一个数 
 */

   var findMin = function(nums) {
    var left = 0;
    var right = nums.length;
    var leftMin = nums[0];
    var rightMax = nums[nums.length-1];
    while (left < right) {
        var mid = Math.floor((left+right)/2);
        if (nums[mid] >= leftMin) {
            left = mid+1;
        } else {
            right = mid;
        }
        /** 或者这样写
         * if (nums[mid] <= rightMax) {
              right = mid;
          } else {
              left = mid + 1;
          }
         */
    }
    return left == nums.length ? leftMin : nums[left];  // 或者 return right == nums.length ? leftMin : nums[right];
  };
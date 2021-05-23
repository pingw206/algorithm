// date: 2021.5.23
/**
 * 我想复杂了，，直接应用二分有四种情况要讨论，很容易绕晕。还是先分成两部分，再针对性用二分比较好
 * 用两次二分，复杂度2Log(n)也还是log(n)
 */

var search = function(nums, target) {
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
  }
  
  if (target >= leftMin) {
      return binarySearch(nums, target, 0, left); // [0, left)
  } else {
      return binarySearch(nums, target, right, nums.length); // [right, length)
  }
};

// search in interval: [left, right)
var binarySearch = function(nums, target, left, right) {
  while (left < right) {
      var mid = Math.floor((left+right)/2);
      if (nums[mid] < target) {
          left = mid+1;
      } else if (nums[mid] > target) {
          right = mid;
      } else {
          return mid;
      }
  }
  return -1;
}
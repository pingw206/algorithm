//2021-2-1 一遍过，我的解法，张磊没写
var runningSum = function(nums) {
  var sums = new Array(nums.length);
  sums[0] = nums[0];
  if (nums.length > 1) {
       for (var i=1; i < nums.length; i++) {
           sums[i] = sums[i-1] + nums[i];
       }
  }
   return sums;
};

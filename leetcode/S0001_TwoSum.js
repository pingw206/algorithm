//用Map()来做；
//2021-01-04 设谁为Key比较关键
var twoSum = function(nums, target) {
  let a = new Map();
  for (var i = 0; i < nums.length; i++) {
      if (a.has(target-nums[i])){
          return [a.get(target-nums[i]),i];
      }else {
          a.set(nums[i],i);
      }
  }
};

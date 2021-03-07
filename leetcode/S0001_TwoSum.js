//2021-3-7创建Map()来做；因为要用到has(key)方法判断是否存在这个value，key判断为target-value，则设nums[i]为Key
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

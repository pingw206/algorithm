
//JS中用Set()对象来存储哈希值,复杂度 O(1)
var containsDuplicate = function(nums) {
  let ele = new Set();
  for (var i =0; i < nums.length; i++) {
    if (ele.has(nums[i])){
      return true;
    }else {
      ele.add(nums[i]);
    }
  }
  return false;//都走完了上面的还没有返回true，那肯定是没有重复的了，不必再验证if (numSet.size == nums.length){return false;}
}

//下面这种方法是最容易想到的，没有什么方法，复杂度为O(n*2),数组一长就不行了。
//注意测试用例为空[]的时候，就知道把return false 放在哪里
var containsDuplicate = function(nums) {
  for(var i = 0; i < nums.length; i++) {
    for(var j = i+1; j < nums.length; j++) {
      if (nums[i] === nums[j]){
        return true;
      } 
    }
  }
  return false;  
}
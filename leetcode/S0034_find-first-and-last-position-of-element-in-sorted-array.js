
var searchRange = function(nums, target) {
    let lower = lowerBound(nums, target);
    if (lower == nums.length || nums[lower]!= target) {  //先执行||前面的话，如果为真就不往后算了，避免nums[length]无意义
        return [-1,-1];
    }
    let upper = upperBound(nums, target);
    return [lower, upper-1]; //注意此处是upper-1哦
}; 
    
    var lowerBound = function(nums, target){  
        var left = 0, right = nums.length;
        while(left < right) {
            let mid = Math.floor((left+right)/2);
            if (nums[mid] < target){
                left = mid + 1;
            }else {
                right = mid;
            }
        }
        return left;
    }

    var upperBound = function(nums, target) {
        var left = 0, right = nums.length;
        while (left < right) {
            let mid = Math.floor((left+right)/2);
            if (nums[mid] <= target){
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left;
    }



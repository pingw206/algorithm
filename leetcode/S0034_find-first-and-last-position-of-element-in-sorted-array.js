//方法一， lower bound 结合upperbound 
var searchRange = function(nums, target) {
    
    var start = lower(nums, target);
    if (start == nums.length || nums[start] != target ) {  // 或符号||前面先放简单的，节省计算
        return [-1,-1]
    } 
    var end = upper(nums, target);               //放到上面判断的下面，节省计算
    return [start, end-1];   //记得是end-1
}
//lower
function lower(nums, target){
    let low_left = 0;
    let low_right = nums.length;
    while(low_left < low_right){
        let low_mid = Math.floor((low_left+low_right)/2);
        if (nums[low_mid] < target) {
            low_left = low_mid + 1;
        } else {
            low_right = low_mid;
        }
    }
    return low_left;
}
//upper   
function upper(nums, target){
    let upp_left = 0;
    let upp_right = nums.length;
    while(upp_left < upp_right) {
        let upp_mid = Math.floor((upp_left+upp_right)/2);
        if (nums[upp_mid] <= target) {
            upp_left = upp_mid + 1;
        } else {
            upp_right = upp_mid;
        }
    }
    return upp_left;
}


//2020-11-14 更新 ， 方法二： 只用了lower bound
var searchRange = function(nums, target) {
    var left = 0, right = nums.length;
    while(left < right){
        var mid = Math.floor((left+right)/2);
        if (nums[mid] < target){
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    var start = left;
    var end = left;
    if (start == nums.length) {
        return [-1,-1]
    } else if (nums[left] != target){
        return [-1,-1]
    } else {
        while (end <= nums.length - 1) {
            if (nums[end+1] == target){
                end=end+1;
                console.log(111)
            } else {
                return [start, end];
            } 
        }
    }
};

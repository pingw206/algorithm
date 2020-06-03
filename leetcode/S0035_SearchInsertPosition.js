//这种方法虽然accept，但是时间复杂度O(N)，费时间,不可取
var searchInsert_1 = function(nums, target) {
    var i = 0;
    while (nums[i] < target && i < nums.length){
        i++;
    }
    return i;
};

/*用lower bound方法*/
var searchInsert = function(nums, target) {
    var left = 0;
    var right = nums.length;
    while (left < right) {
        var mid = Math.floor((left+right)/2);
        if (nums[mid] < target) {
            left = mid +1;
        } else {
            right = mid;
        }
    }
    return left; 
};

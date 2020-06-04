//递归的思想
//helper是借助的第三方空数组，不写在函数里面是为了节约内存，不必总是创建再销毁
//left 传0， right 传 nums.length - 1

function MergeSort(nums, helper, left, right) {
  if (left >= right) {
    return ;
  }
  var mid = left + Math.floor((right-left)/2);
  MergeSort(nums, helper, left, mid);
  MergeSort(nums, helper, mid+1, right);
  // merge two sorted range
  var start1 = left, start2 = mid+1;
  var start_merge = left;
  while (start1 <= mid && start2 <= right) {
    if (nums[start1] < nums[start2]) {
      helper[start_merge] = nums[start1];
      start1++;
    } else {
      helper[start_merge] = nums[start2];
      start2++;
    }
      start_merge++;
  }
  while (start1 <= mid) { // 左边剩的部分处理
    helper[start_merge] = nums[start1];
    start_merge++;
    start1++;
  }
  //右边剩的部分不用放入merge，到时候还存在nums中
  //排好序的数组放入nums
  for (var i = left; i < start_merge; i++) {
    nums[i] = helper[i];
  }
}


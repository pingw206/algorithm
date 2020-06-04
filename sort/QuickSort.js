function QuickSort() {
   // partition range: [start, end]
   // return value: pivot pisition
  function partition(nums,start, end) {
  var pivot = nums[end];
  var left = start, right = end - 1;
     while (left < right) {
       while (nums[left] < pivot && left < right) {
         left++;
       }
       while (nums[right] >= pivot && left < right) {
         right--;
       }
       // while循环保证left和right相遇后指向partition的第二部分, 除非[left, right]都比pivot小
       // 不能left++,right--, 不然left和right相遇后while停止, case: [5,1,2,3], 函数返回2
       swap(nums[left], nums[right]);
     }
     // test: [1,2,3] [3,2,1]
     if (nums[left] >= pivot) { // 这一步把pivot放在中间且返回left, "=="不能省略(因为要return)
       swap(nums[left], nums[end]);
       return left;
     }
     return left+1; // left+1即end
   }
  
   // 快速排序: 分别对pivot两边[start, pivot-1]和[pivot+1, end]快排
   void quick_sort(std::vector<int>& nums, int start, int end) {
     if (start >= end) { return; }
     int pivot = partition(nums, start, end);
     quick_sort(nums, start, pivot-1);
     quick_sort(nums, pivot+1, end);
   }
  
    // 快速选择算法: 依据pivot位于中间, 右边的都小于pivot, 左边的大于等于pivot,
    // 如果右边是k-1个元素, 那么pivot就是第k小元素
    int quick_select(std::vector<int>& nums, int start, int end, int k) {
      if (start >= end) { return nums[start]; }
      int pivot = partition(nums, start, end);
      int left_size = pivot - start;
      if (left_size > k-1) {
        return quick_select(nums, start, pivot-1, k);
      } else if (left_size < k-1) {
        return quick_select(nums, pivot+1, end, k-left_size-1);
      } else {
        return nums[pivot];
      }
    }
  };
  
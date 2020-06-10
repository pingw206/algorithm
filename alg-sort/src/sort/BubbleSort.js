module.exports = {
  /**
   * array: Array of Integers
   * return: void
   * 方法一 迭代
   * 时间复杂度 n+n-1+n-2+....+2+1 是O(n*2);空间复杂度O(1) 
   * 内层循环： 两两比较，互换，把小的数冒泡到前面，大的数放到后面，
   * 外层循环： 冒完一轮后再来一轮，每次轮到末尾的数字减少一个（经过一轮，最大的数字已经放到了最后）
   */
  
BubbleSortIteration : function BubbleSortIteration(arr) {
  if (arr.length <= 1) {
    return;
  }
  for (var end = arr.length - 1; end >= 1; end--) {
    for(var i = 0; i < end; i++){
      if (arr[i] > arr[i+1]) {
        var temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
      }
    }    
  }
},
  
  //方法二 递归
  BubbleSortRecursion : function BubbleSortRecursion(arr) {
    this.InternalBubbleSort(arr, 0, arr.length - 1);
  },
  InternalBubbleSort : function InternalBubbleSort(arr, start, end) {
    if (start >= end) {
      return;
    }
    for (var i = start; i < end; i++) {
      if (arr[i] > arr[i+1]) {
        var temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
      }
    }
    
    InternalBubbleSort(arr, start, end - 1);
  } 

}
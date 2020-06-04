// 时间复杂度 n+n-1+n-2+....+2+1 是O(n*2);空间复杂度O(1) 
//内层循环： 两两比较，互换，把小的数冒泡到前面，大的数放到后面，
//外层循环： 冒完一轮后再来一轮，每次轮到末尾的数字减少一个（经过一轮，最大的数字已经放到了最后）
function BubbleSort(arr) {
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
} 

//拓展: 用递归思维做，一般start = 0, end = len -1 
function BubbleSort(arr, start, end) {
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
  BubbleSort(arr, start, end - 1);
}
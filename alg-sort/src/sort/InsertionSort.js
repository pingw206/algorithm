module.exports = {
  InsertionSort: function InsertionSort(arr){
    if (arr.length <= 1) {
      return;
    }
    for (var start = 1; start <= arr.length-1; start++) {
      var temp = arr[start];
      for (var i = start; i >= 1 && arr[i-1] > temp; i--) {
          arr[i] = arr[i-1];
      }
      arr[i] = temp;
    }
  }
}
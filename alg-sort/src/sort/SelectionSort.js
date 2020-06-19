module.exports = {
  SelectionSortIteration : function SelectionSort(arr) {
    if (arr.length <= 1) {
      return;
    }
    for (var start = 0; start <= arr.length-1; start++){
      var minIndex = start, minElement = arr[start];
      for(var i = start + 1; i <= arr.length - 1; i++){
        if (arr[i] < minElement) {
          minElement = arr[i];
          minIndex = i;
        }
      }
      var temp = arr[start];
      arr[start] = arr[minIndex];
      arr[minIndex] = temp; 
    }
  },
  SelectionSortRecursion: function SelectionSort(array) {
    this.InternalSelectionSort(array, 0, array.length - 1);
  },
  InternalSelectionSort: function InternalSelectionSort(array, start, end) {
    if (start >= end) { return;}
    var minIndex = start;
    var minElement = array[start];
    for (var i = start + 1; i <= end; i++) {
      if (array[i] < minElement) {
        minElement = array[i];
        minIndex = i;
      }
    }
    var temp = array[start];
    array[start] = array[minIndex];
    array[minIndex] = temp;
    InternalSelectionSort(array, start+1, end);
  }
}
module.exports = {
  MergeSort: function MergeSort(array) {
    if (array.length <= 1) { return; }
    this.InternalMergeSort(array, 0 , array.length - 1);
  },
  InternalMergeSort: function InternalMergeSort(array, left, right) {
    if (left >= right) {return;}
    var mid = left + Math.floor((right - left)/2);
    InternalMergeSort(array, left, mid);
    InternalMergeSort(array, mid+1, right);
    // merge two sorted range
    var start1 = left, end1 = mid;
    var start2 = mid+1, end2 = right;
    var tempArray = new Array();
    var mergeIndex = 0;
    while (start1 <= end1 && start2 <= end2){
      if (array[start1] < array[start2]){
        tempArray[mergeIndex] = array[start1];
        start1++;
      } else {
        tempArray[mergeIndex] = array[start2];
        start2++;
      }
      mergeIndex++;
    }
    while (start1 <= end1) {
      tempArray[mergeIndex] = array[start1];
      mergeIndex++;
      start1++;
    }
    while (start2 <= end2) {
      tempArray[mergeIndex] = array[start2];
      mergeIndex++;
      start2++;
    }
    for (var i = 0; i < tempArray.length;i++) {
      array[left] = tempArray[i];
      left++;
    }
  }
}
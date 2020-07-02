//选择最后一个数字作为pivot，比它小的放它左边，比它大的放它右边，返回pivot的index值
//改变了array，而不是返回array
//这个方法需要空间复杂度O（n）

function QuickSort(array) {
  InternalQuickSort(array, 0, array.length-1);
}
function InternalQuickSort(array, left, right) {
  if (left >= right) { return; }
  var pivot = Partition(array, left, right); 
  InternalQuickSort(array, left, pivot-1);
  InternalQuickSort(array, pivot+1, right);
}
function Partition(array, left, right) {
  var pivotValue = array[right];
  var subArr1 = new Array();
  var subArr2 = new Array();
  for (var i = left; i < right; i++) {
      if (array[i] < pivotValue) {
          subArr1.push(array[i]);
      } else {
          subArr2.push(array[i]);
      }
  }
  var index = left;
  for (var i = 0; i < subArr1.length; i++) {
      array[index++] = subArr1[i]; 
  }
  var pivot = index;
  array[index++] = pivotValue;
  for (var i = 0; i < subArr2.length; i++) {
      array[index++] = subArr2[i]; 
  }
  return pivot;
}


/* 方法二 原地排 空间复杂度O（1）的，有点难理解
 Partition : function Partition(array, left, right) {
        var pivot = array[right];
        var i = left-1;
        for (var j = left; j <= right-1; j++) {
            if (array[j] < pivot) {
                i++;
                var temp = array[i]; array[i] = array[j]; array[j] = temp;
            }
        }
        array[right] = array[i+1]; array[i+1] = pivot; // swap(A[i+1], A[right])
        return i+1;
  }
 */
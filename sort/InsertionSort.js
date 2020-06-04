
//优选 方法二：挪后就插,更简洁
// start 是目标点在的数字，目标点之前的（i = start）比目标点大的数i-- 都要往后挪一位，然后把目标点插到前面的位置（通过a[i-1] > temp找到位置）
// start 从1 开始是因为会和i-1的数比较, i >=1 同理
function InsertionSort(arr) {
    for (var start = 1; start <= arr.length-1; start++) {
        var temp = arr[start];
        for (var i = start; i >= 1 && arr[i-1] > temp; i--) {
            arr[i] = arr[i-1];
        }
        arr[i] = temp;
    }
}

//方法一：在一个排序好的数组中，第i个数往里插，先选择到位置；然后后挪其他的数字---这个方法略繁琐
/*顺序问题：如果写while (arr[j] < temp)，数组中有两个数字相同，之前的那个数字也会向后挪，比如【1,4*,7,8,4,】变成【1,4,4*,7,8】，造成无用操作；
  如果忘了加 j < i也不行，a[0]<=temp就会一直为真，导致j++下去无法跳出  */
  function InsertionSort_1(arr) {
    for(var i = 0; i < arr.length; i++){
        var temp = arr[i];
        var j = 0; 
        while (j < i && arr[j] <= temp) {   
            j++;
        }
        for(var k = i; k > j; k--) {   
            arr[k] = arr[k-1];
        }
        arr[j] = temp;
    }
    return arr;
}
var a = [3,1,4,7,4];
console.log(InsertionSort(a));




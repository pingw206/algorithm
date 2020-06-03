//方法一：在一个排序好的数组中，第i个数往里插，先选择到位置；然后后挪其他的数字---这个方法略繁琐
/*line 8 的问题顺序：如果while (arr[j] < temp)，数组中有两个数字相同，之前的那个数字也会向后挪，比如【1,4*,7,8,4,】变成【1,4,4*,7,8】，造成无用操作；
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

//方法二：挪后就插,更简洁
function InsertionSort(a) {
    for (var i = 1;i < a.length; i++){
        var temp = a[i];
        var k = i;
        while (k >= 1 && a[k - 1] > temp){
            a[k] = a[k - 1];
            k--;
        }
        a[k] = temp;
    }
    return a;
}

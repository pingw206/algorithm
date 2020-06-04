function combineArray(arr1,arr2) {
    var arr3 = [];
    var length1 = arr1.length;
    var length2 = arr2.length;
    var i = 0; 
    var j = 0;
    while (i < length1 && j < length2) {
        if (arr1[i] <= arr2[j]) {
            arr3.push(arr1[i]);
            i++;
        } else {
            arr3.push(arr2[j]);
            j++;
        }
    }
    if (i < length1) {
        for (k = i; k < length1; k++) {
            arr3.push(arr1[k]);
        }
    }
    if (j < length2) {
        for (h = j; h < length2; h++) {
            arr3.push(arr2[h]);
        }
    }
    return arr3;
}
var arr1 = [];
var arr2 = [1,3,5,6];
console.log(combineArray(arr1,arr2));

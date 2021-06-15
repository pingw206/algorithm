//2021-2-6 ｜ 6-9  
//可以用118题方法，最后返回dpTable[rowIndex]，因为用到两个数组，空间复杂度O(n*2); 
//但是本题要求空间复杂度是O(k),所以不要再用矩阵放结果
/* 用不断更新的数组放结果，空间复杂度是O（n）; 
因为这个数组前后两个数都是固定的1，所以可以先在最后一位增加1
然后依次更新倒数的一个数字是前两个数字的和（同#118题i-1的时候）
tips：因为倒着已经多创造了一位，倒着更新不会被覆盖掉同位

*/
var getRow = function(rowIndex) {
    var dpTable = new Array(rowIndex+1);
    for (var i = 0; i <= rowIndex; i++) {
        for (var j = i; j >= 0; j--) { //从前往后就覆盖了一会还要用这个加数，所以从最后面多创造一位，从后往前存入和
            if (j == i || j == 0) {
                dpTable[j] = 1;
            } else {
                dpTable[j] = dpTable[j] + dpTable[j-1]; 
            }
        }
    }
    
    return dpTable;
  };
  
  //上面不好理解的话，可以建一个临时数组，然后j是正向变化，空间复杂度也是O（n）
  var getRow = function(rowIndex) {
    var dpTable = new Array(rowIndex+1);
    dpTable[0] = 1;
    
    for (var i = 1; i < dpTable.length; i++) {
        var tempDpTable = dpTable.map((x)=>x); // copy an array
        for (var j = 0; j <= i; j++) {  //因为复制了一个数组，不担心加和后被覆盖，就可以正向来放，好理解一点
            if (j == 0 || j == i) {
                tempDpTable[j] = 1;
            } else {
                tempDpTable[j] = dpTable[j] + dpTable[j-1];  //注意这里
            }
        }
        dpTable = tempDpTable;
    }
    
    return dpTable;
  };
/** 2021-2-28 | 6-23
 * 经典LCS题
 * 转ASCII码有两种写法，s1[i-1].charCodeAt() 或s1.charCodeAt(i-1);
 * 
 */
 var minimumDeleteSum = function(s1, s2) {
    var dpTable = new Array(s1.length+1);
    for (var i=0; i<dpTable.length;i++) {
        dpTable[i] = new Array(s2.length+1);
    }
    dpTable[0][0] = 0; 
    for (var i=1; i<dpTable.length;i++) {
        dpTable[i][0] = s1[i-1].charCodeAt() + dpTable[i-1][0];
    }
    for (var j=1;j<dpTable[0].length;j++) {
        dpTable[0][j] = s2[j-1].charCodeAt() + dpTable[0][j-1];
    }
    for (var i=1; i<dpTable.length;i++) {
        for (var j=1; j<dpTable[0].length;j++) {
            if (s1[i-1] !== s2[j-1]) {
                dpTable[i][j] = Math.min(dpTable[i-1][j]+s1[i-1].charCodeAt(),dpTable[i][j-1]+s2[j-1].charCodeAt())
            } else {
                dpTable[i][j] = dpTable[i-1][j-1];
            }
        }
    }
    return dpTable[dpTable.length-1][dpTable[0].length-1]
};
/**2021-2-15 用二维的数组来表示，是区别于之前的地方。
 * 最后一个格子是上面和左面的方法之合。可以先横着遍历或者竖着遍历.最上面一行或最下面一列只有一种方法能到达。 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    var dpTable = new Array(m);
    for (var i=0;i<m;i++) {
        dpTable[i] = new Array(n)
    }
    
    for (var k=0;k<m;k++) {
        for (var j=0; j<n;j++) {
            if (k == 0 || j == 0) {
                dpTable[k][j] = 1;
            } else {
                dpTable[k][j] = dpTable[k][j-1] + dpTable[k-1][j];
            }
            
        }
    }
    return dpTable[m-1][n-1]
};
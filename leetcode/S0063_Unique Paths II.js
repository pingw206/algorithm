/*2021-2-15 ｜ 3-31 | 6-10
* 1.障碍怎么处理，就是一个点遇到由障碍组成时，要break，还有初始化0的这点，就是为了给遇到break后，其他没走的地方都赋值0，
只需要给首行和首列这样操作，因为就是一条路走到黑，如果障碍在图中间，还有别的路
* 2.一个很容易错的地方，就是初始化的时候,没有写break，只是赋值，这样就导致不能通过的例子如[[1,0]]应该输出0结果输出1，
因为前面遇到障碍，后面还能赋1，其实后面都走不通了，不break的话，再后面还能利用前面的值（1）
if (i == 0 || j == 0) {
    if (obstacleGrid[i][j] == 1) {
        dpTable[i][j] = 0;
    } else {
        dpTable[i][j] = 1;
    }
}
* 3. 另外一个需要注意的地方，某个地方是障碍，那么对应的这个地方的dpTable就是0，而不要算下一个格子是怎么组成的
*
*/

var uniquePathsWithObstacles = function(obstacleGrid) {
    var m = obstacleGrid.length; //行数
    var n = obstacleGrid[0].length; //列数
    
    var dpTable = new Array(m);
    for (var i=0; i < m; i++) {
        dpTable[i] = new Array(n).fill(0); //这里区别于62题的地方，必须得填0，不然后面break跳过的时候，里面没有数字
    }
    
    //initialize the boundary of dp table 第一行和第一列的方法填1处理
    for (var j=0; j<n; j++) {
        if (obstacleGrid[0][j] == 1) {
            break;  //break 是循环结束， continue才是跳过本轮循环；也就是说如果遇到j=1的时候是障碍，那么j>=1后面的路都是0种，不通！
        }
        dpTable[0][j] = 1;
    }
    for (var k=0; k<m; k++) {
        if (obstacleGrid[k][0] == 1) {
            break;
        }
        dpTable[k][0] = 1;
    }
    // dp progress
    for (var i=1; i < m; i++) {
        for (var j=1; j < n; j++) {
            if (obstacleGrid[i][j] == 1) {
                dpTable[i][j] = 0;
            } else {
                dpTable[i][j] = dpTable[i-1][j] + dpTable[i][j-1]
            }
        }
    }
    
    return dpTable[m-1][n-1];
  };
  
  /* 方法二
  *我试图不在初始的时候赋值0，在后面再赋值，经过多次尝试，发现没那么简单，尤其是不能跳过break 
  而且不能先判断 if (obstacleGrid[k][0] == 1) {
            dpTable[k][0] = 0;
            都会导致障碍物后面还会被填值，遇到障碍物，后面就都走不成了，都是0，循环都不能再走
  */
  var uniquePathsWithObstacles = function(obstacleGrid) {
    var m = obstacleGrid.length; //行数
    var n = obstacleGrid[0].length; //列数
    
    var dpTable = new Array(m);
    for (var i=0; i < m; i++) {
        dpTable[i] = new Array(n);
    }
    
    //initialize the boundary of dp table 第一行和第一列的方法填1处理
    for (var j=0; j<n; j++) {
        if (obstacleGrid[0][j] == 0) {
            dpTable[0][j] = 1;
        } else {
           for (var v=j;v<n;v++){
               dpTable[0][v] = 0; 
           }
           break;
           
        }
    }
    for (var k=0; k<m; k++) {
        if (obstacleGrid[k][0] == 0) {
            dpTable[k][0] = 1;
        } else {
            for (var v=k;v<m;v++){
               dpTable[v][0] = 0; 
            }
            break;
        } 
    }
    // dp progress
    for (var i=1; i < m; i++) {
        for (var j=1; j < n; j++) {
            if (obstacleGrid[i][j] == 1) {
                dpTable[i][j] = 0;
            } else {
                dpTable[i][j] = dpTable[i-1][j] + dpTable[i][j-1]
            }
        }
    }
    console.log(dpTable)
    return dpTable[m-1][n-1];
  };
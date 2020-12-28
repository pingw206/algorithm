/*2020-12-28 错误超时的方法：
return climbStair(n-1) + climbStair(n-2) ,导致循环调用，栈溢出
*/
//方法一
function climbStair2(n) {
    var a = [0,1,2]; // 简洁，最开始写了个0，不用分情况讨论了
    for(var i = 3;i <= n;i++) {
        a.push(a[i-1] + a[i-2]);//如果用这句话，就不要提前设置a.length了
    }
    return a[n];
}
//方法二

function climbStair1(n) {
    var a = [];
    a.length = n + 1; //这句话要加，为了提前规划容量内存，提高效率
    for(var i = 0;i <= n;i++) {  
         if (0 == i) {
            a.push (0);
        }
        if (1 == i) {
            a.push (1);
        }
        if (2 == i) {
            a.push (2);
        }
        if (i >= 3) {
            a[i] = a[i-1] + a[i-2];
           // a.push(a[i-1] + a[i-2);如果用这句话，就不要提前设置a.length了
        }
        //console.log(a);
    }
    return a[n];
}
var n = 7;
console.log(climbStair(n));
//2020-11-14更新 懒惰如我，搞了一个直接调用自身的函数，然后在n=45的时候卡死了。。。因为栈层层调用太多了，超时了;如果想调用函数，也应该
//保存每次函数的计算结果，这样后面调用的时候不用再计算一遍，层层调用了
var climbStairs = function(n) {
    if (n == 1) {
        return 1;
    }
    if (n == 2) {
        return 2;
    }
    return climbStairs(n-1) + climbStairs(n-2); 
};
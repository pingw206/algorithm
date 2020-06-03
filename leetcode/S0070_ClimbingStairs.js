
function climbStair2(n) {
    var a = [0,1,2]; // 简洁
    for(var i = 3;i <= n;i++) {
        a.push(a[i-1] + a[i-2]);
    }
    return a[n];
}


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

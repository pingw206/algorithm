function buble(a) {
var j = a.length;
while(j > 1){
    for(var i = 0; i < j; i++){
        temp = a[i];
        if (a[i] > a[i+1]){
            a[i] = a[i+1];
            a[i+1] = temp;
        }
    }
    j--;
} 
console.log(a);   
} 
// 时间复杂度 n+n-1+n-2+....+2+1 是O(n*2);空间复杂度O(1)

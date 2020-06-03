//1 while 
var reverseString = function(s) {
    var left = 0;
    var right = s.length - 1;
    var temp;
    while(left < right) {
        temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left += 1;
        right -= 1;
    }
    return s;
    
};

//2 for
var reverseString = function(s) {
    for (var i = 0; i < s.length/2; i = i+1) {
        var temp = s[i]; 
        s[i] = s[s.length-i-1];
        s[s.length-i-1] = temp;
    }
};

/*
reverse string 两种解法
		○ for 循环， s[i] = s[s.length - i - 1]
		○ while 循环，游标靠近的方法
		○ 注意：i = i+1 ; i+=1; i ++; ++ i 
		○ 注意 length 为0的情况
		○ 考虑除以2是奇数还是偶数；
        ○ 判断句加不加等号，分奇偶来看
本题要求空间复杂度是O(1),时间复杂度是O(n/2)=O(n),线性的
*/
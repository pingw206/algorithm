/*2020-5-17 |2020-12-30 |2021-3-6 |6-3
有几个注意点
1.直接从string里拿出来的字符串要转成整数才能参与运算，在push的时候push的都是整数，后面计算的时候自然就是整数了，stk.push(parseInt(str)) ，
2.注意谁是第一个数，谁是第二个数，在减法和除法的时候需要区分
3.注意人家说的除法取整方法，Division between two integers should truncate toward zero.
   是向0截取，那么正数和负数的时候需要的截取方法不同
4.有两个要判断是否抛出异常的地方，即使题目中不会出现，但这是惯例思维

*/

var evalRPN = function(tokens) {
    var stk = new Array();
    for (var i = 0; i < tokens.length; i++) {
        let str = tokens[i];
        if (str == '+' || str == '-' || str=='*'|| str == '/') {
            //if stk.length < 2 throw exception
            var num1 = stk.pop();  
            var num2 = stk.pop();
            var result;
            if (str == '+') {
                result = num1 + num2;
            }
            if (str == '-') {
                result = num2 - num1;
            }
            if (str=='*') {
                result = num1 * num2;
            }
            if (str == '/') {  //我这里result = parseInt(num2/num1) 也可以，就不用分情况讨论了;
                var temp = num2/num1;  //if num1 === 0 , throw exception 
                if (temp >= 0) {    //不写等号的话，要在前面定义的时候var result = 0；
                    result = Math.floor(temp);   //这两条写成三元判断更简单一些
                } 
                if (temp < 0) {
                    result = Math.ceil(temp);
                }
            }
            stk.push(result);
        } else {
            stk.push(parseInt(str));    //这里是关键**，这里写一句，不用每次计算完再转换
        }
    }
    return stk[0];   //或者stk[stk.length - 1]都可以
};

//2020-5-17 相信自己的感觉，不会的地方就先用伪代码写，如下是我的思路，基本是对的，我以为会有更好的办法来用正则表达式处理加减乘除，其实没有，那么就要想最笨的办法是什么
var evalRPN = function(tokens) {
    var stack = [];
    for (var i = 0; i < string.length; i++) {
        if (string[i] !== (+-*/)) {
            stack.push(string[i]);                  
        } else {
            var pop1 = stack.pop();
            var pop2 = stack.pop();
            var temp =  pop1(+-*/) pop2;
            stack.push(temp);
        }
    }
    return stack[0];
};
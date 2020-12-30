/*2020-5-17  有两个要判断是否抛出异常的地方，即使题目中不会出现，但这是惯例思维
字符串要转成整数才能参与运算，一定要是 stk.push(parseInt(str))，保证栈里面都是数字栈 */
/*2020-12-30 
1.加减乘除的表示方法还是以为用正则，其实用不到,把四种运算符的情况放在if里，其他数字放在else里也没多少种情况
2.另外没想到（a运算符b）怎么表示，其实具体到四种情况就可以表示清楚了啊
3. 除法没有注意到人家要取整，就涉及到正负数怎么取整
Division between two integers should truncate toward zero.整数除法只保留整数部分
4. 直接从string里拿出来的数字要转成Int才能用，这是常识
5.注意 减法和除法的时候 谁是被减，被除数
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
            if (str == '/') {
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
            stk.push(parseInt(str));    //这里是关键**
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
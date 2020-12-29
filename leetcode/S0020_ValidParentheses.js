/*2020-12-28 想用栈，但是想不到f(n-1)是什么，栈又不是递归，非要什么f(n-1)!! */
//优化写法， 首先判断条件可以优化到两条，然后是把符号都先存到map里面，再使用；

/*Map知识点:Map 与数组的关系
let kvArray = [["key1", "value1"], ["key2", "value2"]];
let myMap = new Map(kvArray);// Map构造函数可以将一个二维键值对数组转换成一个Map对象
myMap.get("key1"); // 返回值为 "value1"

Map.prototype.get(key)
返回键对应的值，如果不存在，则返回undefined。
Map.prototype.has(key)
返回一个布尔值，表示Map实例是否包含键对应的值。
 */
var isValid = function(s) {
    let kvArray = [[')', '('], ['}', '{'], [']', '[']];  //注意存的是反的，为了调用右半边当keykey
    var matchMap = new Map(kvArray);
    var newStack = new Array();
    //多层if else的嵌套要了解原理
    for (var i = 0; i < s.length; i++) {
        if (!matchMap.has(s[i])) {    //逐个分析遇到的key是否为右半边，不是话，就是新出现的左半边，push进去
            newStack.push(s[i]);
        } else {
            if (newStack.length == 0 || newStack[newStack.length - 1] != matchMap.get(s[i])) {
                return false;   //是右半边时，如果左边没有符号来匹配，或者左边的符号和它不匹配,一定是在length-1的位置上匹配（先考虑length == 0的情况，然后进入length-1也就有意义了）
            } else {
                newStack.pop();
            }
        }
    }
    if (newStack.length == 0) {
        return true;
    }
    return false;
};
//我最开始的写法，遍历一遍所有的符号（其实S本身就是字符串，可以定位到第几个字符的，不用split)
var isValid = function(s) {
    var sList = s.split("");
    var newStack = new Array();
    for (var i = 0; i < sList.length; i++) {
        if (sList[i] == '{' || sList[i] == '[' || sList[i] == '(') {
            newStack.push(sList[i]);
        } else if (sList[i] == "}") {
            if (newStack.length == 0) {
                return false;
            }
            if (newStack[newStack.length - 1] == "{") {
                newStack.pop();
            } else {
                return false;
            }
        } else if (sList[i] == ")") {
            if (newStack.length == 0) {
                return false;
            }
            if (newStack[newStack.length - 1] == "(") {
                newStack.pop();
            } else {
                return false;
            }
        } else if (sList[i] == "]") {
            if (newStack.length == 0) {
                return false;
            }
            if (newStack[newStack.length - 1] == "[") {
                newStack.pop();
            } else {
                return false;
            }
        }
    }

    if (newStack.length == 0) {
        return true;
    }
    return false;
};


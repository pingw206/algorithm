//2021-2-14 | 6-2
//用栈来存入，用map的判断是否存在

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
    let kvArray = [[')', '('], ['}', '{'], [']', '[']];  //注意存的是反的，为了调用右半边当key
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
    } else {
        return false;
    }
};
//2.简化方法，我后来发现也不用上面判断过程中要分左右，get方法没有的话会返回undefined，也就是false，不能pop
//需要push的情况（遇到左半边，或者右半边不是正好和栈的最后一个匹配
var isValid = function(s) {
    var res = [];
    var kvArray = [[")","("],["]","["],["}","{"]];
    var kvMap = new Map(kvArray);
    for (var i=0;i<s.length;i++) {
        if (res.length > 0 && kvMap.get(s[i]) == res[res.length-1]) {
            res.pop();
        }else {
            res.push(s[i]);
        }
    }
    return (res.length == 0);
};
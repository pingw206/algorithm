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

//优化写法， 首先判断条件可以优化到两条，然后是把符号都先存到map里面，再使用；注意存的是反的，为了调key
var isValid = function(s) {
    let kvArray = [[')', '('], ['}', '{'], [']', '[']];
    var matchMap = new Map(kvArray);
    var newStack = new Array();
    
    for (var i = 0; i < s.length; i++) {
        if (!matchMap.has(s[i])) {    //不是key,也就是说不是右半边，即是左半边，push进去
            newStack.push(s[i]);
        } else {
            if (newStack.length == 0 || newStack[newStack.length - 1] != matchMap.get(s[i])) {
                return false;   //是右半边时，如果左边没有符号来匹配，或者左边的符号和它不匹配（先考虑length == 0的情况，然后进入length-1也就有意义了）
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
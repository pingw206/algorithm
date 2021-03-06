/** 2021-3-15 初看有点懵，其实还是dfs的组合类题，把组合都列出来后，专门写一个判断回文串的函数就行
 * 不过这个树和之前的树略有不同，也是把各种情况都列出来
 *  str.substring(indexStart[, indexEnd]) 提取从 indexStart 到 indexEnd（不包括）之间的字符
 */

 var partition = function(s) {
    var result = [];
    var path = [];
    dfs(s, 0, result, path);
    return result;
  };
  var dfs = function(s, start, paths, path) {
    if (start >= s.length) {
        return;
    }
    for (var i = start; i < s.length; i++) {
        var subStr = s.substring(start, i+1); //str依次变多一个
        //console.log(start+subStr);
        if (!isPalindrome(subStr)) { //剪枝
            continue;
        }
        path.push(subStr);
        if (i == s.length-1) {  //走完了长度
            paths.push(path.map((x)=>x));
        }
        dfs(s, i+1, paths, path); //下一个数
        path.pop();
    }
  }
  // 用left, right 比用s[i] !== s[n-i-1] 要清楚一点
  var isPalindrome = function(s) {
    if (s.length == 0) {
        return true;
    }
    var left = 0, right = s.length-1;
    while (left < right) {  
        if (s[left] != s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
  }
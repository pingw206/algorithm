
/** 2021-3-15 | 5-25 
 * 这题的关键点就是结果不能重复，可以存在[1,1,6]， 但是不能存在两个[1,2,5]
 * 得先排个序,再看这两个结果的区别如何写
 * 
 */
 var combinationSum2 = function(candidates, target) {
    candidates.sort(function(a, b) {
        return a-b;  //排序
    });
    var result = [];
    var path = [];
    genComb(candidates, 0, path, result, target);
    return result;
  };
  var genComb = function(candidates, start, path, result, target) {
    if (target <= 0) {
        return;  //跳出栈的条件
    }
    for (var i = start; i < candidates.length; i++) {    // 注意这里i开始的条件
              // 限制i>start， 这样i==start的到了下一层相同的数字才能写入，[1] =>[1,1]， 也就是能写入[1,1,6]
        //限制candidates[i] == candidates[i-1], 这样[1,1,2,5] 不写入两次1 =>一个[1,2,5]
        if (i > start && candidates[i] == candidates[i-1]) {
            continue; //横着相同数字只过一次，continue就是不往下走了，走for循环里下一个i；
        }
        path.push(candidates[i]);
        if (target == candidates[i]) {  
            result.push(path.map((x)=>x));
        }
        genComb(candidates, i+1, path, result, target-candidates[i]);
        path.pop();
    }
  }
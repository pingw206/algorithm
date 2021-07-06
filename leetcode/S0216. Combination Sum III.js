//2021-3-15 ｜ 5-25 
//之前题的组合应用，第二次还是想到的是我的方法，不过一些if判断条件没写对

//方法一 磊简单一些写法
var combinationSum3 = function(k, n) {
  var result = [];
  var path = [];
  dfs(1, k, path, result, n);
  return result;
};

var dfs = function(start, k, path, paths, n) {
  if (path.length > k) {
      return;
  }
  for (var i = start; i <= Math.min(n,9); i++) {
      path.push(i);
      if (i == n && path.length == k) {
          paths.push(path.map((x)=>x));
      }
      dfs(i+1, k, path, paths, n-i);
      path.pop();
  }
}

//方法二 我自己的写法，好理解一些
var combinationSum3 = function(k, n) {
  var list = [1,2,3,4,5,6,7,8,9];
  var path = [];
  var result = [];
  genComb(list, 0, path, result,k,n); //n是target
  return result;
};

var genComb = function(list, start, path, result, k, n) {
  if (k==0 || n==0) {  //跳出栈
      return;
  }
  for (var i = start; i<=list.length -k; i++) {
      path.push(list[i]);
      if (list[i] == n && k==1){  //最后一层且和满足要求
          result.push(path.map((x)=>x));
      }
      genComb(list, i+1,path, result, k-1, n-list[i]); //i+1 意思是不能重复用数字，k-1层数变化，n-list[i]是target在变小
      path.pop();
  }
}
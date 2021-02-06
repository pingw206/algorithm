//2021-2-6 可以用118题方法，最后返回dpTable[rowIndex]; 但是本题要求空间复杂度是O(k),所以不要再用矩阵放结果
//用不断更新的数组放结果
var getRow = function(rowIndex) {
  var dpTable = new Array(rowIndex+1);
  for (var i=0; i < rowIndex+1; i++) {
      dpTable[i] = 1;
      for (var j=i-1; j>0;j--) {
       dpTable[j] = dpTable[j] + dpTable[j-1];
      }
  } 
  return dpTable;
};

//方法二，未看
// two vectors: swap
vector<int> getRow1(int rowIndex) {        
  vector<int> result {1};
  for (int i = 1; i <= rowIndex; ++i) {
      vector<int> temp_result(i+1, 1);
      for (int j = 1; j+1 < temp_result.size(); ++j) {
          temp_result[j] = result[j-1] + result[j];
      }
      result.swap(temp_result);
  }
  return result;
}
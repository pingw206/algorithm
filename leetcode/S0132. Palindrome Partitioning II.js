//2021-3-24 真的蛮复杂的这道题。。

var minCut = function(s) {
  var palindromeTable = new Array(s.length);
  for (var i = 0; i < palindromeTable.length; i++) {
      palindromeTable[i] = new Array(s.length);
  }
  genPalindromeTable(s, palindromeTable);
  
  var dpTable = new Array(s.length);
  for (var i = 0; i < dpTable.length; i++) {
      dpTable[i] = i+1;
  }
  for (var n = 0; n < s.length; n++) {
      //console.log("n: " + n);
      if (palindromeTable[0][n]) {
          dpTable[n] = 0;
          continue;
      }
      for (var j = n; j >= 1; j--) {
          if (palindromeTable[j][n]) {
              dpTable[n] = Math.min(dpTable[j-1]+1, dpTable[n]);   
          }
      }
  }
  return dpTable[dpTable.length-1];
};

var genPalindromeTable = function(s, palindromeTable) {
  for (var i = 0; i < s.length; i++) {
      palindromeTable[i][i] = 1;
  }
  for (var step = 1; step < s.length; step++) {
      for (var i = 0; i + step < s.length; i++) {
          var j = i + step;
          if (step == 1) {
              if (s[i] == s[j]) {
                  palindromeTable[i][j] = 1;
              } else {
                  palindromeTable[i][j] = 0;
              }
          } else {
              if (s[i] == s[j]) {
                  palindromeTable[i][j] = palindromeTable[i+1][j-1];
              } else {
                  palindromeTable[i][j] = 0;
              }
          }
      }
  }
}
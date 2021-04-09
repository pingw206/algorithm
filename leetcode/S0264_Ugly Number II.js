/** 2021-2-24 ｜ 2021-4-8
* 关键是想到从2，3，5的倍数中依次挑选最小的数，如何标记用过的数，然后继续乘---注意这里不是说2，3，5的任意倍数，要乘前面的丑数
ugly number 是只由2，3，5 的乘积组成的数 1,2,3,4,5,6,8,9,10,12...
*解法思路：f(n)=min{f(i)*2,f(j)*3,f(k)*5},f(n)一定是前面某数*2或某某数*3或某某某数*5.
可以记录下前面某个使用到的数i/j/k，用完了就可以加1了，然后跟没用到的数做比较
例如，f(0)第一个数是1，第二个数是由1组成的 f(1) =min{1*2,1*3,1*5} = 2, 然后留下没被使用的数{1*3,1*5}, 因为2的系数被使用过了，所以2的系数加1，
所以f(2)=min{2*2,1*3,1*5} = 1*3 =3, 使用的数是1*3，所以3的系数往下加，为2*3， 
所以f(3)=min{2*2,2*3,1*5} =4, 使用的是2*2， 所以2往下加，3*2
所以f(4)=min{3*2,2*3,1*5} = 5,使用的是1*5， 所以1往下加 ，2*5
所以f(5)=min{3*2,2*3,,2*5} = 6,使用的是两个 3*2和2*3，所以分别往下加 4*2和3*3
所以f(5)=min{4*2,3*3,2*5} = 8
....
另外一点，注意第n个数，建数组长度为n就可以，因为数组从0开始，返回的第n个数是s【n-1】
*/

var nthUglyNumber = function(n) {
  // initialization of DP table
  var dpTable = new Array(n);
  dpTable[0] = 1;
  
  // DP progress: f(n) = min{f(i)*2, f(j)*3, f(k)*5}, how to find f(i), f(j), f(k)
  // the first ugly number is 1, hence the next must be min(1*2,1*3,1*5), which is equals to 2
  // 
  // ugly number: 1,   2,      3,      4,     5,     6,    8,
  //                 [1*2],   2*2,   [2*2],  2*3,  [3*2], [4*2]
  //                  1*3,   [1*3],   2*3,   2*3,  [2*3],  3*3
  //                  1*5,    1*5,    1*5,  [1*5],  2*5,   2*5
  var indexOf2 = 0, indexOf3 = 0, indexOf5 = 0; // i, j, k
  for (var i = 1; i < n; i++) {
      var curMin = Math.min(dpTable[indexOf2]*2, dpTable[indexOf3]*3, dpTable[indexOf5]*5);
      if (curMin == dpTable[indexOf2]*2) { indexOf2++; }
      if (curMin == dpTable[indexOf3]*3) { indexOf3++; }
      if (curMin == dpTable[indexOf5]*5) { indexOf5++; }
      dpTable[i] = curMin;
  }
  return dpTable[dpTable.length-1]; // dpTable[n-1]
};
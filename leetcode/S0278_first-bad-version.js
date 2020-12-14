//第一想到的是从第一个开始调用API迭代，提交后超时；优化有序数组的方法：二分查找，仔细思考，的确是变形。

// API调用的这种刚开始可能看懵了，但是不需要懂所有，知道输入，输出是什么，然后在哪写就行

var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        var left = 1;
        var right = n;
        while (left <= right) {
            var mid = Math.floor((left+right)/2);
            if (!isBadVersion(mid)) {
                left = mid + 1;
            } else if (isBadVersion(mid)) {
                right = mid - 1; 
            }
        }
        return left;
    }
      
};
// 方法二，开区间, 初始值 right 是n 还是n+1都行，因为默认不会没有bad， 所以走不出去数组到n+1
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
     let left = 1, right = n;
     
     while (left < right) {
         let mid = Math.floor((left+right)/2);
         if (!isBadVersion(mid)) {
             left = mid + 1;
         } else if (isBadVersion(mid)) {
             right = mid;
         } 
     }
     return left;
         
     }
                  
    };
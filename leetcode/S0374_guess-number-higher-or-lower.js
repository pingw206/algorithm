var guessNumber = function(n) {
    var left = 1;
    var right = n;
    while (left <= right) {
        let mid = Math.floor((left+right)/2);
        if (guess(mid) == 0){
            return mid;
        } else if (guess(mid) == 1) {  //注意区分什么时候是大了小了， 我拿大比你猜的大，你得把left 往右挪
            left = mid +1;
        } else if (guess(mid) == -1) {
            right = mid-1;
        }
    }
};
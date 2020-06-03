public class Solution extends GuessGame {
    public int guessNumber(int n) {
        int left = 1;
        int right = n;
        while (left <= right) {
            int mid = left+(right-left)/2;
            if (guess(mid) == -1) {
                right = mid - 1;
            } else if (guess(mid) == 1) {
                left = mid +1;
            } else {
                return mid;
            }
        }
        return -1;
    }
}
// 用开区间做的话，首先，范围不是【1，n),要包括n的，就应该是【1，n+1), 
//其次，用java做还应该考虑溢出的问题，所以首先mid不能写成（left+right)/2，然后是INT32位，要考虑2*31-1=2147483647最大数时的情况
public class Solution extends GuessGame {
    public int guessNumber(int n) {
        
        int INT_MAX = 2147483647;
        if (n == INT_MAX) {
            if (guess(n)==0) {      //这是最大的时候
                return n;
            } else {
                n -= 1;  //其他guess的时候，把n-1,就能避免right溢出的问题，
            }
        }

        int left = 1, right = n+1;
        while (left < right) {
            int pick = left + (right-left)/2;
            if (guess(pick) == 1) {
                left = pick +1;
            } else if (guess(pick) == -1) {
                right = pick;
            } else if (guess(pick) == 0){             
                return pick;
            }              
        }
        return -1;
    }
    
}
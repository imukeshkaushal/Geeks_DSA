/**
 Given a number N.Find if the digit sum(or sum of digits) of N is a Palindrome number or not.
Note:A Palindrome number is a number which stays the same when reversed.Example- 121,131,7 etc.

Input:
N=56
Output:
1
Explanation:
The digit sum of 56 is 5+6=11.
Since, 11 is a palindrome number.Thus,
answer is 1.

Your Task:
You don't need to read input or print anything.Your Task is to complete the function isDigitSumPalindrome() which takes a number N as input parameter and returns 1 if the Digit sum of N is a palindrome.Otherwise it returns 0.
 */


class Solution {
    isDigitSumPalindrome(N){
      let str = N.toString();
      let val = str.split("").map(Number);
        let sum = 0;
        for(let i = 0; i < val.length; i++){
            sum += val[i];
        }
        let res = sum.toString();
        let rev = "";
        for(let i = res.length-1; i >= 0; i--){
            rev += res[i];
        }
        if(rev == res){
            return 1;
        }
        else{
            return 0;
        }
    }
}
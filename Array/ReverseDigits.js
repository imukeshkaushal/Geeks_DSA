/*
Problem : Reverse the Digits

Input : 200 output : 2
*/

class Solution{
    reverse_digit(n){
        let rev_num = 0;
        while(n > 0){
            rev_num = rev_num * 10 + n%10;
            n=Math.floor(n/10);
        }
        return rev_num;
    }
}
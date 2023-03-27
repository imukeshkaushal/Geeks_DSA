/*
Missing number in array

Given an array of size N-1 such that it only contains distinct integers in the range of 1 to N. Find the missing element.


Input:
N = 5
A[] = {1,2,3,5}
Output: 4


*/

class Solution{
    MissingNumber(array,n){
        let res = 0;
        for(let i = 1; i <= n; i++){
            res ^= i;
        }
        for(let i = 0; i < n-1; i++){
            res ^= array[i];
        }
        return res;
    }
}
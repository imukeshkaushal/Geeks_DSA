/**
 
Problem Statement : Count the Pair Whoose Sum Equal to K.

Given an array of N integers, and an integer K, find the number of pairs of elements in the 
array whose sum is equal to K.

Input:
N = 4, K = 6
arr[] = {1, 5, 7, 1}
Output: 2
Explanation: 
arr[0] + arr[1] = 1 + 5 = 6 
and arr[1] + arr[3] = 5 + 1 = 6.

 */

// Brute Force Approach - TC - O(n^2)

class Solution {
    getPairsCount(arr,n,k){
        let count = 0;
       for(let i = 0; i < n-1; i++){
           for(let j = i+1; j < n; j++){
               if(arr[i]+arr[j] == k){
                   count++;
                   
               }
           }
       }
       return count;
    }
}

// Two Pointer Technique 

class Solution {
    getPairsCount(arr,n,k){
        let count = 0;
        let left = 0;
        let right = n-1;
        while(left < right){
            let sum = arr[left] + arr[right];
            if(sum > k){
                right--;
            }
            else if(sum < k){
                left++;
            }
            else{
                count++;
            }
        }
        return count;
    }
}

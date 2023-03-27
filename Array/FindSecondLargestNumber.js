/*
Problem : Find Second Largest Number

Given an array Arr of size N, print second largest distinct element from an array.

Input: 
N = 6

Arr[] = {12, 35, 1, 10, 34, 1}
Output: 34

Explanation: The largest element of the 
array is 35 and the second largest element
is 34.


*/

class Solution{
    print2largest(arr,n){
        let obj = {};
        for(let i = 0; i < n; i++){
            if(obj[arr[i]] == undefined){
                obj[arr[i]] = 1;
            }
            else{
                obj[arr[i]]++;
            }
        }
        // console.log(obj);
        let res = [];
        for(let key in obj){
            res.push(key);
        }
        
        res.sort((a,b) => a-b);
        if(res.length < 2){
            return -1
        }
         return (res[res.length-2])
        
    }
}
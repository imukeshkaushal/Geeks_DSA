/**
 Remove duplicate elements from sorted Array

 Your Task:  
You don't need to read input or print anything. Complete the function remove_duplicate() which takes the array A[] and its size N as input parameters and modifies it in place to delete all the duplicates. The function must return an integer X denoting the new modified size of the array. 


Input:
N = 5
Array = {2, 2, 2, 2, 2}
Output: {2}
Explanation: After removing all the duplicates 
only one instance of 2 will remain.


 * 
 */



class Solution{
    remove_duplicate(arr,n){
        let i = 0;
        let j = 0;
        while (i < n) {
            if (arr[i] != arr[i + 1]) {
                arr[j] = arr[i];
                j++;
            }
            i++;
        }
        return j;
    }
}


class Solution{
    remove_duplicate(arr,n){
      var i=0
     for( let j=0;j<n;j++){
         if(arr[j]!=arr[i]){
            i=i+1
            arr[i]=arr[j]
             
         }
        
     }
         return i+1
    }
}


class Solution{
    remove_duplicate(arr,n){
       let j = 0;

        for (let i = 0; i < n - 1; i++) {
    
            if (arr[i] !== arr[i + 1]) {
    
                arr[j++] = arr[i];
            }
        }
    
        arr[j++] = arr[n - 1];
    
        return j;
    }
}
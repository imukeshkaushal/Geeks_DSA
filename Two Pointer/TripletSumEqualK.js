/**
 Find a triplet that sum to a given value

 Given an array and a value, find if there is a triplet in array 
 whose sum is equal to the given value. If there is such a triplet present in array, then print the triplet and return true. Else return false.
 
 Input: array = {12, 3, 4, 1, 6, 9}, sum = 24; 
Output: 12, 3, 9 

Explanation: There is a triplet (12, 3 and 9) present 
in the array whose sum is 24.

Input: array = {1, 2, 3, 4, 5}, sum = 9 
Output: 5, 3, 1 

Explanation: There is a triplet (5, 3 and 1) present 
in the array whose sum is 9.

 */

// Bruite Force (N3)
function find(arr, n, x) {
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        if (arr[i] + arr[j] + arr[k] === x) {
          return true;
        }
      }
    }
  }
  return false;
}

// Two Pointer Technique (0(n2))

class Solution {
  //Function to find if there exists a triplet in the
  //array A[] which sums up to X.
  find3Numbers(A, n, X) {
    let count = 0;
    for (let i = 0; i < n - 2; i++) {
      let left = i + 1;
      let right = n - 1;
      while (left < right) {
        let sum = A[i] + A[left] + A[right];
        if (sum > X) {
          right--;
        } else if (sum < X) {
          left++;
        } else {
          count++;
        }
      }
    }
    return count;
  }
}

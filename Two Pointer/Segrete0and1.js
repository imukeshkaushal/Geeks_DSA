/**
 Problem : Segregate 0s and 1s

 Given an array of length N consisting of only 0s and 1s in random order. 
 Modify the array to segregate 0s on left side and 1s on the right side of the array.

 Input:
N = 5
arr[] = {0, 0, 1, 1, 0}
Output: 0 0 0 1 1

 */

// Two Pointer Technique

class Solution {
  segregate0and1(arr, n) {
    let left = 0;
    let right = n - 1;
    while (left < right) {
      while (arr[left] === 0 && left < right) {
        left++;
      }
      while (arr[right] === 1 && left < right) {
        right--;
      }
      if (left < right) {
        arr[left] = 0;
        arr[right] = 1;
        left++;
        right--;
      }
    }
    return arr;
  }
}

/*

Problem : Search an Element in an array

If Element Present in Array, Print index, elese print -1;

Arr = [1,2,3,4,5];
N = 5, X = 3

Output = 2

*/



class Solution {
  search(arr, N, X) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == X) {
        return i;
      }
    }
    return -1;
  }
}

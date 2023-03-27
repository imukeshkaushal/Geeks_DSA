/*
Problem : Find Min and Max in Array

Input:
N = 6

Arr = {3, 2, 1, 56, 10000, 167}

Output:
min = 1, max =  10000

*/

class Solution {
  getMinMax(arr, n) {
    let max = arr[0];
    let min = arr[0];
    let newarr = [];
    for (let i = 0; i < n; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    newarr.push(min);
    newarr.push(max);
    return newarr;
  }
}

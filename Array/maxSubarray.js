class Solution 
{
   
	max_of_subarrays(arr, n, k){
	   let maxArr = [];
  
        let max = 0;
        for (let i = 0; i < k; i++) {
          if (arr[i] > max) {
            max = arr[i];
          }
        }
        maxArr.push(max);

        for (let i = 1; i <= n - k; i++) {
          if (arr[i - 1] === max) {
            max = 0;
            for (let j = i; j < i + k; j++) {
              if (arr[j] > max) {
                max = arr[j];
              }
            }
          } else {
                if (arr[i + k - 1] > max) {
                  max = arr[i + k - 1];
                }
          }
          maxArr.push(max);
        }
  
        return maxArr;
        
    }
}
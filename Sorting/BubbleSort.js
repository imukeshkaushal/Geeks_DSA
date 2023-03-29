class Solution
{
   //Function to sort the array using bubble sort algorithm.
   bubbleSort(arr,n){
        for(let i = 0; i < n; i++){
            for(let j = 0; j < n-i-1; j++){
                if(arr[j] > arr[j+1]){
                    swap(arr,j,j+1);
                }
            }
        }
        return arr;
   }
   
    
}

function swap(arr,i,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
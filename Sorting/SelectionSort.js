class Solution
{
  select(arr,i){
     // code here such that selectionSort() sorts arr[]
  }

  //Function to sort the array using selection sort algorithm.
  selectionSort(arr,n){
    for(let i = 0; i < n; i++){
        let index = i;
        for(let j = i+1; j < n; j++){
            if(arr[j] < arr[index]){
                index = j;
            }
        }
        if(index != i){
            swap(arr,i,index);
        }
    }
    return arr;
  }
    
}

function swap(arr,left,right){
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    
}
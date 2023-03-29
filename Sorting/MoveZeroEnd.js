class Solution {
    pushZerosToEnd(arr,n){
        let j = 0;
        for(let i = 0; i < n; i++){
            if(arr[i] != 0){
                swap(arr,j,i);
                j++;
            }
        }
        return arr;
    }
    
}

function swap(arr,j,i){
    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
}
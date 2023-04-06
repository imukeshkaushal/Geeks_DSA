let n = 4;
let arr1 = [1,5,7,9];
let arr2 = [2,4,6,8];

function mergeSort(n,arr1,arr2){
    let i = 0; let j = 0; let arr = [];
    while(i< n && j < n){
        if(arr1[i] < arr2[j]){
            arr.push(arr1[i]);
            i++;
        }
        else {
            arr.push(arr2[j]);
            j++;
        }
    }
    while(i<n){
        arr.push(arr1[i]);
        i++;
    }
    while(j < n){
        arr.push(arr2[j]);
        j++;
    }
    console.log(arr.join(" "));
}

mergeSort(n,arr1,arr2);
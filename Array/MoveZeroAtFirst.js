let n = 5;

let arr = [0,1,2,3,0];

function modify(n,arr){
    let bag1 = "";
    let bag2 = "";
    for(let i = 0; i < n; i++){
        if(arr[i] === 0){
            bag1 += arr[i]+" ";
        }
        else{
            bag2 += arr[i] + " ";
        }
    }
    console.log(bag1+bag2)
}
modify(n,arr);
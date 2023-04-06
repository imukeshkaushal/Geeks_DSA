let num = 4294967295;
let count = 0;
let max = 0;
function binary(num){
    let bin = num.toString(2);
    let con = "";
    for(let i = 0; i < bin.length; i++){
        if(bin[i] == 0){
            count = 0
        }
        else{
            count++;
            max = Math.max(max,count);
        }
    }
    console.log(max);
}
binary(13);
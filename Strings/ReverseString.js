/*

let str = "Mukesh"

Output = hsekuM

*/

function ReverseString(str){
    let bag = "";
    for(let i = str.length -1; i >= 0; i--){
        bag += str[i];
    }
    console.log(bag);
}
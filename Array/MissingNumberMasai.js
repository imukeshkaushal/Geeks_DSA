/**
 
Missing Integer

Input = 4 5 1 3 

Output = 2
 */


let arr = input.trim().split(" ").map(Number);
let n = arr.length + 1;
let sum = (n*(n+1))/2
let result = arr.reduce((a,b) => a+b,0);
let output = sum - result;
console.log(output);
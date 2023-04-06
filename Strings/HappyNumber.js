/**
 *
TC - 2
19
2

 */

function runProgram(input) {
    input = input.trim().split("\n");
   let tc = +input[0];
   let line = 1;
   for(let i = 0; i < tc; i++){
       let n = +input[line];
       line++;
       
   console.log( isHappy(n) ? "Yes" : "No");
    
   }
    
  }
  
  function isHappy(n){
      let stack = [];
  
    
    while (n !== 1 && !stack.includes(n)) {
    
      stack.push(n);
  
      
      let sum = 0;
      while (n > 0) {
        let digit = n % 10;
        sum += digit * digit;
        n = Math.floor(n / 10);
      }
      n = sum;
    }
  
    return n === 1;
  }
  
  if (process.env.USERNAME === "user") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
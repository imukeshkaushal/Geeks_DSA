


function runProgram(input) {
  input = input.trim().split("\n");
    let tc = +input[0];
    let line = 1;
    for(let i = 0; i < tc; i++){
        let digits = input[line];
        line++;
        
        let output = Number(digits);
        console.log(output.join(" "));
    }
  
}

function Number(digit){
    const letters = { '2': ['a','b','c'], '3': ['d','e','f'], '4': ['g','h','i'], '5': ['j','k','l'],'6': ['m','n','o'], '7': ['p','q','r','s'], '8': ['t','u','v'], '9': ['w','x','y','z'] };
    
    return digits.split('').reduce((prev, d) => {
        if (prev.length === 0) {
            return letters[d];
        }
        
        const res = [];
        
        for (let str1 of prev) {
            for (let str2 of letters[d]) {
                res.push(str1+str2);
            }
        }

        return res;
    }, []);
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
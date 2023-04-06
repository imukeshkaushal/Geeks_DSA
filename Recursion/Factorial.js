let N = 5;

function runProgram(input){
    let n = +input[0];
    let output = factorial(n);
    console.log(output)
    
    }
    function factorial(n){
        if(n==0 || n == 1){
            return 1;
        }
        return n*factorial(n-1);
    }
    
     if(process.env.USER===""){
         runProgram('');
     }else{
         process.stdin.resume();
         process.stdin.setEncoding("ascii");
         let read="";
         process.stdin.on("data",function(input){
             read+=input;
         });
         process.stdin.on("end",function(){
             read=read.replace(/\n$/,"");
             read=read.replace(/\n$/,'');
             runProgram(read);
         });
         process.on('SIGINT',function(){
             read=read.replace(/\n$/,"");
             runProgramm(read);
             process.et(0);
         });
     }
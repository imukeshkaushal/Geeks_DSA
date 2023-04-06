function dayOfTheWeek(day, N) {
    /**
Input : 
day : Wednesday
N - 8

Output : Thursday
     */
    
    let names = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    let obj = {};
    for(let i = 0; i < names.length; i++) {
        obj[names[i]] = i;
    }
    let value = 0;
    for(key in obj){
        if(key== day){
            value = obj[key] + N;
        }
    }
    value = value % 7;
    
    for(key in obj){
        if(obj[key] == value){
            console.log(key);
        }
    }
    
  }
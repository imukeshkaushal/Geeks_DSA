function masaiTraversalAndQueries(N, M, q, arr){
    if(q==1){
        let bag = "";
        for(let i = 0; i < N; i++) {
        if(i%2===0) {
            for(let j = 0; j < M; j++){
                bag = bag + arr[i][j]+ " ";
            }
             
        }
        else{
            for(let j = M-1; j >= 0; j--){
                bag = bag + arr[i][j]+" ";
                
            }
        }
    }
    console.log(bag);
}
    
    
    
    if(q==2){
        let bag2 = "";
    for(let i = 0; i < N; i++) {
        if(i%2===0) {
             for(let j = M-1; j >= 0; j--){
                bag2 = bag2 + arr[i][j]+" ";
                
            }
        }
        else{
            for(let j = 0; j < M; j++){
                bag2 = bag2 + arr[i][j]+ " ";
            }
        }
    }
    console.log(bag2);
    }
    
  
}
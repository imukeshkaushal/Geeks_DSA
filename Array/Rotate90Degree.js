/**
4

1 2 3 4
5 6 7 8
1 2 3 4
5 6 7 8


Output = 

4 8 4 8 
3 7 3 7 
2 6 2 6 
1 5 1 5 

 */



function rotateBy90(R, matrix){
    for(let i = R-1; i >= 0; i--) {
        let bag = "";
        for(let j = 0; j < R; j++) {
            bag = bag + matrix[j][i]+" ";
        }
        console.log(bag);
    }
  
}
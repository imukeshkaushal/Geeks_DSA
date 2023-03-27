/*
Input 

4
1 2 3 4
5 6 7 8
1 2 3 4
5 6 7 8


Output 

5 1 5 1 
6 2 6 2 
7 3 7 3 
8 4 8 4 

*/


function rotateBy90(R, matrix){
    for (j = 0; j < R; j++) {
        let bag = ""
        for (i = R - 1; i >= 0; i--){
            bag += matrix[i][j] + " "
        }
        console.log(bag);
    }
  
}
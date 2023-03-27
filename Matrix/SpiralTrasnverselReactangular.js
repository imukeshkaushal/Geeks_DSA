/**
 
2
3 4
1 2 3 4
5 6 7 8
9 10 11 12
4 3
1 2 3
4 5 6
7 8 9
10 11 12

Output : 

1 5 9 10 11 12 8 4 3 2 6 7 
1 4 7 10 11 12 9 6 3 2 5 8 

 */

function spiralTraversal(N, M, arr){
    let left = 0; 
    let right = M-1;
    let top = 0;
    let bottom = N-1;
    let count = 0;
     let bag = "";
    
   while(count < N*M) {
         for(let i = top; i <= bottom && count < N*M; i++) {
             bag = bag + arr[i][left] + " ";
             count++;
         }
         left++;
         
         for(let j = left; j <= right && count <N*M; j++) {
             bag = bag + arr[bottom][j] + " ";
             count++;
         }
         bottom--;
         
         for(let k = bottom; k >= top && count < N*M; k--) {
             bag = bag + arr[k][right] + " ";
             count++;
         }
         right--;
         
         for(let m = right; m >= left && count < N*M; m--) {
             bag = bag + arr[top][m]+ " ";
             count++;
         }
         top++;
     }
    console.log(bag);
 }
 
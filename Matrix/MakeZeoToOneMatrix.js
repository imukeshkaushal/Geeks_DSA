let n = 3;
let m = 3;
let mat = [[1,0,0],[0,1,0],[0,0,1]];
function flipMatrix(n,m,mat){
    let row = mat.length; 
    let col = mat[0].length;
    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            mat[i][j] = mat[i][j] === 1 ? 0 : 1;
        }
    }
    console.log(mat)
}

flipMatrix(n,m,mat)
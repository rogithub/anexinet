/**
 * Finds row and col indexes for a matrix containing 0 as element
 * @method findZero
 * @param {number[][]} matrix input matrix
 * @return {number[][]} the position.
 */
let findZero = (matrix) => {
    let rowCol = [-1, -1];
    for (let i = 0; i < matrix.length; i++) {
        let arr = matrix[i];
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === 0) {
                rowCol[0] = i;
                rowCol[1] = j;  
                return rowCol;
            }
        }
    }
    return rowCol;
};

/**
 * Makes a zero cross in a matrix containing zero as element in a row.
 * @method setZeroCross
 * @param {number[][]} inputMatrix input matrix
 * @return {rowCol[]} the 0 position.
 */
let setZeroCross = (inputMatrix, rowCol) => {
    let row = rowCol[0];
    let col = rowCol[1];
    let matrix = [...inputMatrix]; // make it imutable

    if (col === -1 && row === -1) return matrix;
    for (let i = 0; i < matrix.length; i++) {
        let arr = matrix[i];
        for (let j = 0; j < arr.length; j++) {
            if (j === col || i === row) {                 
                arr[j] = 0;
            }
        }
    }
    return matrix;
};

/**
 * Prints a matriz
 * @method printMatrix
 * @param {number[][]} matrix input matrix
 */
let printMatrix = (matrix) => { 
    for (let row of matrix) {
        console.log(row);
    }
};

let matrix = [
    [1, 2, 3],
    [4, 0, 6],
    [7, 8, 9]
];


console.log("Initial matrix");
printMatrix(matrix);
let position = findZero(matrix);
let newMatrix = setZeroCross(matrix, position);

console.log("New matrix");
printMatrix(newMatrix);
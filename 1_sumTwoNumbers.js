/**
 * Adds two numbers without using 
 * any arithmetic operators.
 * @method add
 * @param {number} a first number
 * @param {number} b second number
 * @return {number} addition
 */
let add = (a, b) => {
    // checks if bits needs to be carry left;
    let carryLeft = (a, b) => (a & b) << 1;
    // makes bitwise sum;
    let bitwiseSum = (a, b) => a ^ b;

    // Example:
    // binary           decimal
    // carry left:
    //   1 1 1               1
    //-----------------------------
    //   0 1 0 1               5
    // + 0 1 1 1         +     7
    //  ---------         -------
    //   1 1 0 0             1 2  


    return (b == 0) ?  
    a: add(bitwiseSum(a, b), carryLeft(a, b));  
};

console.assert(add(1, 2) === 3, ' 1 + 2 === 3');
console.assert(add(8, 100) === 108, ' 8 + 100 === 108');
console.assert(add(-1, 0) === -1, ' -1 + 0 === -1');

console.log('Test Completed');

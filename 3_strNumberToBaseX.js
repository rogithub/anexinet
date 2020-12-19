/**
 * Takes a string containing a number in base X along with an integer of the base X.
 * @method converToDecimal
 * @param {string} strNumber first number
 * @param {number} base second number
 * @return {number} Integer value of that string/base pair.
 */
let converToDecimal = (strNumber, base) => {   
    const parsed = Number.parseInt(strNumber, base);
    return Number.isNaN(parsed) ? 0 : parsed;
};

console.assert(converToDecimal('10', 10) === 10, '"10" base 10 === 10');
console.assert(converToDecimal('10', 1) === 0, '"10" base 1 === 0');
console.assert(converToDecimal('10', 2) === 2, '"10" base 1 === 2');
console.assert(converToDecimal('A', 16) === 10, '"A" base 16 === 10');
console.assert(converToDecimal('F', 16) === 15, '"F" base 16 === 15');

console.log('Test Completed');

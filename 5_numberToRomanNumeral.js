/**
 * Converts the given number, the Number can be between 1 and 3999,
 * into a Roman Numeral.
 * @method toRomanNumeral
 * @param {number} number number
 * @return {string} Roman Numeral representation of the imput number.
 */
const toRomanNumeral = (number) => {
    const decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const romans   = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

    //The Number can be between 1 and 3999
    if (number < 1 || number > 3999) return "";

    for (let i = 0; i < decimals.length; i++) {
        if (number < decimals[i]) continue;        
        return romans[i] + toRomanNumeral(number - decimals[i]); 
    }
}

console.assert(toRomanNumeral(9) === "IX", "9 -> IX");
console.assert(toRomanNumeral(3999) === "MMMCMXCIX", "3999 -> MMMCMXCIX");
console.assert(toRomanNumeral(-1) === "", '-1 -> ""');
console.assert(toRomanNumeral(4000) === "", '4000 -> ""');

console.log('Test Completed');


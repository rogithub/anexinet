/**
 * Receives a string, and return all the possible permutations
 * Max string length can be 50 characters.
 * @method getAllPermutations
 * @param {string} text The given text
 * @return {string[]} All possible permutations.
 */
let getAllPermutations = (text) => {   
    let results = [];

    //Max string length can be 50 characters
    if (text.length > 50) {
        text = text.substr(0, 49);
        console.log(text);
    }

    if (text.length === 1) {
        results.push(text);
        return results;
    }

    for (let i = 0; i < text.length; i++) {
        let firstChar = text[i];
        let charsLeft = text.substring(0, i) + text.substring(i + 1);
        let innerPermutations = getAllPermutations(charsLeft);
        for (let j = 0; j < innerPermutations.length; j++) {
            results.push(firstChar + innerPermutations[j]);
        }
    }
    return results;
};

// test failed performance improvement needed
// might be possible to avoid recursion
//getAllPermutations("1234567890123456789012345678901234567890123456789*")

let expected = "abb,abb,bab,bba,bab,bba";

console.assert(getAllPermutations('abb').toString() === expected, `expected: ${expected}`);

console.log('Test Completed');

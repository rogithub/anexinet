/**
 * Calculates the intersection of two strings
 * @method intersectionToCharArray
 * @param {string} a first number
 * @param {string} b second number
 * @return {string[]} Array of the characters that are repeated in both strings.
 */
let intersectionToCharArray = (a, b) => {
    
    // Fail safe, fail fast
    if (!a && !b) return [];
 
    // Use set since it cannot have duplicates.
    let inA = new Set();
    let inB = new Set(); 

    // Internal function to add chars to the set. 
    // Avoids code duplication.
    let internalAdd = (text, set) => {
        // Fail safe, fail fast
        if (typeof text !== "string")
            return; 

        for (let item of text) 
            set.add(item);
    };

    internalAdd(a, inA);
    internalAdd(b, inB);

    let intersection = new Set([...inA].filter(x => inB.has(x)));

    return [...intersection]; // convert back to array;
};

let expected = 'a,n,i,t, ,l';
console.assert(
    intersectionToCharArray("anita lava", "la tina").toString() 
    === expected, `expexted: ${expected}`);

console.log('Test Completed');

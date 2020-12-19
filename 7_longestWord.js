/**
 * Receives a sentence, and return the longest word(s).
 * @method getLongestWords
 * @param {string} sentence Sentence
 * @return {string[]} Longest words in sentence.
 */
let getLongestWords = (sentence) => {   
    const words = sentence.split(' ');
    let longest = [];
    let tryToPush = (word) => {
        if (word.trim().length === 0 || longest.indexOf(word) !== -1) 
            return;

        longest.push(word);
    };
    let tryToAdd = (word) => {
        if (longest.length === 0){
            tryToPush(word);
            return;
        } 
        if (longest[0].length < word.length) {
            longest = []; // clean array
            tryToPush(word);
        }
        if (longest[0].length === word.length) {
            tryToPush(word);
        }
    };
    for (let w of words)
    {
        tryToAdd(w);
    }

    return longest;
};

console.assert(getLongestWords('uno dos tres cuantro cinco seis').toString() === 
"cuantro", 'expected cuantro');

console.assert(getLongestWords(' 10101010 uno dos tres 10101010 cuantro cinco seis 11111111').toString() === 
"10101010,11111111", 'expected: 10101010,11111111');

console.assert(getLongestWords('').toString() === 
"", 'expected: "" ');

console.log('Test Completed');

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    const merged = [];
    const maxLength = Math.max(word1.length, word2.length);

    for (let i = 0; i < maxLength; i++) {
        if (i < word1.length) {
            merged.push(word1[i]);
        }
        if (i < word2.length) {
            merged.push(word2[i]);
        }
    }

    return merged.join('');
 
};
// explanation: 
// i make a new Array
// i get the maximum length, thus the greater array length
// i make a condition that if it's less that the lenght of max
// continue adding to the String
// then at each index , give me one from the fisrt and one from second
// until the max index is done
// then join them all . 
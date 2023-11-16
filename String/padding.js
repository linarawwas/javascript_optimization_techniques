
// ### Padding Methods:
// 13. **String padStart(targetLength, padString)**
//     - Pads the current string with another string until the resulting string reaches the given length.
//     - **Runtime:** O(n), where n is the target length.

const str = '5';
const paddedStart = str.padStart(3, '0');
console.log(paddedStart); // Output: "005"

// 14. **String padEnd(targetLength, padString)**
//     - Pads the end of the current string with another string until the resulting string reaches the given length.
//     - **Runtime:** O(n), where n is the target length.

const str2 = 'Hello';
const paddedEnd = str2.padEnd(8, '!');
console.log(paddedEnd); // Output: "Hello!!!"

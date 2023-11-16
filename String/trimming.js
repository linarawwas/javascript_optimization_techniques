
// ### Trimming Methods:
// 10. **String trim()**
//     - Removes whitespace from both ends of a string.
//     - **Runtime:** O(n), where n is the length of the string.
const str = '   Trim this string   ';
const trimmed = str.trim();
console.log(trimmed); // Output: "Trim this string"

// 11. **String trimStart()**
//     - Removes whitespace from the beginning of a string.
//     - **Runtime:** O(n), where n is the length of the string.
const str1 = '   Trim this string   ';
const trimmedStart = str1.trimStart();
console.log(trimmedStart); // Output: "Trim this string   "

// 12. **String trimEnd()**
//     - Removes whitespace from the end of a string.
//     - **Runtime:** O(n), where n is the length of the string.
const str2 = '   Trim this string   ';
const trimmedEnd = str2.trimEnd();
console.log(trimmedEnd); // Output: "   Trim this string"


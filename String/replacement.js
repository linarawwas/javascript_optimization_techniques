// ### Replacement Methods:
//    - **Runtime:** O(n), where n is the length of the string.

// 5. **String replace(searchValue, replaceValue)**
//    - Replaces occurrences of a specified value in a string with another value.
// (only the first one )
const str1 = 'Hello, World!';
const replaced = str1.replace('World', 'Universe');
console.log(replaced); // Output: "Hello, Universe!"

// 6. **String replaceAll(searchValue, replaceValue)**
//    - Replaces ALL occurrences of a specified value in a string with another value.
const str2 = 'Hello, World!';
const replacedAll = str2.replaceAll('o', '0');
console.log(replacedAll); // Output: "Hell0, W0rld!"


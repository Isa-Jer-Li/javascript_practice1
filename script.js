// ex 1 : create a function that tells you if # is t/f
const isEqualTo100 = (a,b) => a === 100 || b === 100 || (a + b) === 100;

console.log(isEqualTo100(20,80));
console.log(isEqualTo100(50,50));
// can use arrow function with multi || (or) statement

// ------------------------------------------------------
// ex 2: write a JS prog to get the extension of a file name

const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));
console.log(getFileExtension('index.html'));
console.log(getFileExtension('webpack.config.js'));

// slice function gives a portion of the actual string
// put a '.' in the lastIndexOf parameter to find the occurence of the last string
// this is a common file (webpack.config.js) found in a lot of web dev repository -- but this has 2 dots and we only want to get the .js extens

// --------------------------------------------------------
// ex 3: write a JS program to replace every character in a given str with the character following it in the alphabet
// two options : (1) String.fromCharCode (2) charCode

const moveCharsForward = (str) =>
str
.split('')
.map(char => String.fromCharCode(char.charCodeAt(0) +1))
.join('');

console.log(moveCharsForward('abcd'));

//split will return every characer in the string as an array
// map mutates every item in the array depending on what you pass in as the function
// String.fromCharCode() takes a numerical code which represents the str and convcerts it back into an actual character
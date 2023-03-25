let text1 = "shavin\nreshani";
let multiLine = "shavin\
                reshani\
                himeth\
                pytha\
                kasun";

console.log(multiLine);

let multiLine2 = `this is automated string with
                new line characters`

console.log(multiLine2);

// working with strings
let sentence = "hello i am your boss!";

// obtaining portion of a string
console.log(sentence.substring(1, 5)); // character from index 1 to index 4, 5 is exclusive
console.log(sentence.slice(-5)); // last 5 characters
console.log(sentence.split(" "));

// indexing the strings
console.log(sentence.indexOf('e')); // index of first e character
console.log(sentence.indexOf('e', 2)); // index of e from index 2 or ahead
console.log(sentence.indexOf('e')); // last index of character e
console.log(sentence.indexOf('zz')); // search for sub string part 

// string comparing
console.log(sentence.startsWith('hello'));
console.log(sentence.endsWith('shavin'));
console.log(sentence.includes('am'));

console.log(sentence.replace("am", "was"));
console.log(sentence.toLocaleUpperCase());

console.log(sentence.concat('!!!'));
console.log("<>".repeat(10));

// accessing string chatacters by index notation
// string are immutable so they are read only arrays of characters
console.log(sentence[4]);

 // regulat expresiijs for text processings
let pattern = /\d+/g;
let text = "This is me: 1 2 3";

console.log(pattern.test(text));
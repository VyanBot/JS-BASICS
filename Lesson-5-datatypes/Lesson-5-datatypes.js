// Not going to be a mistake
let message = "hello";
message = 123456;

let n = 123;
n = 12.345;

alert( 1 / 0 ); // Infinity

alert( Infinity ); // Infinity

alert( "Not a number" / 2 ); // NaN, this type of division is a mistake

alert( NaN + 1 ); // NaN
alert( 3 * NaN ); // NaN
alert( "Not a number" / 2 - 1 ); // NaN

console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992

// symbol "n" at the end means, that it's BigInt
const bigInt = 1234567890123456789012345678901234567890n;

let str = "Hello";
let str2 = 'Singular quotes also work';
let phrase = `Reverse quotes are used to include a variable ${str}`;

let name = "Ivan";

// Let's include a variable
alert( `Hello, ${name}!` ); // Hello, Ivan!

// Let's add some calculations
alert( `Result: ${1 + 2}` ); // Result: 3

alert( "Result: ${1 + 2}" ); // Result: ${1 + 2} (Double quotes are not doing anything)

let nameFieldChecked = true; // Yes, field is checked
let ageFieldChecked = false; // No, field is not checked

let isGreater = 4 > 1;

alert( isGreater ); // true (The result of the comparison is going to be: "yes")

let age = null;

let age;

alert(age); // Will show "undefined"


let age = 123;

// Changing the value to undefined
age = undefined;

alert(age); // "undefined"

// Normal Syntax
typeof 5 // Will show "number"
// Syntax resembling a function call (less common)
typeof(5) // Also will show "number"

typeof 50 + " Flats"; // will show "number Flats"
typeof (50 + " Flats"); // will show "string"

typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"

typeof null // "object" This is an officially acknowledged bug in typeof, dating back to the creation of JavaScript and retained for compatibility.

typeof alert // "function"

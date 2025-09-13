let value = true;
alert(typeof value); // boolean

value = String(value); // now value is a string "true"
alert(typeof value); // string

alert( "6" / "2" ); // 3, string are converting into numbers

let str = "123";
alert(typeof str); // string

let num = Number(str); // becomes number 123

alert(typeof num); // number

let age = Number("Any string instead of a number");

alert(age); // NaN, conversion didn't work

alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (there's an error of reading a number on the position "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0

alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("Hello!") ); // true
alert( Boolean("") ); // false

alert( Boolean("0") ); // true
alert( Boolean(" ") ); // space is also true (any non-empty space it going to be true)

alert( 2 > 1 );  // true
alert( 2 == 1 ); // false
alert( 2 != 1 ); // true

let result = 5 > 4; // the result of the comparison is assigned to a variable result
alert( result ); // true

alert( 'b' > 'a' ); // true
alert( 'apple' > 'app' ); // true
alert( 'Sleepy' > 'Sleep' ); // true

alert( '2' > 1 ); // true, string '2' becomes a number "2"
alert( '01' == 1 ); // true, string '01' becomes a number "1"

alert( true == 1 ); // true
alert( false == 0 ); // true

let a = 0;
alert( Boolean(a) ); // false

let b = "0";
alert( Boolean(b) ); // true

alert(a == b); // true!
/*From a JavaScript perspective, the result is as expected. Equality converts values ​​using numeric conversion,
 so "0" becomes 0. Whereas explicit conversion using Boolean uses a different set of rules. */

alert( 0 == false ); // true

alert( '' == false ); // true

alert( 0 === false ); // false, since different types are compared

alert( null === undefined ); // false, since different types

alert( null == undefined ); // true, since These values ​​are equal to each other and are not equal to any other values. This is a special rule of the language.

alert( null > 0 );  // false (null is converted into a number and cannot be bigger than 0)
alert( null == 0 ); // false (null is only == undefined)
alert( null >= 0 ); // true (null is converted into a number and equals to 0)

alert( undefined > 0 ); // false (undefined converts into NaN and it always returns false)
alert( undefined < 0 ); // false 
alert( undefined == 0 ); // false (undefined only equals to null)

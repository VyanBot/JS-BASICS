let x = 1;

x = -x;
alert( x ); // -1, used an unary minus

let x = 1, y = 3;
alert( y - x ); // 2, binary minus is doing a subtraction

alert( 5 % 2 ); // 1, remainder of 5 divided by 2
alert( 8 % 3 ); // 2, remainder of 8 divided by 3
alert( 8 % 4 ); // 0, remainder of 8 divided by 4

alert( 2 ** 2 ); // 2² = 4
alert( 2 ** 3 ); // 2³ = 8
alert( 2 ** 4 ); // 2⁴ = 16

alert( 4 ** (1/2) ); // 2 (the power of 1/2 is equivalent to calculating the square root)

let s = "my" + "string";
alert(s); // mystring

alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"

 alert(2 + 2 + '1' ); // is going to be "41", and not "221"

 alert( 6 - '2' ); // 4, '2' converts into a number
alert( '6' / '2' ); // 3, both operands are converting into numbers

// Does not have an impact on numbers
let x = 1;
alert( +x ); // 1

let y = -2;
alert( +y ); // -2

// Turns not numbers into numbers
alert( +true ); // 1
alert( +"" );   // 0

let apples = "2";
let oranges = "3";

alert( apples + oranges ); // "23", since binary plus is combining the strings

let apples = "2";
let oranges = "3";

// Both operands are converted into numbers
alert( +apples + +oranges ); // 5

// a longer type of this is:
// alert( Number(apples) + Number(oranges) ); // 5

let x = 2 * 2 + 1;

alert( x ); // 5

let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

alert( a ); // 3
alert( c ); // 0

let a, b, c;

a = b = c = 2 + 2;

alert( a ); // 4
alert( b ); // 4
alert( c ); // 4

c = 2 + 2;
b = c;
a = c;

let n = 2;
n += 5; // now n = 7 (works the same as n = n + 5)
n *= 2; // now n = 14 (works the same as n = n * 2)

alert( n ); // 14

let n = 2;

n *= 3 + 5;

alert( n ); // 16  (first the right side is going to be completed, identical to n *= 8)

let counter = 2;
counter++;        // works the same as counter = counter + 1, just shorter
alert( counter ); // 3

let counter = 2;
counter--;        // works the same as counter = counter - 1, just shorter
alert( counter ); // 1

let counter = 1;
let a = ++counter; // (*)

alert(a); // 2

let counter = 1;
let a = counter++; // (*) changing from ++counter to counter++

alert(a); // 1

let counter = 0;
counter++;
++counter;
alert( counter ); // 2, both lines of code did the same thing

let counter = 0;
alert( ++counter ); // 1

let counter = 0;
alert( counter++ ); // 0

let counter = 1;
alert( 2 * ++counter ); // 4

let counter = 1;
alert( 2 * counter++ ); // 2, because counter++ returns the "old" value

let counter = 1;
alert( 2 * counter );
counter++;

let a = (1 + 2, 3 + 4);

alert( a ); // 7 (the result of 3 + 4)

a = 1 + 2, 3 + 4;

alert(a); // 3

// Three operations in 1 line
for (a = 1, b = 3, c = a * b; a < 10; a++) {

}

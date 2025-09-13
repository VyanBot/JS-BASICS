let year = prompt (`Which year was ECMAScript-2015 specification published?`, ``)

 if (year == 2015) alert( `you're right!` ); 

if (year == 2015) {
    alert( `Correct!` );
    alert( `you're so smart!` )
}
if (0) { // 0 is falsy
  // Nothing is going to be completed
}

if (1) { // 1 is truthy
  // always going to be completed
}

let condition = (year == 2015); // converts to true or false

if (condition) {
  // going to be completed on a certain condition
} 

let year = prompt (`Which year was ECMAScript-2015 specification published?`, ``)

if (year == 2015) {
    alert( `you're an expert!` );
} else {
    alert( `that's wrong!` ); // any value except of 2015
} 

let year = prompt (`Which year was ECMAScript-2015 specification published?`, ``)

if (year < 2015) {
    alert ( `this is too early...` );
} else if (year >2015) {
    alert ( `this seems a little late` );
} else {
    alert( `you're correct!` );
}

let accessAllowed;
let age = prompt (`how old are you?`, ``);

if ( age > 18 ) {
    accessAllowed = true;
} else {
    accessAllowed = false;
}

alert(accessAllowed);

let result = condition ? value1 : value2;

let accessAllowed = ( age > 18 ) ? true : false
// the comparison operator "age > 18" is executed first in any case
// (no need to enclose it in parentheses) but it is a safer option to do so

// the same thing (you can avoid using the question mark operator ?,
//  since the comparison itself already returns true/false:)
let accessAllowed = age > 18 

let age = prompt( `age?`, 18 );

let message = ( age < 3 ) ? `Hello, little baby!` :
    ( age < 18 ) ? `Hello!` :
    ( age < 100 ) ? `Good day!` :
     `What an unusual age!`;

     alert( message ); 

let age = prompt('How old are you?', '');

if (age <3) {
    message = `Hello, little baby!`;
} else if ( age < 18) {
    message = `Hello!`;
} else if ( age < 100) {
    message = `Good day!`;
} else {
    message = `What an unusual age!`;
}
alert ( message );

let company = prompt( `Which company create JavaScript?`, ``);

(company == `Netscape`) ? 
    alert(`Correct!`) : alert (`Incorrect!`); 

let company = prompt( `Which company create Javascript?`, ``);
if (company == `Netscape`) {
    alert (`Correct!`);
} else {
    alert( `Incorrect!`); 

if ("0") {
  alert( 'Hello!' );
} 

let company = prompt (`What is the official name of Javascript?`, ``);
if (company == `ECMAScript`) {
    alert(`Correct!`);
} else {
    alert(`You don't know about ECMAScript?`);
} 

let number = prompt (`Enter a number`, ``);
if (number > 0) {
    alert (1);
} else if ( number < 0){
    alert (-1);
} else {
    alert (0)
} 

let result;

if (a + b < 4) {
  result = 'Too little';
} else {
  result = 'Too much';
}
// This can be converted into `?`
result (a + b < 4) ? `Too little` : `Too much`;


let login = prompt (`Login`);

let message = (login == `Staff member`) ? `Hello!` :
              (login == `Director`) ? `Good day sir!` :
              (login == ``) ? `No login` : ``;

alert (message);

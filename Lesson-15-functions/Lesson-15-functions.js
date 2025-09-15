/*
function showMessage() {
    alert(`Hello everyone!`);
}

function name(parameters){
    ...body...
}

function showMessage() {
    alert(`Hello everyone!`);
}

showMessage();
showMessage();


function showMessage() {
    let message = `Hello, I'm Javascript!`; // local variable

    alert( message );
}

showMessage(); // `Hello, I'm Javascript!`

alert( message ); // <-- there's going to be an error, since the variable is only seen inside of the function

let userName = `Vasya`

function showMessage() {
    let message = `Hi,` + userName
    alert(message);
}

showMessage();


let userName = `Vasya`

function showMessage(){
    userName = `Petya`; // we're changing the value of the external variable

    let message = `Hi,` + userName;
    alert(message);
}

alert( userName ); // Vasya before calling the function

showMessage();

alert ( userName ); // Petya, the value of the external variable has been changed

let userName = `Vasya`;

function showMessage() {
    let userName = `Petya`; // we're naming the local variable

    let message = `Hi, ` + userName; // Petya
    alert(message);
}

// function is going to create and use it's own local variable userName
alert( userName ); // Vasya, didn't change, function did not affect the external variable


function showMessage (from, text) { // parameters: from, text
    alert(from, + `: ` + text);
}

showMessage(`Jessica`, `Hi!`); // Jessica: Hi!
showMessage(`Jessica`, `How are you?`); // Jessica: How are you?


function  showMessage(from, text) {
    from = `*` + from `*`; // making `from` prettier

    alert( from + `: ` + text);
}

let from = `Jessica`;

showMessage(from, `Hi`); // *Jessica*: Hi

// meaning of `from` stays the same, function changed the meaning of the local variable
alert( from ); //Jessica



function showMessage(from, text = `text has not been added`){
    alert( from + `: ` + text );
}

showMessage(`Jessica`); // Jessica: text has not been added


function showMessage(from, text = anotherFunction()){
    // anotherFunction() will be completed only if there's no text entered
    // the result will be meaning text
}


function showMessage(text) {
 // ...
 if (text === undefined){ // if the parameter is missing
    text = `Empty message`; 
 }
 alert(text);
}
showMessage(); // Empty message

function showMessage(text) {
    // if text is false or undefined, then set text to 'empty' 
    text = text || `empty`;
    //...
}

function showCount(count) {
    // if count equals to undefined or null, show `unknown`
    alert(count ?? `unknown`)
}
showCount(0); // 0
showCount(null); // unknown
showCount(); // unknown


function sum(a, b) {
    return a + b;
}

let result = sum(1, 2);
alert( result ); //3



function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return confirm(`Did your parents let you?`)
    }
}

let age = prompt(`How old are you?`, 18);

if ( checkAge(age) ) {
    alert( `Access granted` );
} else {
    alert( `Access denied` );
}
*/

function showMovie(age) {
    if( !checkAge(age) ) {
        return;
    }

    alert( `Is the movie being shown to you?` ); 
    // ...
}

/* return
 (some + long + expression + or + whatever * f(a) + f(b))
 // will not work, because JavaScript will put `;` after return and it will be considered empty

 //therefore we need to write it like this: (at least placing a bracket on the same line as return )

 return (
  some + long + expression
  + or +
  whatever * f(a) + f(b)
  ) 
  

// it's always better to keep the functions simple, so if there's a lot of code, we can create extra functions within the code to make it easier to read it

// option 1
function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {

    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert( i ); // simple
  }
}
// option 2 (extra function isPrime)
function showPrimes(n) {

  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i);  // simple
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if ( n % i == 0) return false;
  }
  return true;
}

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did your parents let you?');
  }
}

// let's rewrite it with `?`

function checkAge(age) {
    return (age > 18) ? true : confirm( `Did your parents let you?` );
}

// now with `||`

function checkAge(age) {
    return (age > 18) || confirm ( `Did your parents let you?` );
}

function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

function min(a, b){
    return a < b ? a : b;
}
*/

function pow(x,n) {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}

let x = prompt(`x?`, ``);
let n = prompt(`n?`, ``);

if (n >= 1 && m % 1 == 0) {
    alert( pow(x, n) );
} else {
    alert(`${n} power is not supported, choose a natural number`)
}

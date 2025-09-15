/*
// this is how we learnt to write functions so far (we declare the function)
function sayHi() {
    alert( `Hi!` );
}
// but there's another way --> expression
let sayHi = function(){
    alert( `Hi` );
}

function sayHi () {
    alert( `Hi` );
}

alert( sayHi ); // will display the code of the function

// we can copy and paste functions into other variables"

function sayHi() { // creating (function declaration)
    alert ( `Hi!` );
}

let func = sayHi; // copying

func(); // Hi!    // calling the copy of the function and it works
sayHi(); // Hi!   // the function itself still works too

// now, let's look at functions-callbacks

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

function showOk() {
    alert( `You agree.` )
}

function showCancel() {
    alert( `You cancelled the completion.` );
}

// the use of functions showOk, showCancel are passed as arguments of ask
ask(`Do you agree?`, showOk, showCancel);

// let's rewrite this example much shorter using function expression
function ask(question, yes, no) { // Here the functions are declared directly inside the ask...
    if (confirm(question)) yes() // ...they don't have names, so they are called anonymous.
    else no();
}

ask(
    `Do you agree?`,
    function() { alert(`You agreed.`); },
    function() { alert(`You cancelled the completion.`); }
);

// Function declaration, is when a function is declared with a separate construction "function"
function sum(a, b) {
    return a + b;
}

// Function expression, is when a function is created inside of another expression
let sum = function(a, b) {
    return a + b;
}

//`Function declaration` functions can be called before their definition point
sayHi(`John`); // Hi, John

function sayHi(name){
    alert( `Hi, ${name}` );
}
// however if it would be function expression, such code would cause an ERROR
sayHi(`John`); // ERROR

let sayHi = function(name) { // function is only created here, which is too late
    alert( `Hi, $(name)` );
}

let age = prompt(`How old are you?`, 18);

// depending on the condition of function declaration
if (age < 18) {

    function welcome(){
        alert(`Hi!`);
    }

} else {

    function welcome() {
        alert(`Good day!`);
    }

}

//... doesn't work
welcome(); // Error: welcome is not defined


let age = prompt(`How old are you?`, 18);

let welcome;

if(age < 18) {

    welcome = function() {
        alert(`Hello!`);
    };

} else {

    welcome = function(){
        alert(`Good day!`);
    };

}

welcome(); // now everything works, since we defined `let welcome`

*/

// to make it even easier we can use ? operator

let age = prompt(`How old are you?`, 18);

let welcome = (age < 18) ?
    function() { alert(`Hey!`); } :
    function() { alert(`Good day!`); };

welcome(); // now everything works

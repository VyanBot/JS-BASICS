/* // let func = (arg1, arg2, ...argN) => expression; is a shorter version of this

let func = function(arg1, arg2, ...argN) {
    return expression;
}

let sum = (a, b) => a + b;

// this arrow function is a shorter version of this:

let sum = function(a, b) {
    return a + b;
};


alert( sum(1, 2) ); // 3

// if there's just one argument we can drop the brackets to make it even shorter

let double = n => n * 2;
// similar to: let double = function(n) { return n * 2}
alert( double(3) ); // 6

// if there're no arguments at all, then we must have the brackets

let sayHi = () => alert(`Hello!`);

sayHi();

// arrow can also be used for dynamic expression same as function expression

let age = prompt(`How old are you?`, 18);

let welcome = (age < 18) ? 
    () => alert(`Hi!`) :
    () => alert(`Good day!`) ;

welcome();
*/

let sum = (a, b) => { // a curly brace that opens the body of a multi-line function
    let result = a + b;
    return result; // if we use curly braces, then we need to explicitly specify "return
};

alert( sum(1, 2) ); //3


function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
    `Do you agree?`,
    () => alert(`You agreed!`),
    () => alert(`You cancelled the completion!`)
);

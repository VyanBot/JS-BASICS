/*
while (condition) {
    // code
    // also called the `body of the cycle`
}

let i = 0;
while (i < 3) { // displays 0, then 1, then 2
    alert( i );
    i++;
}
 
// while (i) is a shorter version of while (i != 0)
let  i = 3;
while (i) { // when i is going to be 0, the condition will become faulty and the cycle is going to stop
    alert( i );
    i--;
}

let i = 3;
while (i) alert(i--);

do {
    //the body of the cycle
} while (condition);

let i = 0;
do {
    alert( i );
    i++;
} while (i < 3);

for (start; condition; step) {
    // ... the body of the cycle ...
}

for (let i = 0; i < 3; i++) { // going to display 0, 1, 2.
    alert(i);
}

// for (let i = 0; i < 3; i++) alert(i)

// complete the begging action
let i = 0;
// if the condition is met == true -> complete the body, take a step
if (i < 3){ alert(i); i++ }
// if the condition == true -> complete the body, take a step
if (i < 3){ alert(i); i++ }
// if the condition == true -> complete the body, take a step
if (i < 3){ alert(i); i++ }
// .. the end, since i == 3


for (let i = 0; i < 3; i++) {
    alert(i); // 0, 1, 2
}
alert (i); // error, since there's no such variable

let i = 0;

for (i = 0; i < 3; i++) {
    alert(i); // 0, 1, 2
}
alert (i); // 3, since variable was defined outside of the cycle


let i = 0; // we already have defined i with an assigned value

for (; i < 3; i++){ // there's no need for the `begging`
    alert( i ); // 0, 1, 2
}

// we can also remove the step:

let i = 0;

for (; i < 3; ) {
    alert (i++); // this will make it the same as while (i < 3)
} 

// we can also remove everything, that will create an infinite cycle

for (;;) { // `;;` have to be there, because there will be a syntax error otherwise
    // will be completing infinitely
}

let sum = 0;

while (true) {
    let value = +prompt(`Enter your value`, ``);

    if (!value) break; // (*)

    sum += value;

}
alert( `Sum: ` + sum);

for (let i = 0; i < 10; i++){
    // if true, skip the rest of the body of the cycle
    if ( i % 2  == 0) continue;

    alert(i); // 1, then 3, 5, 7, 9
}

// this is identical but harder to read since we have 2 {} layers
for (let i = 0; i < 10; i++) {
    if (i % 2){
        alert ( i );
    }
}

// pings for break/continue
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        // what if we want to skip to Ready (down below) from here?
    }
}

alert(`Ready`);

outer: for (let i = 0; i < 3; i++){
    for (let j = 0; j < 3; j++){
        
        let input = prompt(`Meaning in the coordinates (${i},${j}`,``);

        // if the string is empty or cancel, then leave both cycles
        if (!input) break outer; // (*)

        // do something to the meaning...
   }
}

alert(`Ready!`);

// even numbers 2-10 ( we use i % 2 == 0 since, the remainder is going to be 0, which means even)
for (let i = 2; i < 10; i++) {
    if (i % 2 == 0){
        alert ( i );
    }
}


let i = 0;
while (i < 3) {
    alert( `number ${i}!` );
    i++;
} 


let num;

do{
    num = prompt(`Enter the value larger than 100?`, 0)
} while (num <= 100 && num);

*/

let n = 10

primeNumber:
for (let i = 2; i < n; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue primeNumber;
    }
    alert(i);
}

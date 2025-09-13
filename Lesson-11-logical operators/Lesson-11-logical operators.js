/* result = a || b; // || (or)

alert ( true || true ); // true
alert ( false || false); // true
alert ( true || false ); // true
alert ( false || false ); // false

if (1 || 0 ) { // works as if ( true || false )
    alert( `Correct!` );
} 

let hour = 9;

if (hour < 10 || hour > 18) {
    alert (`Office is closed!`);
}


let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
    alert (`Office is closed!`); // it's a weekend
} 

alert ( 1 || 0 ); // 1 (1 - the true value)
alert ( true || `some string` ); // true

alert( null || 1); // 1 (first true value)
alert( null || 0); // 1 (first true value)
alert( undefined || null || 0); // 0 (since everything is false, the last value is returned)


let firstName = ``;
let lastName = ``;
let nickName = `Supercoder`

alert(firstName || lastName || nickName || `Anonymous`); // Supercoder

//here only the second alert will work, since the first line is true
true || alert("Is never going to work");
false || alert("Is going to work");


// ||= (Logical assignment OR)

a ||= b;

a || (a = b);

let johnHasCar = false;

johnHasCar ||= `John doesn't have a car!`; //same as false || (johnHasCar = "...")

alert ( johnHasCar );

let manufacturer = ``; // operator ||= converts empty string "" to boolean value false

manufacturer ||= `Unknown manufacturer`; // same as false || (manufacturer = "...")

alert ( manufacturer ); // `Unknown manufacturer`


let johnHasCar = false;

if (johnHasCar == false) {
    johnHasCar = `John doesn't have a car!`
}

alert(johnHasCar); // `John doesn't have a car!`

let manufacturer = ``;

if (manufacturer == false) {
    manufacturer = `Unknown manufacturer`
}

alert(manufacturer); // `Unknown manufacturer!`


result = a && b;

alert( true && true ); // true
alert( false && true ); // false
alert( true && false ); // false
alert( false && false ); // false

let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
    alert ( `time is 12:30` );
}

if (1 && 0) { // calculated as true && false
    alert( `not going to work because the result is wrong`)
}

// if the first operand is correct,
// and returns the second one :
alert ( 1 && 0 ); // 0
alert ( 1 && 5 ); // 5 (since both are correct, it returns the last one)

// if the first operand is wrong,
// and returns the first one, the second one is ignored
alert ( null && 5 ); //null
alert ( 0 && `some string` ); //0

alert ( 1 && 2 && null && 3 ); //null

alert ( 1 && 2 && 3 ); //3


a &&= b;

a && (a = b); 

let greeting = `Hi!`; // the string is not empty, so it will be converted to the logical value true by the &&= operator

greeting &&= greeting + `, user!`; // same as true && (greeting = greeting + "...")


let greeting = `Hi!`

if (greeting) {
    greeting = greeting + `, user!`
}

alert( greeting ) // `Hi, user!` 


result = !value;

alert( !true ); // false
alert( !0 ); // true

alert( !!`Not an empty string` ); //true
alert( !!null ); //false

alert( Boolean(`Not an empty string` ) ); //true
alert( Boolean(null) ); //false


if (age >= 14 && age <= 90) {
    alert(`age fits the requirement!`);
}
*/

if (!(age >= 14 && age <= 90)) {
    alert(`age doesn't fit the requirement!`);
}

if (age < 14 || age > 90){
    alert(`age doesn't fit the requirement`)
}

let userName = prompt (`Who's there?`, ``);
if (userName === `Admin`) {
    let pass = prompt(`Password?`, ``);

    if (pass === `I'm the boss!`){
        alert (`Good morning, boss!`);
    } else if (pass === `` || pass === null) {
        alert (`Access disabled`);
    } else {
        alert (`Wrong password!`);
    }
} else if (userName === `` || userName === null){
    alert(`Access disabled)`);
} else {
    alert (`I do not know you`);
}

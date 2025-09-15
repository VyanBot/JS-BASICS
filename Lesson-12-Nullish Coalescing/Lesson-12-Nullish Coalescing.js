/*
result = a ?? b
// same thing as 
result = (a !== null && a !== undefined) ? a : b;

let user;

alert(user ?? `Anonym`); // Anonym (user is not defined)


let user = `Ivan`; 

alert(user ?? `Anonym`); // Ivan (user is defined)


let firstName = null;
let lastName = null;
let nickName = `Supercoder`;

// Shows the first true value :
alert(firstName || lastName || nickName || `Anonym`); // Supercoder

let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0


let height = null;
let width = null;

// it's important to use the round brackets 
let area = (height ?? 100) * (width ?? 50);

alert(area); // 5000

// without brackets 
let area = height ?? 100 * width ?? 50;

// ...going to work like this (not at all how we want it to work):
let area = height ?? (100 * width) ?? 50;


// if priority is not defined by round brackets using ?? || and && together is going to lead to a syntax error
let x = 1 && 2 ?? 3; // syntax error


let x = (1 && 2) ?? 3; //works without errors

alert(x); //2

let userAge = null

if (userAge === null || userAge === undefined) {
    userAge = 18;
}

// looks very bulky and that's why we can use this x ??= y

let userAge = null;

userAge ??= 18

alert(userAge) //18


let userAge = 18;

userAge ??= alert(`Not going to work!`);
userAge ??= 21;
userAge ??= null;

alert(userAge) // still 18


alert(undefined ?? NaN ?? null ?? `` ?? ` `); // NaN, since it's the first defined value

let city = null;

city ??= `Berlin`;
city ??= null;
city ??= `Moscow`;
city ??= `London`;

alert(city); //going to be `Berlin`, since the first defined value that city will switch to is `Berlin`

let num1 = 10,
    num2 = 20,
    result;

result ??= num1 ?? num2

alert(result); // 10, we have `??=` in the first part, since we have to change the value to 10...
            // ...if result is null or undefined, but in the second part we're just comparing... 
            // ...num1 and num2, so we're using `??` without `=`
*/

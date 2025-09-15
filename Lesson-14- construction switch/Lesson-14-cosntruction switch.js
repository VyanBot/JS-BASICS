/*
switch(x) {
    case `value1`: // if (x === `value1`)
        //...
        [break]

    case `value2`: // if (x === `value2)
        //...
        [break]

    default:
        //...
        [break]
} 

let a = 2 + 2;

switch (a) {
    case 3:
        alert(`too little`);
        break;
    case 4:
        alert(`just right!`);
        break;
    case 5:
        alert(`too much man!`);
        break;
    default:
        alert(`there're no such values!`);
}


let a = "1";
let b = 0;

switch (+a) {
  case b + 1:
    alert("will work, since the value of +a will be 1, which is identical to b+1");
    break;

  default:
    alert("this will not work");
}


let a = 3;

switch (a) {
    case 4:
        alert(`correct!`);
        break;

    case 3: // we'll group both cases
    case 5:
        alert(`Incorrect!`);
        alert(`maybe you should visit a maths tutor?`);
        break;

    default:
        alert(`The result looks weird, really...`);
}
*/

if (browser === `Edge`){
    alert(`You've got the Edge!`);
} else if (browser === `Chrome` 
    || browser === `Firefox`
    || browser === `Safari`
    || browser === `Opera`){
        alert(`Okay we support these browser too`);
    } else  {
        alert(`We hope this page looks ok!`);
    }

const number = +prompt (`Enter value from 0 to 3`, ``);
switch (number) {
    case 0 :
        alert (`You entered number 0`);
        break;

    case 1 :
        alert (`You entered number 1`);
        break;

    case 2 :
    case 3 :
        alert (`You entered number 2, maybe 3`);
        break;
}

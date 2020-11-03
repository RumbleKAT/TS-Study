"use strict";
let greet;
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
greet('song', 'good');
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
let logDetails;
logDetails = (ninja) => {
    console.log(ninja.name + " " + ninja.age);
};
logDetails({ name: 'Song', age: 10 });

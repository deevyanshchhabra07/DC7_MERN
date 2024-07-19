// Destructuring in JS
// extracting variables from iterables works with arrays obj and similar structures

const numbers = [1,2,3,4]
const[first,second,third,fourth] = numbers
console.log(first); // will log 1 on console , this is how destructuring works in js ES6

// swap variables using destructuring

let a = 12;
let b = 13;
[a,b] = [b,a]
console.log(a); // will print 13
console.log(b); // will print 12

// Destructuring funcn parameter

/* function greet(userObj){
    console.log(`his user ${userObj.name} ur age is ${userObj .age}`);
}

const myUser = {
    name : "DEEVYANSH CHHABRA",
    age : 21,
}

greet(myUser)
 */
// optimizing above code using destructuring
 
/* function greet2({name,age}){
    console.log(`u r name is ${name} , age is ${age}`);
}

const userObj={
    name : "Deevyansh Chhabra",
    age : 21,
}

greet2(userObj) // basically when userObj function is passed to greet 2 parameter only name and age values get extracted
 */

// nested destructuring

/* const userData = {
    id : 1,
    info :{
        name : "DEEVYANSH CHHABRA",
        age : "21",
    }
}

console.log(userData.info.name);   */// normal way of acesing obj

// doing above code with destructuring way

const {id,
    info: {name,age} ,}={ // removed name so we can directly acess elements without using . operartions
    id : 1,
    info :{
        name : "DEEVYANSH CHHABRA",
        age : "21",
    }
}

console.log(name);
console.log(age);
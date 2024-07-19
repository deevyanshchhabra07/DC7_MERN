// advanced js

// ES6 IS A VERSION OF JS <MODERN JS>

// ARROW FUNCTIONS : 1. CANT BE USED WITH this keyword

const multiply = (a,b) => a*b; 

const ans = multiply(2,3)
console.log(ans);

const greeting = (naam)=>{
    return `hello ,${naam}`
}
const ans1 = greeting("Deevyansh")
console.log(ans1);


const square =(x) => x*x;  // if ur function has one parameter u can remove parenthesis
const ans3 = square(3);
console.log(ans3);

// arrow function without parameter
const randomNo = () => Math.random();
const ans4 = randomNo();
console.log(ans4);


// returning obj literal using arrowfunction

const objLit = () =>{
    return{
        name : "Deevyansh Chhabra",
        age : 21
    }
}

const ans5 = objLit();
console.log(ans5);


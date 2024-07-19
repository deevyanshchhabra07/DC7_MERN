function greetings() {
    return "hii everyone";
}

console.log(greetings() + " Deevyansh here"); // Logs "hii everyone Deevyansh here"

function showDate(){
    const currDate = new Date();
    console.log(`todays date is ${currDate}`)
}
showDate()

// declaring function using function expression method

const hii = function(){
    return 'hii everyone deevyansh chhabra here'
}

console.log(hii() +' thanks fore recorgnizing me')

function checkEeven(number){
    if(number % 2 == 0){
        return true;
    }
    else{ 
        return false;
    }
}

console.log(checkEeven(6))

// immidiately invoked function expression(IIFE) : immodately executing function immidiately after creation
/*
(function () {
    const num = 5;
    const sq = 5*5;
})(); // immidately calling funcn after cration*/



// code examples

function addTwo(a,b){
    return a+b

}
console.log(addTwo(2,3));

// default parameter
function greet(name, greeting = 'Hello') {
    console.log(greeting + ', ' + name);
}
greet('Alice'); // Output: "Hello, Alice"
greet('Bob', 'Hi'); // Output: "Hi, Bob"
/*In the greet function above, the greeting parameter has a default value of 'Hello'. If you call greet without providing a second argument, it uses the default value. */

// more about default parameter
function test(num = 1) {
    console.log(typeof num);
}
test(); // Output: "number" (num is set to 1)
test(undefined); // Output: "number" (num is still 1)
// Testing with other falsy values:
test(''); // Output: "string" (num is set to '')
test(null); // Output: "object" (num is set to null)

/*Even if you explicitly set the first argument to undefined, the default value is still used. However, other falsy values (like an empty string or null) won’t trigger the default. */

function myFunction(){
    const local = "hii"; // this a local variable acessing it outside the block isnt possible
}

/*
console.log(local); // but this will throw error as outside funcn scope

local = "hello"  // this is a new global variable created impicitly but actual local is nt modified
*/



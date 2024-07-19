//let and const 
/*
const a = 12;

a = 13;
console.log(a);*/ // this code can not run as variable assigned with const can not be reassigned

// const is used in configration setting always assign variable with const if u r not going to reassign

// hoisting issues with var 
/*
function hoistingIssue(){
    console.log(d); // this wouldnt give an error and rather will show undefined 
    var d = 12;
}*/

// doing same thing with let will lead to an error
/*
function hoistingIssue(){
    console.log(d); // this would give a refrence error
    let d = 12;
}
hoistingIssue(); // would give reference error*/

/*
for(var i=0;i<3;i++){
    console.log(i);
}
console.log(i); // this would print 3 which is a huge error*/

/*
for(let i=0;i<3;i++){
    console.log(i);
}
console.log(i); // doing same thing with let will throw an error*/
/*
const x = 10;
x = 20;
console.log(x);*/ // will throw error assignmenet to constant variable



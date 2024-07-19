// OBJECT REFRENCING
// java uses pass by value
// changes made to one refrence reflects in all obj

// pass by refrence concept is for obj and arrays, nt for premitives
const person1 = {name:"Deevyansh",age:21}
console.log(person1);
const person2 = person1;
person2.age = 12;
console.log(person1);  // changes r made to person 2 but will be reflected when we log person 1 as pass by refrence

person1.name = "Rahul";
console.log(person2);  // so it is called by refrence

// passing object to a function
const incrementAge = (personObj) =>{
    personObj.age +=1; // this would increment age by 1
}

const personObj = {name : "Deevyansh" , age : 21};
incrementAge(personObj);
console.log(personObj);
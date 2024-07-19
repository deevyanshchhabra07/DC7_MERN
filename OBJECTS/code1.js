// objects in js

// object is ds in js 
// its like key value pair similar to dictionary in other programing language

const obj = {
    name:'deevyansh',
    age: 21,
    available : true
}
console.log(obj)

// acessing obj property using dot notation
const objName = obj.name;
console.log(objName);
console.log(obj.age) // acesing it without assigning it to varaible

// acessing obj prop using bracket notation
const objAge = obj['age'];
console.log(objAge)
console.log(obj['available']) // acesing it without assigning it to varaible

// acssingn special characters r only possible with bracket notation not with dot notation
const name ={
    'first name':'Deevyansh',
    'last name':'Chhara'

}

//console.log(name.first name) // this is synatactically nt possible will throw an error
console.log(name['last name'])

const task = {
    discription : 'Finished homework',
    isCompleted : false
}
const query = 'isCom' + 'pleted'
console.log(task[query])
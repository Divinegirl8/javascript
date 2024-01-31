// let user = {
//     name : "divine",
//     age : 20,
// }
// let key = "name";
// console.log(user["name"])
// console.log(user[`${key}`])


// console.log(user.name)
// console.log(user.age)

// function userName(name,age){
//     return {name,age}
// }
// console.log("dee",21)

// let details = userName("name",1)
// console.log(details)

// let cohortNumber = 18
// console.log(`This is cohort ${cohortNumber}`)

// let age = 24
// let output = (age > 16) ? console.log(true) : console.log(false);

 let age = 19
let output =  (age > 16)  ? console.log(`age ${age} is greater than 16`)  : (age < 16) ?  console.log(`age ${age} is less than 16`)  : console.log(`age ${age} is equals to 16`);

 // let arr = new Array();
  //let arr = [];

  let myArray = [1,2,3,6];
//   myArray.push(45) // this is to add into the array
//   console.log(myArray)

//   myArray.pop()
//   console.log(myArray)

//   myArray.shift()
//   console.log(myArray)

//   myArray.unshift(5)
//   console.log(myArray)

//   myArray.slice(3)
//   console.log(myArray)

//   myArray.splice(3,1)
//   console.log(myArray)

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

animals.splice(1,1);
console.log(animals)

let x = 1;
let y = "1";

console.log(x == y);
console.log (x===y);
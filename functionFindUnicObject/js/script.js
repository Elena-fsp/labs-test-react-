"use strict";

let array = [
  {id: 1, name: 'Lena', description: 'student', obj: null},
  {id: 1, name: 'Bob', description: 'employee', obj: {name: 'aa'}},
  {id: 1, name: 'Sam', description: 'student', obj: {name: 'aa'}},
  {id: 1, name: 'Bob', description: 'employee', obj: {name: 'aa'}},
  {id: 1, name: 'Bob', description: 'employee', obj: {name: 'aa'}},
  {id: 1, name: 'Lena', description: 'student', obj: null},
  {id: 1, name: 'Lena', description: 'student', obj: null},
  {id: 1, name: 'Lena', description: 'student', obj: null},
  {id: 1, name: 'Lana', description: 'employee', obj: {name: 'aa'}},
  {id: 1, name: 'в', description: 'dsds', obj: {name: 'aab', account: 7}, value: 2},
  {id: 1, name: 'Lana', description: 'employee', obj: {name: 'an'}},
  {id: 1, name: 'Lena', description: 'student', obj: null},
];


function findUniqueObject(array) {
  let modifiedArray = array.map(item => JSON.stringify(item));
  let uniqueElements = modifiedArray.filter((element, index) =>  modifiedArray.indexOf(element) === index);
  return uniqueElements.map(item => JSON.parse(item));  
}

console.log(findUniqueObject(array));


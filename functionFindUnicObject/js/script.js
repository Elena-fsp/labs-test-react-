"use strict";

function findUniqueObject(array) {
  let modifiedArray = array.map(item => JSON.stringify(item));
  let uniqueElements = modifiedArray.filter((element, index) =>  modifiedArray.indexOf(element) === index);
  return uniqueElements.map(item => JSON.parse(item));  
}

function findUniqueItem(array) {

  let uniqueElements = [];
  let temporary = 0;

  for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < uniqueElements.length; j++) {
      if(isEqual(array[i], uniqueElements[j])) {
        temporary++;
      }
    }
    if(temporary === 0) {
      uniqueElements.push(array[i]);
    }
    temporary = 0;
  }
  return uniqueElements; 
}


function isEqual(objectFirst, objectSecond) {

  let propertiesObjectFirst = Object.getOwnPropertyNames(objectFirst);
  let propertiesObjectSecond = Object.getOwnPropertyNames(objectSecond);
  
  if(propertiesObjectFirst.length !== propertiesObjectSecond.length) {
    return false;
  }

  for(let key in objectSecond) {
    if(objectSecond[key] === objectFirst[key]) {
      continue;
    }
    if(typeof objectSecond[key] === "object" &&  typeof objectFirst[key] === 'object') {
      if(isEqual(objectSecond[key], objectFirst[key])) {
        continue;
      }
    }
    return false
  }
  return true;
}
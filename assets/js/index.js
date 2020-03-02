const addSolve = document.querySelector("#add-solve");

let addANumber = document.getElementById("add-a").value;
addANumber = parseInt(addANumber, 10);
let addBNumber = document.getElementById("add-b").value;
addBNumber = parseInt(addBNumber, 10);
let addResult = document.getElementById("add-result");

var addResultNumber;
function displayAddResult() {
    addANumber = document.getElementById("add-a").value;
    addANumber = parseInt(addANumber, 10);
    addBNumber = document.getElementById("add-b").value;
    addBNumber = parseInt(addBNumber, 10);
    addResultNumber = addANumber + addBNumber;
    addResult.value = addResultNumber;
}

addSolve.addEventListener("click", displayAddResult);


console.log(addANumber);
console.log(addBNumber);
// console.log(addA.innerText) --> empty string, because in this html the number is in 'value' unlike the in-class exercise. so .innerText command doesnt work!!
// <input>
// How to access <input>text: https://www.w3schools.com/jsref/dom_obj_text.asp
// How to set "text": x.value = y

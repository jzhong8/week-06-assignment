// add
const addSolve = document.querySelector("#add-solve");

// i feel like these 4 lines are kinda repetitive with the lines inside of "function displayAddResault" in terms of function, but if i remove all 4 lines, then addANumber & addBNumber would be undefined. if i remove line 2 & 4, then addANumber & addBNumber would be shown as string not number in console.log at the bottom, which idk if matters or not
// what's the better way to write this?
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


// console.log(addANumber);
// console.log(addBNumber);
// console.log(addA.innerText) --> empty string, because in this html the number is in 'value' unlike the in-class exercise. so .innerText command doesnt work!!
// <input>
// How to access <input>text: https://www.w3schools.com/jsref/dom_obj_text.asp
// How to set "text": x.value = y


// subtract
const subtractSolve = document.querySelector("#subtract-solve");

let subtractANumber = document.getElementById("subtract-a").value;
subtractANumber = parseInt(subtractANumber, 10);
let subtractBNumber = document.getElementById("subtract-b").value;
subtractBNumber = parseInt(subtractBNumber, 10);
let subtractResult = document.getElementById("subtract-result");

var subtractResultNumber;

function displaySubtractResult() {
    subtractANumber = document.getElementById("subtract-a").value;
    subtractANumber = parseInt(subtractANumber, 10);
    subtractBNumber = document.getElementById("subtract-b").value;
    subtractBNumber = parseInt(subtractBNumber, 10);
    subtractResultNumber = subtractANumber - subtractBNumber;
    subtractResult.value = subtractResultNumber;
}

subtractSolve.addEventListener("click", displaySubtractResult);

// multiply
const multiplySolve = document.querySelector("#multiply-solve");

let multiplyANumber = document.getElementById("multiply-a").value;
multiplyANumber = parseInt(multiplyANumber, 10);
let multiplyBNumber = document.getElementById("multiply-b").value;
multiplyBNumber = parseInt(multiplyBNumber, 10);
let multiplyResult = document.getElementById("multiply-result");

var multiplyResultNumber;

function displayMultiplyResult() {
    multiplyANumber = document.getElementById("multiply-a").value;
    multiplyANumber = parseInt(multiplyANumber, 10);
    multiplyBNumber = document.getElementById("multiply-b").value;
    multiplyBNumber = parseInt(multiplyBNumber, 10);
    multiplyResultNumber = multiplyANumber * multiplyBNumber;
    multiplyResult.value = multiplyResultNumber;
}

multiplySolve.addEventListener("click", displayMultiplyResult);

// divide
const divideSolve = document.querySelector("#divide-solve");

let divideANumber = document.getElementById("divide-a").value;
divideANumber = parseInt(divideANumber, 10);
let divideBNumber = document.getElementById("divide-b").value;
divideBNumber = parseInt(divideBNumber, 10);
let divideResult = document.getElementById("divide-result");

var divideResultNumber;

function displayDivideResult() {
    divideANumber = document.getElementById("divide-a").value;
    divideANumber = parseInt(divideANumber, 10);
    divideBNumber = document.getElementById("divide-b").value;
    divideBNumber = parseInt(divideBNumber, 10);
    divideResultNumber = divideANumber / divideBNumber;
    divideResult.value = divideResultNumber;
}

divideSolve.addEventListener("click", displayDivideResult);


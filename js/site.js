function add() {
  // get the numbers
  let numberOne = document.getElementById("firstNumber").value;
  let numberTwo = document.getElementById("secondNumber").value;

  // turn them into integers
  numberOne = parseFloat(numberOne);
  numberTwo = parseFloat(numberTwo);

  // add the first and second numbers
  let sum = numberOne + numberTwo;

  // display the result
  let resultsDiv = document.getElementById("results");
  resultsDiv.innerText = sum;
}

function subtract() {
  let numberOne = document.getElementById("firstNumber").value;
  let numberTwo = document.getElementById("secondNumber").value;

  numberOne = parseFloat(numberOne);
  numberTwo = parseFloat(numberTwo);

  let sum = numberOne - numberTwo;

  let resultsDiv = document.getElementById("results");
  resultsDiv.innerText = sum;
}

function multiply() {
  let numberOne = document.getElementById("firstNumber").value;
  let numberTwo = document.getElementById("secondNumber").value;

  numberOne = parseFloat(numberOne);
  numberTwo = parseFloat(numberTwo);

  let sum = numberOne * numberTwo;

  let resultsDiv = document.getElementById("results");
  resultsDiv.innerText = sum;
}

function divide() {
  let numberOne = document.getElementById("firstNumber").value;
  let numberTwo = document.getElementById("secondNumber").value;

  numberOne = parseFloat(numberOne);
  numberTwo = parseFloat(numberTwo);

  let sum = numberOne / numberTwo;

  if (numberTwo == 0) {
    sum = "Cannot divide by zero";
  }

  let resultsDiv = document.getElementById("results");
  resultsDiv.innerText = sum;
}

function sumAll() {
  let numberString = document.getElementById("numberSeries").value;
  // numberString = '12345'

  let numberArr = numberString.split("");
  // numberArr = ['1', '2', '3', '4', '5']

  let sum = 0; // running total

  for (let i = 0; i < numberArr.length; i = i + 1) {
    let currentNumber = numberArr[i];
    // currentNumber = '1'

    currentNumber = parseInt(currentNumber);
    // currentNumber = 1

    sum = sum + currentNumber;
  }

  let resultsDiv = document.getElementById("results");
  resultsDiv.innerText = sum;
}

function multiplyAll() {

    let numberString = document.getElementById("numberSeries").value;
  
    let numberArr = numberString.split("");
  
    let sum = 1;
  
    for (let i = 0; i < numberArr.length; i = i + 1) {
      let currentNumber = numberArr[i];
  
      currentNumber = parseInt(currentNumber);
  
      sum = sum * currentNumber;
    }
  
    let resultsDiv = document.getElementById("results");
    resultsDiv.innerText = sum;
}

function minimum() {
 // check each number and see if its smaller than
 // the smallest number ive found so far
}

function maximum() {

    let numberString = document.getElementById("numberSeries").value;

    let numberArr = numberString.split("");
  
    let sum = 0;
  
    for (let i = 0; i < numberArr.length; i = i + 1) {
      let currentNumberOne = numberArr[i];
      
      currentNumberOne = parseInt(currentNumberOne);
      
      let currentNumberTwo = numberArr[i + 1];
      currentNumberTwo = parseInt(currentNumberTwo);

      //if(currentNumberOne > currentNumberTwo) {
        //max = currentNumberOne;
      //} else {
        //max = currentNumberTwo;
      //}

      //maxArr = max;
  
    }
  
    let resultsDiv = document.getElementById("results");
    resultsDiv.innerText = maxArr;
 // check each number and see if its larger than
 // the largest number ive found so far
}

function average() {
    // get the sum of all
    // divide the sum by the amount of numbers
    // display it
  let numberString = document.getElementById("numberSeries").value;

  let numberArr = numberString.split("");

  let sum = 0;

  for (let i = 0; i < numberArr.length; i = i + 1) {
    let currentNumber = numberArr[i];

    currentNumber = parseInt(currentNumber);

    sum = sum + currentNumber;
    avg = sum / numberArr.length;
  }

  let resultsDiv = document.getElementById("results");
  resultsDiv.innerText = avg;
}
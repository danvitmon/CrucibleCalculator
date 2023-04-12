function add() {
    // get the numbers
    // turn them into integers
    // add the first and second numbers
    // display the result

    let numberOne = document.getElementById('firstNumber').value;
    let numberTwo = document.getElementById('secondNumber').value;

    numberOne = parseFloat(numberOne);
    numberTwo = parseFloat(numberTwo);

    let sum = numberOne + numberTwo;

    let resultsDiv = document.getElementById('results');
    resultsDiv.innerText = sum;
}
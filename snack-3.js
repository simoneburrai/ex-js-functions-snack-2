const firstNumber = 8;
const secondNumber = 3;

const sum = (num1, num2) => num1 + num2;
const moltiplication = (num1, num2) => num1 * num2;
const division = (num1, num2) => num1 / num2;
const subtraction = (num1, num2) => num1 - num2;

function doOperation(num1, num2, callBackOperation){
    return callBackOperation(num1, num2);
};

console.log(`Somma tra ${firstNumber} e ${secondNumber} :
     ${doOperation(firstNumber, secondNumber, sum)}`);


console.log(`Moltiplicazione tra ${firstNumber} e ${secondNumber} :
     ${doOperation(firstNumber, secondNumber, moltiplication)}`);


console.log(`Divisone tra ${firstNumber} e ${secondNumber} :
     ${doOperation(firstNumber, secondNumber, division).toFixed(2)}`);


console.log(`Sottrazione tra ${firstNumber} e ${secondNumber} :
     ${doOperation(firstNumber, secondNumber, subtraction)}`);
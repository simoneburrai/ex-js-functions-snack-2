const number1 = 4;
const number2 = 5;

function sumDeclarativeFunction (num1, num2) {
    return num1 + num2;
}

const sumAnonymusFunction = function(num1, num2){
    return num1 + num2;
}

const arrowSumFunction = (num1, num2)=> num1 + num2;


console.log("Funzione Somma Dichiarativa", sumDeclarativeFunction(number1, number2));

console.log("Funzione Somma Anonima", sumAnonymusFunction(number1, number2));

console.log("Funzione Somma Anonima-Arrow", arrowSumFunction(number1, number2));
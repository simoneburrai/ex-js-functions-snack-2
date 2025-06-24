// Creare una funzione che esegue una sequenza di operazioni con ritardi
// Scrivi una funzione sequenzaOperazioni che accetta un array di operazioni
//  (funzioni) e un tempo di intervallo.

// Ogni operazione deve essere eseguita in sequenza con un ritardo uguale al tempo di intervallo.
// Esempio di utilizzo:
// sequenzaOperazioni([
//   () => console.log("Operazione 1"),
//   () => console.log("Operazione 2"),
//   () => console.log("Operazione 3")
// ], 2000);
// Output atteso:
// Operazione 1
// Operazione 2
// Operazione 3

const sum = (num1, num2) => num1 + num2;
const moltiplication = (num1, num2) => num1 * num2;
const division = (num1, num2) => num1 / num2;
const subtraction = (num1, num2) => num1 - num2;

const arrOperations = [sum, moltiplication, division, subtraction];

function operationSequence(arrOfOperations, timeIntervalinMS){
    let index = 0;
       return function intervalOperations(num1, num2){
            console.log("Numeri usati per le Operazioni: ", num1, num2)
            const intervalId = setInterval(()=>{
                if(index<arrOfOperations.length){
                    console.log(arrOfOperations[index])
                    console.log(arrOfOperations[index](num1, num2));
                    index++
                }else{
                    clearInterval(intervalId);
                }
            
            }, timeIntervalinMS )
                }
        

    };
   
const operationsEverySecond = operationSequence(arrOperations, 1_000);

operationsEverySecond(2, 4)
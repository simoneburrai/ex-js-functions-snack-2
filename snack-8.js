// Crea una funzione che simula un conto alla rovescia
// Scrivi una funzione contoAllaRovescia che accetta un 
// numero n e stampa il conto alla rovescia da n a 0,
//  con un intervallo di 1 secondo tra ogni numero. 
//  Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer.
// Esempio di utilizzo:
// contoAllaRovescia(5)
// Output atteso:
// 5
// 4
// 3
// 2
// 1
// Tempo scaduto!

function contoAllaRovescia(num){
    intervalId = setInterval(()=>{
        if(num>0){
            console.log(num);
            num--;
        }else if(num === 0){
            console.log(num)
            console.log("Tempo Scaduto");
             clearInterval(intervalId)
        }
    }, 1_000);
}

contoAllaRovescia(10);
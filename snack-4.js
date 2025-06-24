// Crea un generatore di funzioni creaTimer
// Scrivi una funzione creaTimer che accetta
//  un tempo (in ms) e restituisce una nuova 
//  funzione che avvia un setTimeout per
//   stampare "Tempo scaduto!".

const timeInMilliSeconds = 4_000;

function createTimer(timeMs){
    console.log("Avvio Timer");
    return setTimeout(()=>console.log("Tempo Scaduto"), timeMs);
}

createTimer(timeInMilliSeconds)
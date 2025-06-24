// Crea una funzione stampaOgniSecondo con setInterval.
// Definisci una funzione che accetta un messaggio e lo
//  stampa ogni secondo.

const text = "Benvenuto nel mio snack 5"


function printEveryOneSecond(message){
    setInterval(()=>console.log(message), 1_000)
}

printEveryOneSecond(text);


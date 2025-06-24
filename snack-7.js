// Crea una funzione che ferma un timer dopo un certo tempo
// Scrivi una funzione eseguiEferma che accetta un messaggio,
//  un tempo di avvio e un tempo di stop. Il messaggio deve
//   essere stampato a intervalli regolari, ma si deve fermare
//    dopo il tempo di stop.

function startAndStop(message, startTime, endTime){
     
    const intervalId = setInterval(()=> console.log(message), startTime);

  setTimeout(()=>{
    clearInterval(intervalId)
}, endTime)
}

startAndStop("Questo è il messagio", 1_000, 2_000)


//Dubbi sul funzionamento "si deve fermare dopo il tempo di stop"
//Lo startTime deve essere anche l'intervallo o no?
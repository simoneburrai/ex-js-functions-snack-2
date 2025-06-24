// Crea un contatore automatico con setInterval
// Definisci una funzione creaContatoreAutomatico che 
// accetta un intervallo di tempo e restituisce una 
// funzione che avvia un setInterval, incrementando
//  un contatore e stampandolo.


function createAutoCounter(timeInterval){
 return (counter)=>{
    setInterval(()=>{
        counter++;
        console.log(counter)
    }, timeInterval)
 }
}

const autoCounter1s = createAutoCounter(1000);

autoCounter1s(0);
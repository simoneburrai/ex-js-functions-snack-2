// Creare un throttler per limitare l’esecuzione di una funzione
// Scrivi una funzione creaThrottler che accetta una funzione 
// e un tempo `limite`.

// Restituisce una nuova funzione che, quando chiamata ripetutamente, 
// esegue l'operazione originale al massimo una volta ogni n millisecondi.
// Esempio di utilizzo:
// const throttledLog = creaThrottler(() => console.log("Eseguito!"), 2000);
// ​

function creaThrottler(callBackFunction, limitTime){
    let lastTime = 0;
    function limitedFunction(){
        let actualTime = Date.now()
       
            if((actualTime - lastTime) >= limitTime){
                callBackFunction();
                console.log("Funzione Eseguita");
                lastTime = Date.now();
            }else{
                console.log(`Puoi chiamarla ogni ${limitTime/1000} secondi`)
            }
            
    }
    
    return limitedFunction;
}

const ciao = ()=>console.log("ciao");
const myLimitedFunction = creaThrottler(ciao, 2_000);

setInterval(() => {
    myLimitedFunction();
}, 1_500);
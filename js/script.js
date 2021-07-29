// 1) NUMERO KM DA PERCORRERE + ETA'
var km = prompt('Quanti KM devi percorrere?');
var eta = prompt('Quanti anni hai?');
// 2) CALCOLARE PREZZO VIAGGIO (0.21€/KM) 
const PrezzoPerKm = 0.21;
var prezzopieno = km * PrezzoPerKm;
// 3) VERIFICA IDONEITA' SCONTO
var sconto;

if (eta < 18){
    sconto = (prezzopieno / 100) * 20; 
} else if (eta > 65){
    sconto = (prezzopieno / 100) * 40;
} else {
    sconto = 0;
}
var prezzoscontato = prezzopieno - sconto;

// 4) OUTPUT PREZZO FINALE (MAX 2 DECIMALI)
alert('Prezzo biglietto: ' + prezzoscontato.toFixed(2) + '€'); 

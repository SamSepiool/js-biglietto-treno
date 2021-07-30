// 1) NUMERO KM DA PERCORRERE + ETA'
var km = prompt('Quanti KM devi percorrere?');
console.log(km);
var eta = prompt('Quanti anni hai?');
console.log(eta);
// 2) CALCOLARE PREZZO VIAGGIO (0.21€/KM) 
const PrezzoPerKm = 0.21;
var prezzopieno = km * PrezzoPerKm;
console.log(prezzopieno);
// 3) VERIFICA IDONEITA' SCONTO
var sconto = 0;

if (eta < 18){
    sconto = (prezzopieno / 100) * 20; 
} else if (eta > 65){
    sconto = (prezzopieno / 100) * 40;
} 

console.log(sconto);
var prezzoscontato = prezzopieno - sconto;
console.log(prezzoscontato);
// 4) OUTPUT PREZZO FINALE (MAX 2 DECIMALI)
alert('Prezzo biglietto: ' + prezzoscontato.toFixed(2) + '€'); 

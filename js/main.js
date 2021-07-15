/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
BONUS: introduzione della parte grafica con CSS :faccia_leggermente_sorridente:
*/

// variabile km
var chilometri =parseInt(prompt('Qaunti km devi percorrere ? '));
console.log(chilometri)

// variabile eta
var eta =parseInt(prompt('Qaunti anni hai ? '));
console.log(eta)

// variabile prezzo
var prezzoKilometri = 0.21;
console.log(prezzoKilometri)


if (eta < 18) {
   var underPrezzoBiglietto = prezzoKilometri * chilometri * 0.8;
   document.getElementById('PrezzoBiglietto').innerHTML = 'Il prezzo del biglietto è di € ' + underPrezzoBiglietto;
} else if (eta >= 65) {
   var overPrezzoBiglietto = prezzoKilometri * chilometri * 0.8;
   document.getElementById('PrezzoBiglietto').innerHTML = 'Il prezzo del biglietto è di € ' + overPrezzoBiglietto;
} else {
   var totPrezzoBiglietto = prezzoKilometri * chilometri;
   document.getElementById('PrezzoBiglietto').innerHTML = 'Il prezzo del biglietto è di € ' + totPrezzoBiglietto;
}


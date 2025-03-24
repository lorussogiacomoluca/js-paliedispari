//PALINDROMI
//Creare una funzione per verificare se e' palindroma
function checkPalindromo(word){
    let check = word.split('').reverse().join('');
    return check === word ? true : false
}
//Chiedere all'utente di inserire una parola
let parola = prompt('Inserisci una parola')

//Chiamare la funzione
let isPalindroma = checkPalindromo(parola)

//Stampare messaggio all'utente
alert((isPalindroma) ? (`La stringa e' palindorma`) : (`La stringa non e' palindorma`))

//Pari e Dispari

//Prompt di scelta per l'utente tra 'pari' o 'dispari'
let sceltaPariOrDispari = prompt('Scegli tra pari o dispari').toLocaleLowerCase();
let isPari = false;
if (sceltaPariOrDispari === 'pari'){
    isPari = true;
}
alert(`Hai scelto ${sceltaPariOrDispari}`)

//Inserimento valore da 1 a 5
let sceltaNumero = parseFloat(prompt('Inserisci un numero da 1 a 5'))
alert(`Hai scelto ${sceltaNumero} - ${typeof(sceltaNumero)}`)
//Funzione per selezionare un numero random per il PC da 1 a 5
function generateRandom(){
   return Math.floor((Math.random() *5)+1)
}

//Somma dei due numeri
function sommaNumeri(a, b){
    return a + b
}

//Funzione per stabilire se la somma e' pari o dispari
function sommaPariOrDispari(a, b){
    return (sommaNumeri(a, b)%2 === 0)
}

//Funzione per stabilire il vincitore
function winnerIs(a,b){
    return (a === b) 
}


//ESECUZIONE
function playGame(sceltaPariOrDispari, isPari, sceltaNumero){
    let randNum = generateRandom();
    alert(`Numero generato ${randNum}`);
    let somma = sommaNumeri(sceltaNumero,randNum);
    alert(somma);
    let sommaEsito = sommaPariOrDispari(sceltaNumero,randNum);
    alert(`La somma e' ${(sommaEsito) ? 'dari' : 'dispari'}`)
    return (winnerIs(isPari, sommaEsito)) ? 'Player Wins' : 'Player Loses'
}


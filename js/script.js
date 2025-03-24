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

//Inserimento valore da 1 a 5
//Funzione per selezionare un numero random per il PC da 1 a 5
//Somma dei due numeri
//Funzione per stabilire se la somma e' pari o dispari
//Funzione per stabilire il vincitore
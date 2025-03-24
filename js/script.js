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
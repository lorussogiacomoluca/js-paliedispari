//PALINDROMI
//Creare una funzione per verificare se e' palindroma
function checkPalindromo(word){
    let check = word.split('').reverse().join('');
    return check === word ? true : false
}
//Chiedere all'utente di inserire una parola
let parola = prompt('Inserisci una parola')


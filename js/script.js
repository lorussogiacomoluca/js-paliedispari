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

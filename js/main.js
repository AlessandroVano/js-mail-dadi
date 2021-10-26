
/**
 * ESERCIZIO 1 MAIL
 * 
 * crea una lista contenente almeno 3 indirizzi email
 * chiedi all'utente la sua email,
 * controlla che sia nella lista di chi può accedere (lista creata soopra al punto 1)
 * stampa un messaggio appropiato sull'esito del controllo.
 */



//Creazione lista email

const email = ['fabio@hotmail.it','paolo@gmail.com', 'alessandro@outlook.it'];
console.log(email);

//riferimento html

const emailInput = document.getElementById('mail');
const accedibtn = document.querySelector('.accedi');



// Prova di accesso

 accedibtn.addEventListener('click', function(){
const mail = emailInput.value;
console.log('scelta della mail',mail);

if (mail === '') {
    alert('inserire una mail');

} else {
    let userFound = false;

    for(let i = 0; i < email.length; i++) {

        if(email[i] === mail) {
             userFound = true;
            break;
        }
    }
    console.log(userFound);
   // messaggio per accesso eseguito o negato
    if (userFound) {
        console.log('Accesso eseguito');
    } else {
        console.log('Accesso negato')
    }
}

});
 

/**
 * 
 * ESERCIZIO 2
 * 
 * GIOCO DEI DADI
 * 
 * Generare un numero random da 1 a 6, sia per il giocatore, sia per il pc.
 * stabilire il vincitore, in base a chi fa il puntaggio più alto.
 * 
 */

//riferimento
const btn = document.querySelector('.btn-generico');

//evento di click
btn.addEventListener('click', function() {
//gen random
const dadogiocatore = Math.floor( Math.random() * 6) + 1;
console.log('risultato dado giocatore',dadogiocatore);
const dadocomputer = Math.floor( Math.random() * 6) + 1;
console.log( 'risultato dado computer', dadocomputer);

if (dadogiocatore > dadocomputer) {
    alert('il giocatore ha vinto')
} else if (dadogiocatore < dadocomputer) {
alert('il computer ha vinto') 

} else {
    (dadogiocatore ===  dadocomputer)
    alert('pareggio')
}
});
















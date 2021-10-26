
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

    if (userFound) {
        console.log('Accesso eseguito');
    } else {
        console.log('Accesso negato')
    }
}

});
 







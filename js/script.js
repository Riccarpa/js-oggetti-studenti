/*
ES 1
Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
Stampare a schermo (in pagina) attraverso un ciclo for-in tutte le proprietà dell'oggetto.
ES 2
Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
Consigli del giorno:
Iniziate col riflettere sugli step che dovete eseguire, scrivendoli in italiano sotto forma di commenti
Facciamo un passo alla volta e verifichiamo i nostri passi col console.log.
Quando tutto funziona col console.log possiamo preoccuparci di eseguire in pagina!

*/

// link to html 

var studentCard = document.getElementById('student-card')

//ES.1  *********************************************************************************************

// Creo un oggetto studente
const student = {
    Name: 'Riccardo',
    Surname: 'Pagni',
    Age: 22
};

// stampare in doc tutte le proprietà con un ciclo
let studentData = '';

for (key in student) {
    studentData += '<span class = "block">' + key + ': ' + student[key] + '</span>';

}

studentCard.innerHTML = studentData;

//ES.2  *********************************************************************************************
/*
ES 1
Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
Stampare a schermo (in pagina) attraverso un ciclo for-in tutte le proprietà dell'oggetto.
*/

// link to html 

var studentCard = document.getElementById('student-card');
var studentsSection = document.getElementById('students-list');

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

/* 
ES 2
Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo 
nell’ordine: nome, cognome e età.
*/

//array di oggetti
const studentsList = [{
    Name: 'Riccardo',
    Surname: 'Pagni',
    Age: 22,

}, {
    Name: 'Mario',
    Surname: 'Rossi',
    Age: 23
}, {
    Name: 'Luca',
    Surname: 'Verdi',
    Age: 24
}];

//Ciclo su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

let currentStudentData = [];
for (i = 0; i < studentsList.length; i++) {

    let currentStudent = studentsList[i];
    currentStudentData += ('<span class = "block">' + currentStudent.Name + ' ' + currentStudent.Surname) + '</span>';


}

//Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo 
//nell’ ordine: nome, cognome e età.

const newStudent = {};

newStudent.Name = prompt('inserisci il tuo nome');
newStudent.Surname = prompt('inserisci il tuo cognome');
newStudent.Age = prompt('inserisci la tua età');

let NewStudentData = '';

for (var key in newStudent) {
    NewStudentData += '<span class = "block">' +
        key + ': ' + newStudent[key] + '</span>';

}
studentsSection.innerHTML = currentStudentData + '<hr>' + '<h2>New Student</h2>' + NewStudentData;
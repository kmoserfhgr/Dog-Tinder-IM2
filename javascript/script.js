console.log('hoi script.js')

/*DOM*/
const button_no = document.querySelector('#button_no');
const button_yes = document.querySelector('#button_yes');



/*Events*/
button_no.addEventListener('click', async function() {

})

button_yes.addEventListener('click', async function() {

})



/*Funktionen*/
function showNextDog(){

}
async function loadDog() {
    const url = 'https://dog.ceo/api/breeds/list/all';

    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error(error);
        return false;
    }
}


/*Initiale Funktion, die immer passieren soll*/
function initial () {//was jedesmal passieren soll, wenn seite geladen wird
    loadDog();
    
}

initial();




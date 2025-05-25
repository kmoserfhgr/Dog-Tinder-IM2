console.log('hoi script.js')

/*DOM*/
const button_no = document.querySelector('#button_no');
const button_yes = document.querySelector('#button_yes');



/*Events*/
button_no.addEventListener('click', async function() {
    await loadDogProfile();
});

button_yes.addEventListener('click', async function() {
    await loadDogProfile();
})



/*Funktionen*/
function showNextDog(){

}

let breeds = [];
let startX = 0;
let currentX = 0;
let isDragging = false;
const card = document.getElementById('card');

async function loadBreeds() {
  const res = await fetch('https://dog.ceo/api/breeds/list/all');
  const data = await res.json();
  breeds = Object.keys(data.message);
  loadDog();
}

async function loadDog() {
  const breed = breeds[Math.floor(Math.random() * breeds.length)];
  const res = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
  const data = await res.json();
  document.getElementById('dogImage').src = data.message;
  document.getElementById('breed').textContent = breed.charAt(0).toUpperCase() + breed.slice(1);
}

function onStart(x) {
  isDragging = true;
  startX = x;
  card.style.transition = 'none';
}

function onMove(x) {
  if (!isDragging) return;
  currentX = x - startX;
  card.style.transform = `translateX(${currentX}px) rotate(${currentX / 10}deg)`;
}

function onEnd() {
  isDragging = false;
  card.style.transition = 'transform 0.3s ease';

  if (Math.abs(currentX) > 100) {
    card.style.transform = `translateX(${currentX > 0 ? 1000 : -1000}px) rotate(${currentX / 10}deg)`;
    setTimeout(() => {
      card.style.transform = 'translateX(0) rotate(0)';
      loadDog();
    }, 300);
  } else {
    card.style.transform = 'translateX(0) rotate(0)';
  }
  currentX = 0;
}

// Events für Touch + Maus
card.addEventListener('touchstart', (e) => onStart(e.touches[0].clientX));
card.addEventListener('touchmove', (e) => onMove(e.touches[0].clientX));
card.addEventListener('touchend', onEnd);

card.addEventListener('mousedown', (e) => onStart(e.clientX));
window.addEventListener('mousemove', (e) => onMove(e.clientX));
window.addEventListener('mouseup', onEnd);

loadBreeds();






/*Initiale Funktion, die immer passieren soll*/
function initial () {//was jedesmal passieren soll, wenn seite geladen wird
    loadDog();
    
}

initial();




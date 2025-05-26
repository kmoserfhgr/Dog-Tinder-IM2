console.log('hoi script.js');

let likedDogs = []; // Speicherung gelikter Hunde
let likeCounter = 0;
let matchAfter = getRandomMatchNumber(); // Wie viele Likes bis zum nächsten Match

function getRandomMatchNumber() {
  return Math.floor(Math.random() * 9) + 2; // Zufallszahl zwischen 2 und 10
}

/*DOM*/
const button_no = document.querySelector('#button_no');
const button_yes = document.querySelector('#button_yes');

/*Events*/

const buttonCross = document.querySelector('.button_cross');

buttonCross.addEventListener('click', function () {
  window.location.href = 'upassender_match.html';
});

button_no.addEventListener('click', async function () {
  await loadDogProfile();
});

button_yes.addEventListener('click', async function () {
  // aktuelles Hundprofil speichern
  const currentDog = {
    name: document.querySelector('#dog_name').innerText,
    image: document.querySelector('#dog_image').src
  };
  
  likedDogs.push(currentDog);
  likeCounter++;

  if (likeCounter >= matchAfter) {
    showMatch(currentDog);
    // Reset für den nächsten Match-Zyklus
    likeCounter = 0;
    matchAfter = getRandomMatchNumber();
  } else {
    await loadDogProfile(); // nächster Hund
  }
});

function showMatch(dog) {
  // Konfiguration ausblenden
  document.querySelector('#configuration').classList.add('hidden');
  // Match-Sektion anzeigen
  const matchSection = document.querySelector('#match');
  matchSection.classList.remove('hidden');
  // Match-Infos einfügen
  document.querySelector('#match_name').innerText = dog.name;
  document.querySelector('#match_image').src = dog.image;
  document.querySelector('#match').classList.remove ('hidden');
}

// Eventlistener für "Nachricht senden"
document.querySelector('.button_nachricht_senden').addEventListener('click', function () {
document.querySelector('#visitenkarte').classList.remove ('hidden');
  // Match-Bereich ausblenden
  document.querySelector('#match').classList.add('hidden');
  // Visitenkarte einblenden
  document.querySelector('#visitenkarte').classList.remove('hidden');

  // Name und Bild aus dem Match übernehmen
  const matchName = document.querySelector('#match_name').innerText;
  const matchImage = document.querySelector('#match_image').src;

  document.querySelector('#visitenkarte #match_name').innerText = matchName;
  document.querySelector('#visitenkarte #match_image').src = matchImage;

  // Zufällig ausgewählten Besitzer wählen
  const randomOwner = besitzer_card[Math.floor(Math.random() * besitzer_card.length)];

  // Besitzerinformationen anzeigen
  document.querySelector('#owner_name').innerText = `Name: ${randomOwner.name}`;
  document.querySelector('#owner_phone').innerText = `Telefon: ${randomOwner.phone}`;
  document.querySelector('#owner_email').innerText = `E-Mail: ${randomOwner.email}`;
  document.querySelector('#owner_location').innerText = `Ort: ${randomOwner.location}`;
});


/*Array mit Hundedaten*/
const races = [
  {
    name: 'Affenpinscher',
    slug: 'affenpinscher'
  },
  {
    name: 'African',
    slug: 'african'
  },
  {
    name: 'Airedale',
    slug: 'airedale'
  },
  {
    name: 'Akita',
    slug: 'akita'
  },
  {
    name: 'Appenzeller',
    slug: 'appenzeller'
  },
  {
    name: 'Australian',
    slug: 'australian'
  },
  {
    name: 'Australian',
    slug: 'australian'
  },
  {
    name: 'Bakharwal',
    slug: 'bakharwal'
  },
  {
    name: 'Basenji',
    slug: 'basenji'
  },
  {
    name: 'Beagle',
    slug: 'beagle'
  },
  {
    name: 'Bluetick',
    slug: 'bluetick'
  },
  {
    name: 'Borzoi',
    slug: 'borzoi'
  },
  {
    name: 'Bouvier',
    slug: 'bouvier'
  },
  {
    name: 'Boxer',
    slug: 'boxer'
  },
  {
    name: 'Brabancon',
    slug: 'brabancon'
  },
  {
    name: 'Briard',
    slug: 'briard'
  },
  {
    name: 'Buhund',
    slug: 'buhund'
  },
  {
    name: 'Bulldog',
    slug: 'bulldog'
  },
  {
    name: 'Bulldog',
    slug: 'bulldog'
  },
  {
    name: 'Bulldog',
    slug: 'bulldog'
  },
  {
    name: 'Bullterrier',
    slug: 'bullterrier'
  },
  {
    name: 'Cattledog',
    slug: 'cattledog'
  },
  {
    name: 'Cavapoo',
    slug: 'cavapoo'
  },
  {
    name: 'Chihuahua',
    slug: 'chihuahua'
  },
  {
    name: 'Chippiparai',
    slug: 'chippiparai'
  },
  {
    name: 'Chow',
    slug: 'chow'
  },
  {
    name: 'Clumber',
    slug: 'clumber'
  },
  {
    name: 'Cockapoo',
    slug: 'cockapoo'
  },
  {
    name: 'Collie',
    slug: 'collie'
  },
  {
    name: 'Coonhound',
    slug: 'coonhound'
  },
  {
    name: 'Corgi',
    slug: 'corgi'
  },
  {
    name: 'Cotondetulear',
    slug: 'cotondetulear'
  },
  {
    name: 'Dachshund',
    slug: 'dachshund'
  },
  {
    name: 'Dalmatian',
    slug: 'dalmatian'
  },
  {
    name: 'Dane',
    slug: 'dane'
  },
  {
    name: 'Danish',
    slug: 'danish'
  },
  {
    name: 'Deerhound',
    slug: 'deerhound'
  },
  {
    name: 'Dhole',
    slug: 'dhole'
  },
  {
    name: 'Dingo',
    slug: 'dingo'
  },
  {
    name: 'Doberman',
    slug: 'doberman'
  },
  {
    name: 'Elkhound',
    slug: 'elkhound'
  },
  {
    name: 'Entlebucher',
    slug: 'entlebucher'
  },
  {
    name: 'Eskimo',
    slug: 'eskimo'
  },
  {
    name: 'Finnish',
    slug: 'finnish'
  },
  {
    name: 'Frise',
    slug: 'frise'
  },
  {
    name: 'Gaddi',
    slug: 'gaddi'
  },
  {
    name: 'Germanshepherd',
    slug: 'germanshepherd'
  },
  {
    name: 'Greyhound',
    slug: 'greyhound'
  },
  {
    name: 'Greyhound',
    slug: 'greyhound'
  },
  {
    name: 'Groenendael',
    slug: 'groenendael'
  },
  {
    name: 'Havanese',
    slug: 'havanese'
  },
  {
    name: 'Hound',
    slug: 'hound'
  },
  {
    name: 'Hound',
    slug: 'hound'
  },
  {
    name: 'Hound',
    slug: 'hound'
  },
  {
    name: 'Hound',
    slug: 'hound'
  },
  {
    name: 'Hound',
    slug: 'hound'
  },
  {
    name: 'Hound',
    slug: 'hound'
  },
  {
    name: 'Hound',
    slug: 'hound'
  },
  {
    name: 'Husky',
    slug: 'husky'
  },
  {
    name: 'Keeshond',
    slug: 'keeshond'
  },
  {
    name: 'Kelpie',
    slug: 'kelpie'
  },
  {
    name: 'Kombai',
    slug: 'kombai'
  },
  {
    name: 'Komondor',
    slug: 'komondor'
  },
  {
    name: 'Kuvasz',
    slug: 'kuvasz'
  },
  {
    name: 'Labradoodle',
    slug: 'labradoodle'
  },
  {
    name: 'Labrador',
    slug: 'labrador'
  },
  {
    name: 'Leonberg',
    slug: 'leonberg'
  },
  {
    name: 'Lhasa',
    slug: 'lhasa'
  },
  {
    name: 'Malamute',
    slug: 'malamute'
  },
  {
    name: 'Malinois',
    slug: 'malinois'
  },
  {
    name: 'Maltese',
    slug: 'maltese'
  },
  {
    name: 'Mastiff',
    slug: 'mastiff'
  },
  {
    name: 'Mastiff',
    slug: 'mastiff'
  },
  {
    name: 'Mastiff',
    slug: 'mastiff'
  },
  {
    name: 'Mastiff',
    slug: 'mastiff'
  },
  {
    name: 'Mexicanhairless',
    slug: 'mexicanhairless'
  },
  {
    name: 'Mix',
    slug: 'mix'
  },
  {
    name: 'Mountain',
    slug: 'mountain'
  },
  {
    name: 'Mountain',
    slug: 'mountain'
  },
  {
    name: 'Mudhol',
    slug: 'mudhol'
  },
  {
    name: 'Newfoundland',
    slug: 'newfoundland'
  },
  {
    name: 'Otterhound',
    slug: 'otterhound'
  },
  {
    name: 'Ovcharka',
    slug: 'ovcharka'
  },
  {
    name: 'Papillon',
    slug: 'papillon'
  },
  {
    name: 'Pariah',
    slug: 'pariah'
  },
  {
    name: 'Pekinese',
    slug: 'pekinese'
  },
  {
    name: 'Pembroke',
    slug: 'pembroke'
  },
  {
    name: 'Pinscher',
    slug: 'pinscher'
  },
  {
    name: 'Pitbull',
    slug: 'pitbull'
  },
  {
    name: 'Pointer',
    slug: 'pointer'
  },
  {
    name: 'Pointer',
    slug: 'pointer'
  },
  {
    name: 'Pomeranian',
    slug: 'pomeranian'
  },
  {
    name: 'Poodle',
    slug: 'poodle'
  },
  {
    name: 'Poodle',
    slug: 'poodle'
  },
  {
    name: 'Poodle',
    slug: 'poodle'
  },
  {
    name: 'Poodle',
    slug: 'poodle'
  },
  {
    name: 'Pug',
    slug: 'pug'
  },
  {
    name: 'Puggle',
    slug: 'puggle'
  },
  {
    name: 'Pyrenees',
    slug: 'pyrenees'
  },
  {
    name: 'Rajapalayam',
    slug: 'rajapalayam'
  },
  {
    name: 'Redbone',
    slug: 'redbone'
  },
  {
    name: 'Retriever',
    slug: 'retriever'
  },
  {
    name: 'Retriever',
    slug: 'retriever'
  },
  {
    name: 'Retriever',
    slug: 'retriever'
  },
  {
    name: 'Retriever',
    slug: 'retriever'
  },
  {
    name: 'Ridgeback',
    slug: 'ridgeback'
  },
  {
    name: 'Rottweiler',
    slug: 'rottweiler'
  },
  {
    name: 'Saluki',
    slug: 'saluki'
  },
  {
    name: 'Samoyed',
    slug: 'samoyed'
  },
  {
    name: 'Schipperke',
    slug: 'schipperke'
  },
  {
    name: 'Schnauzer',
    slug: 'schnauzer'
  },
  {
    name: 'Schnauzer',
    slug: 'schnauzer'
  },
  {
    name: 'Segugio',
    slug: 'segugio'
  },
  {
    name: 'Setter',
    slug: 'setter'
  },
  {
    name: 'Setter',
    slug: 'setter'
  },
  {
    name: 'Setter',
    slug: 'setter'
  },
  {
    name: 'Sharpei',
    slug: 'sharpei'
  },
  {
    name: 'Sheepdog',
    slug: 'sheepdog'
  },
  {
    name: 'Sheepdog',
    slug: 'sheepdog'
  },
  {
    name: 'Sheepdog',
    slug: 'sheepdog'
  },
  {
    name: 'Shiba',
    slug: 'shiba'
  },
  {
    name: 'Shihtzu',
    slug: 'shihtzu'
  },
  {
    name: 'Spaniel',
    slug: 'spaniel'
  },
  {
    name: 'Spaniel',
    slug: 'spaniel'
  },
  {
    name: 'Spaniel',
    slug: 'spaniel'
  },
  {
    name: 'Spaniel',
    slug: 'spaniel'
  },
  {
    name: 'Spaniel',
    slug: 'spaniel'
  },
  {
    name: 'Spaniel',
    slug: 'spaniel'
  },
  {
    name: 'Spaniel',
    slug: 'spaniel'
  },
  {
    name: 'Spitz',
    slug: 'spitz'
  },
  {
    name: 'Spitz',
    slug: 'spitz'
  },
  {
    name: 'Springer',
    slug: 'springer'
  },
  {
    name: 'Stbernard',
    slug: 'stbernard'
  },
  {
    name: 'Terrier',
    slug: 'terrier'
  },
  {
    name: 'Terrier',
    slug: 'terrier'
  },
  {
    name: 'Terrier',
    slug: 'terrier'
  },
  {
    name: 'Terrier',
    slug: 'terrier'
  },
  {
    name: 'Terrier',
    slug: 'terrier'
  },
  {
    name: 'Terrier',
    slug: 'terrier'
  },
  {
    name: 'Terrier',
    slug: 'terrier'
  },
  {
    name: 'Terrier',
    slug: 'terrier'
  },
  {
    name: 'Terrier',
    slug: 'terrier'
  },
  {
    name: 'Terrier',
    slug: 'terrier'
  },
  {
    name: 'Terrier',
    slug: 'terrier'
  },
  {
    name: 'Terrier',
    slug: 'terrier'
  },
  {
    name: 'Terrier',
    slug: 'terrier'
  },
  {
    name: 'Terrier',
    slug: 'terrier'
  },
  {
    name: 'Terrier',
    slug: 'terrier'
  },
  {
    name: 'Terrier',
    slug: 'terrier'
  },
  {
    name: 'Terrier',
    slug: 'terrier'
  },
  {
    name: 'Terrier',
    slug: 'terrier'
  },
  {
    name: 'Terrier',
    slug: 'terrier'
  },
  {
    name: 'Terrier',
    slug: 'terrier'
  },
  {
    name: 'Terrier',
    slug: 'terrier'
  },
  {
    name: 'Terrier',
    slug: 'terrier'
  },
  {
    name: 'Terrier',
    slug: 'terrier'
  },
  {
    name: 'Tervuren',
    slug: 'tervuren'
  },
  {
    name: 'Vizsla',
    slug: 'vizsla'
  },
  {
    name: 'Waterdog',
    slug: 'waterdog'
  },
  {
    name: 'Weimaraner',
    slug: 'weimaraner'
  },
  {
    name: 'Whippet',
    slug: 'whippet'
  },
  {
    name: 'Wolfhound',
    slug: 'wolfhound'
  },
];

/*Array mit Besitzerdaten*/
  const besitzer_card = [
  {
    name: "Adriel",
    phone: "+41 78 123 45 67",
    email: "adriel.hundefan@kuhmail.ch",
    location: "6023 Rothenburg"
  },
  {
    name: "Adelina",
    phone: "+41 76 987 65 43",
    email: "adelina.schoggi@swissmail.ch",
    location: "3436 Zollbrück"
  },
  {
    name: "Ali",
    phone: "+41 77 135 79 24",
    email: "ali.fondue@bergpost.ch",
    location: "6072 Sachseln"
  },
  {
    name: "Alina",
    phone: "+41 79 246 81 35",
    email: "alina.gipfel@alpenmail.ch",
    location: "3770 Zweisimmen"
  },
  {
    name: "Alyah",
    phone: "+41 78 963 85 24",
    email: "alyah.zurichsee@kuhpost.ch",
    location: "4413 Büren SO"
  },
  {
    name: "Ammar",
    phone: "+41 76 852 96 37",
    email: "ammar.kaffee@swissmail.ch",
    location: "3855 Brienz BE"
  },
  {
    name: "Angelina",
    phone: "+41 77 159 35 72",
    email: "angelina.schokolade@alp.ch",
    location: "5053 Staffelbach"
  },
  {
    name: "Aurora",
    phone: "+41 78 753 15 94",
    email: "aurora.bellavista@kuhmail.ch",
    location: "5630 Muri AG"
  },
  {
    name: "Belinda",
    phone: "+41 79 357 95 12",
    email: "belinda.alpaca@swissmail.ch",
    location: "3510 Konolfingen"
  },
  {
    name: "Denja",
    phone: "+41 76 789 45 61",
    email: "denja.käse@bergpost.ch",
    location: "6460 Altdorf UR"
  },
  {
    name: "Domenico",
    phone: "+41 77 246 89 75",
    email: "domenico.yodel@alpenmail.ch",
    location: "6500 Bellinzona"
  },
  {
    name: "Elena",
    phone: "+41 78 951 35 72",
    email: "elena.heidi@kuhpost.ch",
    location: "8260 Stein am Rhein"
  },
  {
    name: "Elias",
    phone: "+41 76 654 32 10",
    email: "elias.matterhorn@swissmail.ch",
    location: "3800 Interlaken"
  },
  {
    name: "Ismael",
    phone: "+41 77 741 85 29",
    email: "ismael.raclette@alp.ch",
    location: "3906 Saas-Fee"
  },
  {
    name: "Kaya",
    phone: "+41 78 951 75 38",
    email: "kaya.skihase@bergpost.ch",
    location: "3766 Boltigen"
  },
  {
    name: "Lorena",
    phone: "+41 79 123 78 94",
    email: "lorena.kuhbauerin@kuhmail.ch",
    location: "9050 Appenzell"
  },
  {
    name: "Melina",
    phone: "+41 76 753 95 14",
    email: "melina.alpenglühn@swissmail.ch",
    location: "3116 Kirchenthurnen"
  },
  {
    name: "Nathalie",
    phone: "+41 77 852 74 16",
    email: "nathalie.schoggiliebe@alp.ch",
    location: "6032 Emmen"
  },
  {
    name: "Nora",
    phone: "+41 78 951 35 74",
    email: "nora.cowgirl@bergpost.ch",
    location: "6197 Schangnau"
  },
  {
    name: "Robin",
    phone: "+41 76 789 12 34",
    email: "robin.bergguru@kuhmail.ch",
    location: "3803 Beatenberg"
  },
  {
    name: "Sheyla",
    phone: "+41 77 258 74 19",
    email: "sheyla.jodelqueen@alpenmail.ch",
    location: "5033 Buchs AG"
  },
  {
    name: "Juls",
    phone: "+41 78 753 15 98",
    email: "juls.schneeengel@swissmail.ch",
    location: "3998 Reckingen-Gluringen"
  },
  {
    name: "Kae",
    phone: "+41 76 147 25 83",
    email: "kae.sennhütte@kuhmail.ch",
    location: "3435 Ramsei"
  },
  {
    name: "Naim",
    phone: "+41 78 852 96 31",
    email: "naim.bergliebe@alpenmail.ch",
    location: "7017 Flims Dorf"
  },
  {
    name: "Aarti",
    phone: "+41 79 951 35 78",
    email: "aarti.glacier@kuhpost.ch",
    location: "7546 Ardez"
  },
  {
    name: "Rahel",
    phone: "+41 76 963 85 21",
    email: "rahel.gipfelträumer@swissmail.ch",
    location: "8897 Flums"
  },
  {
    name: "Lou",
    phone: "+41 78 456 78 90",
    email: "lou.bergzauber@kuhmail.ch",
    location: "3904 Naters"
  }
];

function getRandomRace() {
  const index = Math.floor(Math.random() * races.length); // erzeugt Zufallszahl der Bilder zwischen 0 und 1
  return races[index];
}

/* API-Aufruf */
async function loadRandomDogImage(random_dog) {
  const url = `https://dog.ceo/api/breed/${random_dog.slug}/images/random`; //erzeugt aus API-URL ein zufälliges Bild
  console.log(url);
  try {
    const response = await fetch(url); // fetch holt die Daten
    return await response.json(); // json konvertiert sie in ein nutzbares Objekt
  } catch (error) {
    console.error(error);
    return false;
  }
}

/* Lade Hundefoto + Infos */
async function loadDogProfile() { //wählt eine zufällige Hunderasse.
  const random_dog = getRandomRace();
  const data = await loadRandomDogImage(random_dog); //holt ein Bild der vorhin ausgewählten Rasse
  if (data && data.message) {
    console.log('Zufälliger Hund:', random_dog.name);
    console.log('Bild:', data.message);
    // Beispiel: Bild anzeigen
    const img = document.querySelector('#dog_image');
    if (img) {
      img.src = data.message;
      img.alt = random_dog.name;
    }
    const name = document.querySelector('#dog_name');
    name.innerHTML = random_dog.name;
  }
}


/*Swipe Events*/
const card = document.querySelector('.card');

// Touch-Variablen
let startX = 0;
let endX = 0;

// Swipe-Variablen
let isDragging = false;

// Touch-Start
card.addEventListener('touchstart', (e) => {
  startX = e.changedTouches[0].screenX;
});

// Touch-Ende
card.addEventListener('touchend', async (e) => {
  endX = e.changedTouches[0].screenX;
  handleSwipe();
});

// Maus gedrückt
card.addEventListener('mousedown', (e) => {
  startX = e.clientX;
  isDragging = true;
});

// Maus bewegt
card.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  // Optional: live anzeigen wie weit gezogen wurde
});

// Maus losgelassen
card.addEventListener('mouseup', (e) => {
  if (!isDragging) return;
  const endX = e.clientX;
  const diff = endX - startX;

  if (diff > 50) {
    console.log('Swipe nach rechts (Like)');
    button_yes.click();
  } else if (diff < -50) {
    console.log('Swipe nach links (Dislike)');
    button_no.click();
  }

  isDragging = false;
});

// Tastatursteuerung (← = nein, → = ja)
document.addEventListener('keydown', async (e) => {
  if (e.key === 'ArrowLeft') {
    await loadDogProfile(); // Dislike
  } else if (e.key === 'ArrowRight') {
    // Like
    const currentDog = {
      name: document.querySelector('#dog_name').innerText,
      image: document.querySelector('#dog_image').src
    };
    likedDogs.push(currentDog);
    likeCounter++;
    if (likeCounter >= matchAfter) {
      showMatch(currentDog);
      likeCounter = 0;
      matchAfter = getRandomMatchNumber();
    } else {
      await loadDogProfile();
    }
  }
});

// Swipe auswerten
async function handleSwipe() {
  const diff = endX - startX;
  if (diff > 50) {
    button_yes.click();
    animateSwipe('right');
  } else if (diff < -50) {
    button_no.click();
    animateSwipe('left');
  }
}

function animateSwipe(direction) {
  card.classList.remove('swipe-left', 'swipe-right');
  void card.offsetWidth; // Repaint-Reset
  card.classList.add(direction === 'left' ? 'swipe-left' : 'swipe-right');
}

/*Initiale Funktion beim Seitenladen*/
function initial() {
  loadDogProfile();
}

initial();

# Dog-Tinder Leistungsnachweis IM2 
Von Kaya Moser und Lou Gmür 


# Kurzbeschreibung des Projekts
Diese responsive Website ist eine humorvolle Hommage an Tinder – jedoch für Hunde. Statt Menschen werden Hundeprofile aus der öffentlichen Dog API (https://www.freepublicapis.com/dog-api) präsentiert. Nutzer:innen können per Swipe oder Klick durch Profile stöbern und bei einem Match Kontaktdaten des Besitzers aufrufen. Ziel ist es, auf spielerische Weise Hunde an neue Besitzer:innen zu vermitteln. 

# Learnings und Schwierigkeiten | Kaya Moser
JavaScript war für mich neu, und der Einstieg in diese Sprache stellte sich als durchaus zeitintensiv heraus. Viele Konzepte wie Eventlistener, DOM-Manipulation oder asynchrone Funktionen waren anfangs schwer nachvollziehbar und erforderten ein gewisses Vorstellungsvermögen, um zu verstehen, wie alles zusammenspielt. Ich habe schnell gemerkt, dass weniger oft mehr ist – gerade bei der Gestaltung von Benutzeroberflächen oder in der Struktur des Codes. Eine der grössten Herausforderungen bestand für mich darin, den richtigen Aufbau eines Skripts zu erkennen: Was kommt zuerst? Wie strukturiert man Funktionen sinnvoll? Welche Daten gehören wohin? Es war nicht immer einfach, eine klare Linie zu finden, die logisch funktioniert und gleichzeitig wartbar bleibt.

Besonders im Team wurde deutlich, wie wichtig eine gemeinsame Sprache im Code ist – sei es in der Benennung von Variablen oder in der allgemeinen Struktur. Ohne klare Absprachen fällt es schwer, sich im Code anderer zurechtzufinden, was wiederum Zeit kostet und die Zusammenarbeit erschwert. Ich habe gelernt, dass es enorm hilft, Standards zu definieren und sich daran zu halten – oder alternativ einen eigenen Stil zu entwickeln und diesen konsequent durchzuziehen. Insgesamt war es ein intensiver Lernprozess, der mir aber viel über strukturiertes Arbeiten, saubere Logik und Teamkommunikation im Code vermittelt hat.



# Learnings und Schwierigkeiten | Lou Gmür 
Die Arbeit mit JavaScript war neu und herausfordernd. Es zeigte sich, dass eine frühzeitige Absprache zu Naming und Struktur-Aufbau wichtig gewesen wäre, um einen sauberen, verständlichen Code zu schreiben.


# Benutzte Ressourcen und Prompts

# Ressourcen
- Visual Studio Code 
- GitHub
- Figma Turtorial (https://shiftnudge.com/figma/101?ck_subscriber_id=3258603183&sh_kit=95ef45ad6356b75ca6fd340213b50806a8bf33f6912e6f02b6c6c35f3c6397c7)
- Chat GPT

# Verwendete Prompts für ChatGPT
- Wie kann ich bei der JavaScript-Funktion „const random_dog” den Zufallsgenerator aktivieren, sodass die Sachen zufällig ausgespielt werden und nicht mit der Zahl 1? Wir haben 161 Datenpunkte. 

- Wir haben eine Box mit Shadow, die wir mit einer großen Grafik formatiert haben. Unser Bild liegt in einer darüberliegenden Box. Ich möchte, dass das Bild die Box komplett ausfüllt. Wie schaffe ich das im CSS? 

- Erfinde mir für die Namen Adriel, Adelina, Ali, Alina, Alyah, Ammar, Angelina, Aurora, Belinda, Denja, Domenico, Elena, Elias, Ismael, Kaya, Lorena, Melina, Nathalie, Nora, Robin, Sheyla, Juls, Kae, Naim, Aarti, Rahel und Lou jeweils eine Telefonnummer, eine E-Mail-Adresse und eine Postleitzahl mit Ort.

- Wie sieht das CSS für den Tinder-Button „Konto erstellen“ aus?

- Wie kann ich die Textfelder „Name“, „Telefon“, „E-Mail“ und „Ort“ untereinander in einer Spalte anordnen, sodass in der zweiten Spalte dahinter je nach Ausspielung des Arrays die dazugehörigen Daten erscheinen? Ich werde dir anschliessend die dazugehörigen Codeausschnitte senden. Bitte sage mir anschliessend, wie ich die beiden Spalten linksbündig und untereinander im CSS angleichen kann.

- Wenn ich bei der Besitzerkarte über den button Kreuz hovere, erscheint bei mir nicht nur das Kreuz sondern der ganze weisse Kasten. Woran liegt das? -> Code eingefügt
- Erkläre mir diese einzelnen Elemente. -> Diverse Elemente eingefügt
- Wozu braucht es diese Funktion? -> Funktion eingefügt
- Was ist der Unterschied zwischen diesen beiden: 

card.addEventListener('touchstart', (e) => {  
  startX = e.changedTouches[0].screenX;       
  cardContent.classList.add('dragging');      
});


card.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  cardContent.classList.add('dragging');
});

- Kannst du mir diese Elemente sinnvoll strukturieren-> Elemente eingefügt
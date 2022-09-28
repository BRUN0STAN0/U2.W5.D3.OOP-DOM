let intervallo;

let counter = 0;
let trasla = 0;

function indietro() {
    if (counter == 0) {
        trasla = -1000;
        counter = 5;
    } else if (counter != -1) {
        trasla += 200;
        counter--;
    }
    let images = document.getElementsByClassName("images")
    for (let image of images) {
        image.style.transform = `translateX(${trasla}px)`;
    }
}

function avanti() {
    if (counter >= 5) {
        trasla = 0;
        counter = 0;
    } else if (counter != -1) {
        trasla += 200;
        counter++;
    }
    let images = document.getElementsByClassName("images")
    for (let image of images) {
        image.style.transform = `translateX(-${trasla}px)`;
    }
}

function loop() {
    intervallo = setInterval(avanti, 1000);
}










//! CONSOLE
function showCounterConsole() {
    console.log(counter);
 }
 setInterval(showCounterConsole, 1000);

//! ESEMPIO DI CLASSE PERSONA.

class Persona {
    constructor(age, hair, eyes){
        this.age = age;
        this.hair = hair;
        this.eyes = eyes;
    }
}

let GiovanniUrso = new Persona(30, "castani", "marroni")
let BrunoStano = new Persona()


// ESEMPIO DI OGGETTO
let Persona1 = {
    name: "Bruno",
    surname: "stano",
    age: 28,
}

Persona1.name

// ESEMPIO DI ARRAY
let persona2 = ["Bruno","Stano", 28]

for (let i=0; i < persona2.length; i++) {
    persona2[i] // BrunoStano28
}


persona2[0] //Bruno



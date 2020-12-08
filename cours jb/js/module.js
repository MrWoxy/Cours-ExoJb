"use strict";


// Fonction constructeur
// function Pen(brand, color) {
//     this.color = color;
//     this.brand = brand;

//     this.display = function () {
//         console.log(`Mon crayon, c'est un ${this.brand} ${this.color}`);
//     }
// }


//Classe
class Pen {
    constructor(brand, color) {
        this.color = color;
        this.brand = brand;
    }

    display() {
        console.log(`Mon crayon, c'est un ${this.brand} ${this.color}`); 
    }
}

class Tippex extends Pen {
    constructor(brand, color, qty) {
        super(brand, color);

        this.chemicalQuantity = qty;
    }
    displayQty() {
        console.log(`Il reste ${this.chemicalQuantity}cl dans le Tippex`);
    }
}

const pencil = new Pen("BIC","black");
pencil.display();
// pencil.displayQty(); -> instance de Pen donc pas de displayQty

const blanco = new Tippex("Supra", "rouge", 20);
blanco.displayQty();
blanco.display();



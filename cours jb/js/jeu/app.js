"use strict";
import {showFrom1toNumber} from "./loop.js";
// import {start, end} from "./game.js";

// start();
// end();
/*
Dans un fichier loop.js, vous allez créer une fonction qui prend un nombre
Et qui affiche de 1 à ce nombre dans la console

Demander dans app.js un nombre à l'utilisateur, et en profiter
pour exécuter dans app.js la fonction récupérée depuis loop.js
*/

const nb = Number(prompt("donnez un nombre"));
console.log(nb)

showFrom1toNumber(nb);
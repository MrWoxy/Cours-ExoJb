"use strict";


// Structure ternaire - Opérateur conditionnel

const isMember = true;
let cost;

if(isMember) { 
    cost = 5; 
} 
else { 
    cost = 12; 
}


// condition ? exprSiVrai : exprSiFaux
// isMember ? cost=5 : cost=12;
cost = isMember ? 5 : 12;

// const isMember = true;
// const cost = isMember ? 5 : 12;



/* 
  Checker si un nombre est pair ou impair
*/

// nb%2 === 0  -> nb est pair   8/2 = 4x2 + 0
// nb%2 !== 0  -> nb est impair 13/2 = 6x2 + 1

const nb = Number(prompt("Entrez votre nombre"));

const isPair = nb%2 === 0 ? "Mon nombre est pair" : "Mon nombre est impair";
alert(isPair);

// nb%2 === 0 ? alert("Mon nombre est pair") : alert("Mon nombre est impair");


/*
    Checker si une personne est majeure ou non
*/

const age = Number(prompt("Entrez votre âge"));

// 1ère façon
age >= 18 ? alert("Majeure") : alert("Mineure");

// 2ème façon
const isAdult = age >=18 ? "Majeure" : "Mineure";
alert(isAdult);

// 3ème façon 
alert(age>=18 ? "Majeure": "Mineure");
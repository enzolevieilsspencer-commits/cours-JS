/* PHRASE DE PRESENTATION */

let firstName = prompt("Quel est votre prenom ?");

let name = prompt("Quel est votre nom ?");

let birthYear = prompt("Quel est votre annee de naissance ?");

let ville = prompt("Quelle est votre ville de naissance?");

let currentYear = new Date().getFullYear();

let age = currentYear - birthYear;

console.log(
  `Bonjour ${firstName} ${name} vous avez ${age} ans et vous êtes né à ${ville}`
);

/* SWAP DE VARIABLES */

let a = 1;
let b = 2;
let c = a;
a = b;
b = c;

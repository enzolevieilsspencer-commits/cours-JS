//PHRASE DE PRESENTATION //
/*
let firstName = prompt("Quel est votre prenom ?");

let name = prompt("Quel est votre nom ?");

let birthYear = prompt("Quel est votre annee de naissance ?");

let ville = prompt("Quelle est votre ville de naissance?");

let currentYear = new Date().getFullYear();

let age = currentYear - birthYear;

console.log(
  `Bonjour ${firstName} ${name} vous avez ${age} ans et vous êtes né à ${ville}`
);

// SWAP DE VARIABLES
let a = 1;
let b = 2;
let c = a;
a = b;
b = c;

// CONDITION //

// EXERCICE 2.1 //
let number = prompt("Quel est votre nombre ?");

if (number > 0) {
  console.log("Votre nombre est positif");
} else {
  console.log("Votre nombre est negatif");
}

//EXERCICE 2.2 //
let nb1 = prompt("Quel est votre premier nombre ?");
let nb2 = prompt("Quel est votre deuxieme nombre ?");

if ((nb1 > 0 && nb2 > 0) || (nb1 < 0 && nb2 < 0)) {
  console.log("Le produit de vos deux nombres est positif");
} else if (nb1 == 0 || nb2 == 0) {
  console.log("Le produit de vos deux nombres est nul");
} else {
  console.log("Le produit de vos deux nombres est negatif");
  let name1 = prompt("Quel est votre premier nom ?");
}

// EXERCICE 2.3 //
let name1 = prompt("Quel est votre premier nom ?");
let name2 = prompt("Quel est votre deuxieme nom ?");
let name3 = prompt("Quel est votre troisieme nom ?");

if (name1 < name2 && name2 < name3) {
  console.log("Les noms sont rangés dans l'ordre alphabétique.");
} else {
  console.log("Les noms ne sont pas rangés dans l'ordre alphabétique.");
}

// EXERCICE 2.4 //
number = prompt("Quel est votre nombre ?");

if (number === 0) {
  console.log("Votre nombre est nul");
} else if (number > 0) {
  console.log("Votre nombre est positif");
} else {
  console.log("Votre nombre est negatif");
}

// EXERCICE 2.5 //
nb1 = prompt("Quel est votre premier nombre ?");
nb2 = prompt("Quel est votre deuxieme nombre ?");

if (nb1 * nb2 === 0) {
  console.log("Le produit de vos deux nombres est nul");
} else if (nb1 * nb2 > 0) {
  console.log("Le produit de vos deux nombres est positif");
} else {
  console.log("Le produit de vos deux nombres est negatif");
}

// EXERCICE 2.6 //
age = prompt("Quelle est l'age de cette enfant ?");

if (age >= 6 && age <= 7) {
  console.log("Cette enfant est dans la catégorie des poussin");
} else if (age >= 8 && age <= 9) {
  console.log("cette enfant est dans la catégorie des pupilles");
} else if (age >= 10 && age <= 11) {
  console.log("cette enfant est dans la catégorie des Minimes");
} else if (age >= 12) {
  console.log("cette enfant est dans la catégorie des Cadet");
}

// EXERCICE 2.7 //
number = Number(prompt("Entrez un nombre entre 0 et 9?"));

if (number === 0) {
  console.log("zéro");
} else if (number === 1) {
  console.log("un");
} else if (number === 2) {
  console.log("deux");
} else if (number === 3) {
  console.log("trois");
} else if (number === 4) {
  console.log("quatre");
} else if (number === 5) {
  console.log("cinq");
} else if (number === 6) {
  console.log("six");
} else if (number === 7) {
  console.log("sept");
} else if (number === 8) {
  console.log("huit");
} else if (number === 9) {
  console.log("neuf");
} else {
  console.log("Error");
}

// EXERCICE 2.8 //
let anneA = prompt("chosir une année");

if (anneA % 4 === 0 && (anneA % 100 !== 0 || anneA % 400 === 0)) {
  console.log("Cette année est bissextile");
} else {
  console.log("Cette année n'est pas bissextile");
}

// EXERCICE 2.9 //
let valeur = Number(prompt("Entrez une valeur entre 1 et 9"));

if (valeur < 1) {
  console.log("Valeur invalide");
} else if (valeur == 1) {
  console.log("Micro tremblement de terre, non ressenti");
} else if (valeur == 2) {
  console.log("Très mineur. non ressenti mais détecté ");
} else if (valeur == 3) {
  console.log("Mineur. causant rarement des dommages");
} else if (valeur == 4) {
  console.log("Léger. Secousses notables d’objets à l’intérieur des maisons");
} else if (valeur == 5) {
  console.log("Modéée. Légers dommages aux édifices bien construits ");
} else if (valeur == 6) {
  console.log(
    "Fort. Destructeur dans des zones allant jusqu’à 180 kilomètres à la ronde si elles sont peuplées"
  );
} else if (valeur == 7) {
  console.log("Majeur. Dommages modérés à sévères dans des zones plus vastes");
} else if (valeur == 8) {
  console.log(
    "Important. Dommages s´erieux dans des zones à des centaines de kilomètres à la ronde"
  );
} else if (valeur == 9) {
  console.log(
    "Dévastateur. Dévaste des zones sur des milliers de kilomètres à la ronde"
  );
} else if (valeur > 9) {
  console.log("C'est l'Apocalypse");
}

// EXERCICE 2.10 //
let nombre1 = Number(prompt("Saisir un nombre entre 2 et 8"));
if (nombre1 % 2 !== 0) {
  console.log("Erreur de saisie, le personnage ne bouge pas");
} else if (nombre1 == 2) {
  console.log("Le personnage va en bas");
} else if (nombre1 == 4) {
  console.log("Le personnage va à gauche");
} else if (nombre1 == 6) {
  console.log("Le personnage va a droite");
} else if (nombre1 == 8) {
  console.log("Le personnage va en haut");
}

// EXERCICE 2.11 //
let score1 = Number(prompt("Score du candidat 1 (nombre de voix) ?"));
let score2 = Number(prompt("Score du candidat 2 (nombre de voix) ?"));
let score3 = Number(prompt("Score du candidat 3 (nombre de voix) ?"));
let score4 = Number(prompt("Score du candidat 4 (nombre de voix) ?"));

let totalVoix = score1 + score2 + score3 + score4;
let pct1 = totalVoix > 0 ? (score1 / totalVoix) * 100 : 0;

if (pct1 > 50) {
  console.log("Le candidat 1 est élu au premier tour.");
} else if (pct1 < 12.5) {
  console.log("Le candidat 1 est battu (moins de 12,5 % des voix).");
} else {
  let enTete = score1 >= score2 && score1 >= score3 && score1 >= score4;
  if (enTete) {
    console.log(
      "Le candidat 1 est en ballottage favorable (qualifié et en tête au premier tour)."
    );
  } else {
    console.log(
      "Le candidat 1 est en ballottage défavorable (qualifié mais pas en tête au premier tour)."
    );
  }
}
// Exercice Loic //
nombre = Number(prompt("Saisir un nombre"));
if (nombre % 3 == 0) {
  console.log("Fizz");
} else if (nombre % 5 == 0) {
  console.log("Buzz");
} else if (nombre % 3 == 0 && nombre % 5 == 0) {
  console.log("FizzBuzz");
} else {
  console.log("ERR");
}
// Exercie 3.1 //
nombre = 7;
while (nombre < 1 || nombre > 3) {
  nombre = Number(prompt("Saisir un nombre entre 1 et 3 "));
}
console.log("Nombre valide");

// Exercie 3.2 //
nombre = 0;
while (nombre < 10 || nombre > 20) {
  nombre = Number(prompt("Saisir un nombre entre 10 et 20 "));
  if (nombre < 10) {
    console.log("Plus grand");
  } else if (nombre > 20) {
    console.log("Plus petit");
  }
}
// Exercie 3.3 //
nombre = Number(prompt("Saisir un nombre de départ "));
let i = nombre + 1;
while (i <= nombre + 10) {
  console.log(i);
  i++;
}

// Exercie 3.4 //
nombre = Number(prompt("Saisir un nombre de départ "));
for (let i = nombre + 1; i <= nombre + 10; i++) {
  console.log(i);
}

// Exercie 3.5 //
let nombreDepart = Number(prompt("Saisir un nombre de départ"));
console.log(`Table de ${nombreDepart} :`);
for (let i = 1; i <= 10; i++) {
  console.log(`${nombreDepart} x ${i} = ${nombreDepart * i}`);
}

// Exercie 3.6 //
nombre = Number(prompt("Saisir un nombre"));
let somme = 0;
for (let i = 1; i <= nombre; i++) {
  somme = somme + i;
}
console.log(`La somme des ${nombre} premiers nombres est ${somme}`);

// Exercie 3.7 //
nombre = Number(prompt("Saisir un nombre"));
let factorielle = 1;
for (let i = 2; i <= nombre; i++) {
  factorielle = factorielle * i;
}
console.log(`La factorielle de ${nombre} est ${factorielle}`);

// Exercie 3.8 //
let nombre = Number(prompt("Saisir un nombre"));
let plusGrand = 0;
let position = 0;
let grandposition = 0;
for (let i = 1; i <= 20; i++) {
  nombre = Number(prompt("Saisir un nombre"));
  if (nombre > plusGrand) {
    plusGrand = nombre;
    grandposition = i;
  }
}
console.log(`Le plus grand nombre est ${plusGrand}`);
console.log(`Le plus grand nombre a été saisi à la position ${grandposition}`);

// Exercie 3.9 //
let nombre = Number(prompt("Saisir un nombre"));
let plusGrand = 0;
let position = 0;
let grandposition = 0;
for (let i = 1; i <= 20; i++) {
  nombre = Number(prompt("Saisir un nombre"));
  if (nombre === 0) {
    break;
  } else if (nombre > plusGrand) {
    plusGrand = nombre;
    grandposition = i;
  }
}
console.log(`Le plus grand nombre est ${plusGrand}`);
console.log(`Le plus grand nombre a été saisi à la position ${grandposition}`);

//Le diseur de bonne aventure
function tellFortune(nombreEnfants, nomPartenaire, situationGeo, titrePoste) {
  console.log(
    `Vous serez un ${titrePoste} dans ${situationGeo} et marié à ${nomPartenaire} avec ${nombreEnfants} enfants`
  );
}
tellFortune(2, "Sheryne", "Honfleur", "développeur");
tellFortune(2, "Jane", "Lyon", "ingénieur");
tellFortune(1, "Léa", "Marseille", "architecte");

// l'âge de chien
function calculateDogAge(age) {
  let dogAge = Math.round(age * 7);
  console.log(`Votre chiot a ${dogAge} ans en années de chien !`);
  return;
}
calculateDogAge(5.3);
calculateDogAge(2.5);
calculateDogAge(3.7);

//Le calculateur d'approvisionnement à vie
function calculateSupply(age, amountPerDay) {
  let maxAge = 100;
  let days = (maxAge - age) * 365.25;
  let supply = days * amountPerDay;
  console.log(
    `Vous aurez besoin de ${supply} approvisionnements pour vivre jusqu'à 100 ans !`
  );
}
calculateSupply(20, 2);
calculateSupply(30, 3);
calculateSupply(40, 4);

//Le géomètre
function calcCircumfrence(rayon) {
  let circumference = 2 * Math.PI * rayon;
  console.log(`La circonférence est ${circumference}`);
  return;
}
let area = Math.PI * rayon * rayon;
console.log(`La surface est ${area}`);
return;
function calcArea(rayon) {
}
calcCircumfrence(10);
calcArea(10);

//Le convertisseur de température
function celsiusToFahrenheit(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  console.log(`${celsius}°C is ${fahrenheit}°F`);
  return;
}

function fahrenheitToCelsius(fahrenheit) {
  let celsius = (fahrenheit - 32) * (5 / 9);
  console.log(`${fahrenheit}°F est ${celsius}°C`);
  return;
}

celsiusToFahrenheit(20);
fahrenheitToCelsius(18);

*/
class Lampe {
  constructor(taille, couleur, puissanceAmpoule) {
    this.taille = taille;
    this.couleur = couleur;
    this.puissanceAmpoule = puissanceAmpoule;
    this.etat = true;
  }
  allumer() {
    this.etat = true;
  }
  eteindre() {
    this.etat = false;
  }
  afficherEtat() {
    if (this.etat) {
      console.log("La lampe est allumée");
    } else {
      console.log("La lampe est éteinte");
    }
  }
  frotterLampe() {
    console.log("le génie a été réveillé");
  }
  afficherTaille() {
    console.log(`La taille de la lampe est ${this.taille}`);
  }
  afficherCouleur() {
    console.log(`La couleur de la lampe est ${this.couleur}`);
  }
  afficherPuissanceAmpoule() {
    console.log(`La puissance de l'ampoule est ${this.puissanceAmpoule}`);
  }
}
const lampe = new Lampe(43, "Blanche", "75W");
lampe.allumer();
lampe.afficherEtat();
lampe.frotterLampe();
lampe.eteindre();
lampe.afficherEtat();
lampe.afficherTaille();
lampe.afficherCouleur();
lampe.afficherPuissanceAmpoule();

class Voiture extends Vehicule {
  constructor(marque, modele, annee, kilometrage) {
    super(marque, modele, annee, kilometrage);
    this.marque = marque;
    this.modele = modele;
    this.annee = annee;
    this.kilometrage = kilometrage;
  }
  details() {
    console.log(
      `La voiture est une ${this.marque} ${this.modele} de ${this.annee} et a ${this.kilometrage} km`
    );
  }
}

const voiture = new Voiture("Renault", "Clio", 2020, 10000);
voiture.details();
voiture.avancer();
voiture.tourner();
voiture.reculer();

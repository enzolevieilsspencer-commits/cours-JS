let prenom = "Enzo";
alert("Bonjour " + prenom);
console.log("Bonjour " + prenom);

let name = prompt("Quel est votre nom ?");
console.log(name);

let annee = prompt("Quel est votre année de naissance ?");
console.log(annee);

let ville = prompt("Quelle est votre ville de naissance?");
console.log(ville);

console.log(new Date().getFullYear());
let age = new Date().getFullYear() - annee;

console.log(typeof prenom);

console.log(
  `Bonjour ${prenom} ${name} vous avez ${age} ans et vous êtes né à ${ville}`
);

// ceci est un commentaire
/* ceci est un commentaire
 multiligne */

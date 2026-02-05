let nameD = "Manu";
let team1 = "OM";
let team2 = "PSG";
let score1 = Number(prompt("Saisir le score de l'équipe 1"));
let score2 = Number(prompt("Saisir le score de l'équipe 2"));

if (score1 > score2) {
  alert(`${team1} à battu ${team2} ${nameD} est trop heureux`);
} else if (score1 < score2) {
  alert(`${team1} à battu ${team2} ${nameD} a trop la rage`);
} else {
  alert(`${team1} et ${team2} ont fait un match nul ${nameD} a le seum`);
}

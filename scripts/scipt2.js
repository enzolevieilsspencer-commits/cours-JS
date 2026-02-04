let name = "Manu";
let équipe1 = "OM";
let équipe2 = "PSG";
let score1 = Number(prompt("Saisir le score de l'équipe 1"));
let score2 = Number(prompt("Saisir le score de l'équipe 2"));

if (score1 > score2) {
  alert(`${équipe1} à battu ${équipe2} Manu est trop heureux`);
} else if (score1 < score2) {
  alert(`${équipe1} à battu ${équipe2} Manu a trop la rage`);
} else {
  alert(`${équipe1} et ${équipe2} ont fait un match nul Manu a le seum`);
}

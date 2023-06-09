// infos utiles du jeu
const statut = document.querySelector("h2");
let jeuActif = true;
let joueurActif = "x";
let etatJeu = ["", "", "", "", "", "", "", "", ""];
const conditionsVictoire = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// messages
const gagne = () => `Le tueur ${joueurActif} a remporté ce duel`;
const egalite = () => "Egalité";
const tourJoueur = () => `C'est au tour du joueur ${joueurActif}`;

statut.innerHTML = tourJoueur();

document.querySelectorAll(".case").forEach((cell) => cell.addEventListener("click", gestionClickCase));

document.querySelector("#Demarrer").addEventListener("click", Demarrer);

function gestionClickCase() {
    // afficher les entiers au click sur case
  const indexCase = parseInt(this.dataset.index)

  if(etatJeu[indexCase] != "" || !jeuActif){
    return
  }
  etatJeu[indexCase] = joueurActif
  this.innerHTML= joueurActif

  verifGagne()
}

function verifGagne(){
    let tourGagnant = false

    for(let conditionVictoire of conditionsVictoire){
        let val1 = etatJeu[conditionVictoire[0]]
        let val2 = etatJeu[conditionVictoire[1]]
        let val3 = etatJeu[conditionVictoire[2]]
        if(val1==="" || val2==="" || val3===""){
            continue
        }
        if(val1 === val2 && val2 === val3){
            tourGagnant = true
            break
        }
    }
    if(tourGagnant){
        statut.innerHTML= gagne()
        jeuActif = false
        return
    }

    if(!etatJeu.includes("")){
      statut.innerHTML = egalite()
      jeuActif = false
      return
    }

    joueurActif = joueurActif==="x" ? "0" : "x"
    statut.innerHTML =  tourJoueur()
  }
  
    function Demarrer(){
      joueurActif = "x"
      jeuActif = true
      etatJeu = ["", "", "", "", "", "", "", "", ""]
      statut.innerHTML = tourJoueur()
      document.querySelectorAll(".case").forEach(cell => cell.innerHTML = "")
    }


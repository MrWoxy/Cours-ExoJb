function changeTextH1() {
    console.log("coucou");
    h1.textContent = "Le nouveau texte du h1";
}
const h1 = document.querySelector("h1");
h1.addEventListener("click", changeTextH1);

// const meats = document.querySelectorAll(".meat");
// console.log(meats);
// Un addEventListener ne s'applique que sur UN élément
// Si besoin d'appliquer addEventListener à plusieurs éléments
// Y aura de la boucle
// for(let i=0; i<meats.length;i++) {
//     meats[i].addEventListener("click", getName);
// }
// meats[0].addEventListener("click", getName); -> observateur click sur Jambon
// meats[1].addEventListener("click", getName); -> observateur click sur Fromage
// meats[2].addEventListener("click", getName); -> observateur click sur Beurre
// Ca ce n'est pas correct, ou en tout cas ça marche que si il y a très peu 
// d'éléments
// addEventListener -> Lourd. Donc il faut les limiter dans son code JS
//La bonne méthode, ça va être d'appliquer un addEventListener sur l'élément
// qui englobe tous les sous-éléments on veut une action
// function getName(event) {
//     console.log(event.target.textContent);
//    // console.log(event.target.textContent);
// }
// const meats = document.querySelector("#meats");
// meats.addEventListener("click", getName);
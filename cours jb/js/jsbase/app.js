//Exo1:
//Dans l'HTML, créer un titre H1 "La réponse à toute question de l'univers est...". Dans le JS, au survol de ce titre h1, rajouter "42"

// function changeTextH1() {
//     console.log("coucou");
//     h1.textContent = "La réponse à toute question de l'univers est 42";
// }
// const h1 = document.querySelector("h1");
// h1.addEventListener("mouseover", changeTextH1);

// Exo 2:
// Créer un groupe de 5 boutons, avec à chaque fois en contenu son numéro (1 .. 2 ... 3). Au clic du bouton numéro 1, afficher l'image "img-1.jpg"
// dans un dossier img. Au clic du bouton numéro 2, afficher l'image "img-2.jpg", etc...

// function changeImg(event) {
//     const nb = event.target.textContent;
//     console.log(nb);

//     const img = document.querySelector('#imgPoney');
    
//     img.src = `img/img-${nb}.jpg`;
//     //La même chose que 
//     // img.src = "img/img-" + nb + ".jpg";
// }

// const buttons = document.querySelector("#buttons");
// buttons.addEventListener("click", changeImg);

// Exo 3:
// Créer un champ de formulaire qui demande un nom. Au clic du bouton "Envoyer"...Récupérer le contenu et afficher en alerte "Bonjour <Nom>!"


// function displayPseudo(event) {
//     //event.preventDefault();
    
//     const pseudo = document.querySelector("#pseudo");
//     alert("truc");
// }

// const btnPseudo = document.querySelector("#btnPseudo");
// btnPseudo.addEventListener("click",displayPseudo);
let elementArrayLesson = document.getElementById("contenuArrayLesson");
let tabFruits = ["fraise", "pommes", "bananes", "kiwi", "mangue", "poire" ];

console.log(tabFruits);

elementArrayLesson.innerHTML += tabFruits + "<hr>";

elementArrayLesson.innerHTML += tabFruits[3] + "<hr>";

/* Remplacer un element dans le tableau*/
tabFruits[2] = "Ananas";

elementArrayLesson.innerHTML += tabFruits[2] + "<hr>";
console.log(tabFruits);

 /* Connaitre le nombre d'element dans le array */
elementArrayLesson.innerHTML += "Nombre dans le frigo dans le array tabFruits: " + tabFruits.length + "<hr>";

// Ajouter un element

tabFruits[6] = "Clémentine";
console.log(tabFruits);

// Ajouter un element sans connaitre l'indice

tabFruits.push("Orange");
console.log(tabFruits);

// Ajouter un element en debut de tableau
tabFruits.unshift("Goyave");
console.log(tabFruits);

//Reordonner en ordre alphabétique
tabFruits.sort();
console.log(tabFruits);

//Réduire le nombre d'élément dans un tableau
elementArrayLesson.innerHTML += "Nombre d'éléments actuel: " + tabFruits.length +  "<hr>";
tabFruits.length = 3;

elementArrayLesson.innerHTML += tabFruits + "<hr>";


/*
///

///////////Tableau multidimensionnel

*/

elementArrayLesson.innerHTML += "<h3>Les tableaux de données array Multidimensionnel</h3>";
// Un ou des tableaux dans un tableau

let apprenants = [["namBen", ["ben@gmail.com", "ben@yahoo.fr"], "Benoit", "0123456789"], ["DamName", "Damien", "01234567890", "damien@gmail.com"], ["GabStam", "Stam", "0123456789", "gabistam@gmail.fr"]];
console.log(apprenants);

elementArrayLesson.innerHTML += apprenants[0][1][0] +  "<hr>";






/*
///////////////////BOUCLE

*/


let elementBoucleLesson = document.getElementById("contenuBoucleLesson");

//Boucle While() {}

let compteur = 0; //valeur de départ

while (compteur < 10) {
    //condition d'entrée
    elementBoucleLesson.innerHTML += compteur;
    compteur++ ; // equivaut à écrire : compteur = compteur +1; ++incrémentation
}


elementBoucleLesson.innerHTML +=  "<hr>"


// Boucle FOR () {}

for (let i =0; i< 10; i++) {
    elementBoucleLesson.innerHTML += i;
}

for (let i =0; i < 100; i++) {
    if (i ==50) {
        elementBoucleLesson.innerHTML += "<span style='color: red;'>" + i + "</span>";
    }
    else {
        elementBoucleLesson.innerHTML += i + "";
    }
}
elementBoucleLesson.innerHTML += "<hr>";

let i = 0;
while (i < 100) {
  if (i == 50) {
    elementBoucleLesson.innerHTML += "<span style='color: red;'>" + i + "</span> ";
  } else {
    elementBoucleLesson.innerHTML += i + " ";
  }
  i++;
}
elementBoucleLesson.innerHTML += "<hr>";

//Afficher une chaine de carateres  (pas de tiret après la dernière valeur)

let z = 0;
while (z < 10) {
    if (z !=9) {
        elementBoucleLesson.innerHTML += z + " - ";
    } else {
        elementBoucleLesson.innerHTML += z;
    }
    z++;
}

elementBoucleLesson.innerHTML += "<hr>";

//// BOUCLE FOR IN

let tabJours = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];

console.log(tabJours);

for (let indice in tabJours) {

    elementBoucleLesson.innerHTML += "- " + tabJours[indice] + "<hr>";
}
elementBoucleLesson.innerHTML += "<hr>";



/// BOUCLE FOR OF

for (let valeur of tabJours) {
    elementBoucleLesson.innerHTML += "- " + valeur + "<hr>";
}
elementBoucleLesson.innerHTML += "<hr>";


/// Parcourir un tableau multidimensionnel

for (let i = 0; i< apprenants.length; i++) {
    for (let j = 0; j < apprenants[i].length; j++) {
        elementBoucleLesson.innerHTML += apprenants[i][j] + "<hr>";
    }
    elementBoucleLesson.innerHTML += "<hr><hr>";

}

for (let indice in tabJours) {
    
    elementBoucleLesson.innerHTML += "- " + tabJours[indice] + "<hr>";
}

let pseudo = "DamienBenoit";
console.log(pseudo.substring(6,12));

function salut (){
    return('Damien salut Benoit');
};
alert(salut());

let btn= document.getElementsByClassName("btn");
let form = document.getElementById("form");

//btn.addEventListener("click", function(){
//    this.form("disp");
//})
function hide(e) {
    e.currentTarget.style.visibility = 'hidden';
    console.log(e.currentTarget);
    // When this function is used as an event handler: this === e.currentTarget
  }
document.body.addEventListener('click', hide, false);
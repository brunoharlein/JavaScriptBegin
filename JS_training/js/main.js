/*## 1\.Exercice 1 : Hello World
Afficher "Hello World" dans la console.
Reproduire le même résultat, mais en déclarant une variable (du nom de votre choix) ayant pour valeur "Hello World".*/
// 1
console.log("Hello World");
// 2
var hello = "Hello World"
console.log(hello);

/*## 2\.Exercice 2 : Calculs divers
Dans la console, afficher le résultats des opérations suivantes:
- 3*3
- 12/0
- 4+9+78
- 12-7
- 5e4
*/
console.log(3 * 3); // affiche 9
console.log(12 / 0); //affiche Infinity
console.log(4 + 9 + 78); //affiche 91
console.log(12 - 7); //affiche 5
console.log(5e4); //affiche 50000


/*## 3\.Exercice 3 : Communiquer avec l'ordinateur
L'heure est venue de commencer à communiquer avec l'ordinateur ! Ecrivez un programme qui demande son nom à l'utilisateur puis lui répond un message de bienvenue avec son nom.
Astuce : vous pouvez afficher le message de différentes façons*/
var name = prompt("Quel est votre nom ?");
console.log("Bonjour" + " " + name);


/*## 4\.Exercice 4 : Nom et prénom
Déclarer les variables 'nom' et 'prénom' et leur assigner votre nom et prénom.
Afficher dans la console par exemple : "Bonjour John Doe"
Attention aux espaces*/
var nom = "Harlein";
var prenom = "Bruno";

console.log("Bonjour " + prenom +  " " + nom);


/*## 5\.Exercice 5 : Des caractères au nombre
Déclarer la variable myNumber = "123"
Afficher la variable a dans la console en modifiant son type String en type Number*/
var myNumber = "123";

console.log(parseInt(myNumber));



/*## 6\.Exercice 6 : Majuscules et miniscules
Ecrire un programme permettant de mettre en majuscule le contenu d'une String. Même chose pour le mettre en miniscule.*/
var min = "minuscule";
var maj = "MAJUSCULE";

min = min.toUpperCase();
console.log(min);

maj = maj.toLowerCase();
console.log(maj);



/*
Déclarer 2 variables de type String. L'une d'entre elles doit être vide.
Ecrire un programme vérifiant si la String est vide ou non, et renvoyer la valeur (true ou false) dans la console.
Pour cet exercice, vous devrez commencer à vous renseigner par vous-même sur les conditions en JavaScript.*/

var un = "";
var deux = "test";

if (un.length === 0) {
  console.log (false);
}
else {
  console.log(true);
}

if (deux.length === 0) {
  console.log (false);
}
else {
  console.log(true);
}


/*## 2\.Exercice 2 : Calculer mon âge
Réalisez un programme qui demande au visteur l'année actuelle, son année de naissance, calcule l'âge du visiteur puis l'affiche dans un message à l'écran.
Pour aller plus loin, demandez l'âge de la personne à côté de vous et afficher dans un message le cumul de vos deux âges.*/


/*## 3\.Exercice 3 : Problème de chaussures
Marc fait un peu de shopping. Il achète des chaussures à 70€, un jean à 59€ et un t-shirt à 20€.
Heureusement pour son portefeuille, il bénéficie d'une réduction de 20%.
Déclarez chacun des articles achetés dans une variable différente. (prix1, prix2, etc.). Déclarez une dernière variable 'total' qui aura pour valeur la somme des achats, et l'afficher dans la console.
Attention: ne pas oublier la réduction.*/

/*## 4\.Exercice 4 : une calculatrice JavaScript
Vous allez créer une mini calculatrice qui permet d'additionner des nombres.
 Quand le visiteur arrive sur la page vous lui demandez les nombres à additionner, puis vous affichez le résultat à l'écran.*/

/*## 5\.Exercice 5 : travailler avec les propriétés
Demander son prénom au visiteur.
Demander son nom au visiteur.
Afficher dans un message la lettre par laquelle son prénom commence et la lettre par laquelle il termine. Ces lettres seront forcément affichées majuscules.
Faire de même pour son nom.
Afficher dans un message la combinaison des lettres, par exemple pour Marc Gemini : "MCGI".
Demander son âge au visiteur  et lui afficher le résultat de celui-ci divisé par 33. S'assurer que si ce nombre comporte une virgule alors il sera arrondi à l'entier supérieur ou inférieur.*/

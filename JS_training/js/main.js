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


/*## 6\.Exercice 6 : Majuscules et miniscules
Ecrire un programme permettant de mettre en majuscule le contenu d'une String. Même chose pour le mettre en miniscule.*/

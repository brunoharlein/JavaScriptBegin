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

// Get the current date and the birthDate by the user
// Récupère la date actuelle et la date de naissance par l'utilisateur
var currentDate =  prompt("En quelle année sommes-nous ?");
var birthDate = prompt("Votre année de naissance ?");

// Convert the strings into numbers
// Convertit les chaînes en nombres
currentDate =  Number(currentDate);
birthDate = Number(birthDate);

// Count the age of the user and show it
// Comptez l'âge de l'utilisateur et montrez-le
var age = currentDate - birthDate;
alert("Vous avez " + age + " ans");

// Get the age of the neighbour and convert it to number
// Obtenir l'âge du voisin et le convertir en nombre
var nextAge  = prompt("Quelle âge a la personne à côté de vous ?");
nextAge = Number(nextAge);

// Count the sum of the two ages and show it
// Comptez la somme des deux âges et montrez-la
age = age + nextAge;
alert("A vous deux vous avez " + age + " ans");



/*## 3\.Exercice 3 : Problème de chaussures
Marc fait un peu de shopping. Il achète des chaussures à 70€, un jean à 59€ et un t-shirt à 20€.
Heureusement pour son portefeuille, il bénéficie d'une réduction de 20%.
Déclarez chacun des articles achetés dans une variable différente. (prix1, prix2, etc.). Déclarez une dernière variable 'total' qui aura pour valeur la somme des achats, et l'afficher dans la console.
Attention: ne pas oublier la réduction.*/

var prix1 = 70;
var prix2 = 59;
var prix3 = 20;
var total = prix1 + prix2 + prix3;

alert("Le total est de : " + total);
console.log(total*0.8);
alert("Avec la réduction le total est de : " + total*0.8);


/*## 4\.Exercice 4 : une calculatrice JavaScript
Vous allez créer une mini calculatrice qui permet d'additionner des nombres.
 Quand le visiteur arrive sur la page vous lui demandez les nombres à additionner, puis vous affichez le résultat à l'écran.*/

 var firstNumber = parseInt(prompt("Quel est le premier nombre ?"));
 var secondNumber = parseInt(prompt("Quel est le deuxième nombre ?"));
 alert("la somme est de : " + (firstNumber + secondNumber));
 console.log(firstNumber + secondNumber);


/*## 5\.Exercice 5 : travailler avec les propriétés
Demander son prénom au visiteur.
Demander son nom au visiteur.
Afficher dans un message la lettre par laquelle son prénom commence et la lettre par laquelle il termine. Ces lettres seront forcément affichées majuscules.
Faire de même pour son nom.
Afficher dans un message la combinaison des lettres, par exemple pour Marc Gemini : "MCGI".
Demander son âge au visiteur  et lui afficher le résultat de celui-ci divisé par 33. S'assurer que si ce nombre comporte une virgule alors il sera arrondi à l'entier supérieur ou inférieur.*/

var lastName = prompt("votre nom ?").toUpperCase();
var lnLetters = lastName[0] + lastName[lastName.length - 1];
console.log("Voici la première et la dernière lettre de votre nom" + lnLetters);

var firstName = prompt("Quel est votre prénom ?").toUpperCase();
var fnLetters = firstName[0] + firstName[firstName.length - 1];
console.log("Voici la première et la dernière lettre de votre prénom" + fnLetters);

console.log("Voici les deux mis ensemble " + lnLetters + fnLetters);

var age =  parseInt(prompt("Quel est votre âge ?"));
var age = Math.round(age/33);

console.log("Divisé par 33 cela donner " + age);


/*## 1\.Exercice 1 : Le nombre le plus grand
Déclarer 4 variables ayant chacune pour valeur un chiffre différent.
Ecrire un programme renvoyant dans la console la valeur la plus élevée.*/

var firstNumber = 1;
var secondNumber = 2;
var thirdNumber = 65;
var fourthNumber = 64;

function bigNumber(a, b, c, d) {
  if(a > b && a > c && a > d) {
    console.log(a);
  }
  else if(b > a && b > c && b > d) {
    console.log(b)
  }
  else if(c > a && c > b && c > d) {
    console.log(c);
  }
  else {
    console.log(d);
  }
}

bigNumber(firstNumber, secondNumber, thirdNumber, fourthNumber);


/*## 2\.Exercice 2 : Conditon d'âge
Ecrire un programme JavaScript qui demande son âge à l'utilisateur. Si l'utilisateur a rentré quelque chose et que :
- l'age est négatif afficher un message qui demande d'entrer un âge réel
- l'age est supérieur ou égal à 21 ans afficher un message autorisant l'accès
- l'age est paire afficher un message indiquant à l'utilisateur que son âge est pair
- l'age est un carré afficher un message indiquant à l'utilisateur que son âge est un nombre carré
Sinon affichez un message d'erreur s'il n'a rien rentré
Attention à l'ordre dans lequel vous effectuez vos tests !*/

var userAge = Number(prompt("Quel âge avez-vous ?"));
if(userAge !== 0) {
  if(userAge <= 0) {
    alert("Rentrez votre vrai âge !");
  }
  if (userAge >= 21) {
    alert("vous pouvez entrer !");
  }
  if(userAge%2 === 0) {
    alert("Votre âge est paire");
  }
  if(Number.isInteger(Math.sqrt(userAge))) {
    alert("Votre âge est un carré");
  }
}
else {
  alert("Vous n'avez rien rentré !")
}



/*## 3\.Exercice 3 : Le nombre caché
Stockez un nombre entier de votre choix dans une variable. Ecrivez ensuite un programme qui demande à l'utilisateur de deviner ce nombre.
Si l'utilisateur trouve le bon nombre vous lui annoncez qu'il a gagné. Sinon vous lui dites si son nombre est plus grand ou plus petit que le nombre caché. Tant que l'utilisateur n'a pas trouvé le bon nombre vous lui reposez la question.*/

var hiddenNumber = 17;
var userGuess = null;

while(hiddenNumber !== userGuess) {
  userGuess = Number(prompt("Quel est le nombre caché ?"));
  if(userGuess > hiddenNumber) {
    alert("Trop haut !");
  }
  else if (userGuess < hiddenNumber) {
    alert("Trop bas");
  }
  else {
    alert("Trouvé !");
  }
}



/*## 4\.Exercice 4 : Des nombres en boucle
Ecrire un programme qui affiche à l'écran les nombre de 1 à 100 en revenant à chaque fois à la ligne.
Exemple :
1
2
3
...*/

for(var i = 1; i <= 100; i++) {
  console.log(i);
}



/*## 5\.Exercice 5 : Des nombres en boucle bis
Créez une boucle allant de 1 à 100, et n'affichez dans la console que les chiffres pairs.*/


/*## 6\.Exercice 6 : Remplir la piscine
Ecrire une fonction en Javascript qui indique le temps de remplissage d'une piscine en fonction de sa longueur, sa largeur, sa profondeur, et du débit d'eau. Les longueurs sont en mètre (m), le débit en mètre cube par minute (m3/min) et le résultat attendu, le temps, en minute (min).*/


/*## 7\.Exercice 7 : Calcul de cercle
Ecrire 2 fonctions, l'une retournant l'aire d'un cercle, l'autre son périmètre.
Le Rayon devra être entrer manuellement à l'aide d'un "prompt()".
Les résultats des deux fonctions seront affichés dans la console.
Pour aller plus loin, arrondissez les résultats à la deuxième décimale.*/


/*## 8\.Exercice 8 : Une pyramide
Ecrire un programme affichant dans la console le résultat suivant:

```
*
**
***
****
*****
```*/


/*## 9\.Exercice 9 : FIZZ BUZZ
Ecrire un programme qui affiche les nombres de 1 à 100. Quand le nombre est un multiple de 3 afficher "FIZZ", quand le nombre est un multiple de 5 afficher "BUZZ" et quand le nombre est un multiple de 3 et 5 afficher "FIZZBUZZ"*/

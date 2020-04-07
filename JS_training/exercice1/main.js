//Insert the main title
// Insère le titre principal
var mainTitle = document.getElementById("mainTitle");
mainTitle.innerHTML = "Titre principal";
//Insert the subtitle
var subTitle = document.getElementById("subTitle");
subTitle.innerHTML = "Titre secondaire";

//Get all the contents elements and set a bleu background
// Récupère tous les éléments de contenu et définit un fond bleu
var contents = document.getElementsByClassName("content");
for (var i = 0; i < contents.length; i++) {
  contents[i].style.background = "blue";
}

//Function to delete article on click
// Fonction pour supprimer l'article en un clic
function deleteContent() {
  var articles = document.getElementsByTagName("article");
  articles[0].style.display = "none";
}

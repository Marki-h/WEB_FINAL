// Pour tout afficher :
function tout_afficher(){
    $.getJSON("https://6585a1cc022766bcb8c90b5d.mockapi.io/recettes")
    .done(function (Recette){
        Recette.forEach(function(recette){
            Nouv_Recette(recette)
        })
    })
    .fail(function (){
        alert("Le fichier jSON n'a pas bien fonctionné `(")
    })
}


// La classe recette
function Recette(nom = "", ingredient1 ="",  ingredient2 ="", ingredient3 ="", ingredient4 ="", ingredient5 ="", quantite1 ="", quantite2 ="", quantite3 ="", quantite4 ="", quantite5 ="",description = ""){
    this.nom = nom;
    this.ingredient1 = ingredient1;
    this.ingredient2 = ingredient2;
    this.ingredient3 = ingredient3;
    this.ingredient4 = ingredient4;
    this.ingredient5 = ingredient5;
    this.quantite1 = quantite1;
    this.quantite2 = quantite2;
    this.quantite3 = quantite3;
    this.quantite4 = quantite4;
    this.quantite5 = quantite5;
    this.instructions = description;
}

// Fonction pour créer la nouvelle recette a partir du jSON de mokapi
function Nouv_Recette(){
    const  nouv_recette = new Recette();
    let recette = nouv_recette.nom,
        ing1 = nouv_recette.ingredient1,
        ing2 = nouv_recette.ingredient2,
        ing3 = nouv_recette.ingredient3,
        ing4 = nouv_recette.ingredient4,
        ing5 = nouv_recette.ingredient5,
        q1 = nouv_recette.quantite1,
        q2 = nouv_recette.quantite2,
        q3 = nouv_recette.quantite3,
        q4 = nouv_recette.quantite4,
        q5 = nouv_recette.quantite5,
        desc = nouv_recette.instructions
    // AFficher la recette dans la liste des recettes de la page
    $("#list_recettes").append("<li class='ms-2 align-items-center'><strong>"+recette+"</strong><br>Ingrédients :<br><ul><li>"+q1+', '+ing1+"</li><li>"+q2+', '+ing2+"</li><li>"+q3+', '+ing3+"</li><li>"+q4+', '+ing4+"</li><li>"+q5+', '+ing5+"</li></ul><br>Instructions : <br><p>"+desc+"</p><input type='submit' value='Supprimer' class='btn btn-danger mb-3' id='Supprimer'></li>").css("border","solid grey 2px").css("margin-bottom","2px").css("width","300px").css("margin-top","5px")



}
// Pour afficher chaque recette :
$("#submit").click(function(){
    let recette = $('#nom').val(),
        ing1 = $('#ingredient1').val(),
        ing2 = $('#ingredient2').val(),
        ing3 = $('#ingredient3').val(),
        ing4 = $('#ingredient4').val(),
        ing5 = $('#ingredient5').val(),
        q1 = $('#quantite1').val(),
        q2 = $('#quantite2').val(),
        q3 = $('#quantite3').val(),
        q4 = $('#quantite4').val(),
        q5 = $('#quantite5').val(),
        desc = $('#instructions').val()
    // Vérifier si les champs sont bien remplis avant d'afficher
    if (recette ===""||ing1===""||ing2 ===""||ing3===""||ing4===""||ing5===""||q1===""||q2===""||q3===""||q4===""||q5===""||desc===""){
        alert = ("Certains ou tous les champs sont vides !")
    }
    else{
        $("#list_recettes").append("<li class='ms-2 align-items-center'><strong>"+recette+"</strong><br>Ingrédients :<br><ul><li>"+q1+', '+ing1+"</li><li>"+q2+', '+ing2+"</li><li>"+q3+', '+ing3+"</li><li>"+q4+', '+ing4+"</li><li>"+q5+', '+ing5+"</li></ul><br>Instructions : <br><p>"+desc+"</p><input type='submit' value='Supprimer' class='btn btn-danger mb-3' id='Supprimer'></li>").css("border","solid grey 2px").css("margin-bottom","2px").css("width","300px").css("margin-top","5px")
        localStorage.setItem("recette",recette)
    }

})

// Fonction pour verifier si l'utilisateur a le droit de supprimer
$('#Supprimer').click(function(){
    // Trouver le li sur lequel l'utilisateur clique
    // AUCUNE IDEE COMMENT FAIRE xD
    // Trouver la clé dans le stockage local
    if(localStorage.getItem("recette", "Nom de la clé"){
        delete // le li en question
    }
}
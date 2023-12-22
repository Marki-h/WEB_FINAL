let nombre_recettes = 0

// Pour tout afficher :
function tout_afficher(){
    $.getJSON("https://6585a1cc022766bcb8c90b5d.mockapi.io/recettes")
    .done(function (Recette){
        Recette.forEach(function(recette){
            Nouv_Recette(recette)
        })
    })
    .fail(function (erreur){
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
function Nouv_Recette(){
    const  nouv_recette = new Recette();
    let valide = true;

}
// Pour afficher chaque recette :
$("#submit").click(function(){
    let valide = true,
        recette = $('#nom').val(),
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
        $("#list_recettes").append("<li><strong>Nom : </strong>"+recette+"<br><strong>Ingrédients :</strong><br><ul><li>"+q1+', '+ing1+"</li><li>"+q2+', '+ing2+"</li><li>"+q3+', '+ing3+"</li><li>"+q4+', '+ing4+"</li><li>"+q5+', '+ing5+"</li></ul><br><strong>Instructions : </strong><br><p>"+desc+"</p><input type='submit' value='Supprimer' class='btn btn-danger' id='Supprimer'></li>").css("border","solid grey 2px").css("margin-bottom","2px").css("width","375px").css("margin-top","5px")
    }

})
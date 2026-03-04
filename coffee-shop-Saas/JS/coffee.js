
/*Code a améliorer pour le saas de la coffee shop*/
/*---------------------------------------------*/


/* variable de stockage*/

let selectedProduct=null;

/*selection du titre*/

let title = document.querySelector("#title");

/*selection des produits*/

let products = document.querySelectorAll(".product");

/*selection du bouton*/
let button = document.querySelector("button");


/* donner la propriété selected à l'élément cliqué */

for(let i=0; i<products.length; i++){
    products[i].addEventListener("click", function(){
        
        /* Enlever selected a tous les produits*/
        for(let j=0; j<products.length; j++){
            products[j].classList.remove("selected");
        }
        /* Ajouter selected au produit cliqué*/
        this.classList.add("selected");

        /* stocker le produit sélectionné*/
        selectedProduct=this;

        /* modifier le titre*/
        title.textContent="Vous avez sélectionné : "+selectedProduct.textContent;
    });
}

/* ajouter un événement au bouton pour afficher une alerte avec le produit sélectionné*/
button.addEventListener("click", function(){
    if(!selectedProduct){
        alert("Veuillez sélectionner un produit avant de commander.");
    }else{
        let item = document.createElement("p");
        item.textContent = selectedProduct.textContent; //afficher le nom du produit sélectionné dans le panier 
        
        /* ajouter une classe de style*/
        item.classList.add("cart-item");

        let cart = document.querySelector("#cart");
        
        /* ajouter l'élément au panier*/
        cart.appendChild(item);
        
        /* réinitialiser la sélection*/
        selectedProduct.classList.remove("selected");
        selectedProduct=null;
        title.textContent="Veuillez sélectionner un produit";
    }

});



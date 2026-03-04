let titre=document.getElementById("title");

/*titre.textContent="Yellow";*/


let button=document.querySelector("button");

/*button.innerText="Appuie ici";*/

/*button.addEventListener("click",function(){

    if(titre.classList.contains("highlight")){
        titre.textContent= "commande envoyée";
    }else{
        titre.textContent="commande annulée";
    }
}   
);
*/



/*Sans utiliser toggle(), écris un code qui :

Si la classe existe → on la supprime

Sinon → on l’ajoute */

button.addEventListener("click",function(){
    if(titre.classList.contains("highlight")){
        titre.classList.remove("highlight");
    }
    else{
        titre.classList.add("highlight");
    }
    
});

const products=document.querySelectorAll(".product");

/*products[0].style.color="red";



/*Boucle classique*/

   /* for(let i=0; i<products.length; i++){
        products[i].style.color="blue";
    }*/

/*Boucle moderne*/

  /*  products.forEach(function(product){
        product.style.color="green";
    });*/


for (let i=0; i<products.length; i++){

    products[i].addEventListener("click",function(item){
        /* on enlève la sélection sur tous les produits */ 
        item.classList.remove("selected");

        /* on ajoute la sélection sur le produit cliqué */
        item.classList.add("selected");
    });
}


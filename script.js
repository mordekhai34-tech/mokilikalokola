let panier = JSON.parse(localStorage.getItem("panier")) || [];

function ajouterAuPanier(nom, prix){
panier.push({nom, prix});
localStorage.setItem("panier", JSON.stringify(panier));
alert(nom + " ajouté au panier !");
}

function afficherPanier(){
let contenu = document.getElementById("contenuPanier");
let total = 0;
contenu.innerHTML = "";

panier.forEach((produit, index) => {
total += produit.prix;
contenu.innerHTML += `
<p>${produit.nom} - ${produit.prix}$ 
<button onclick="supprimerProduit(${index})">Supprimer</button>
</p>
`;
});

document.getElementById("total").innerText = "Total: " + total + "$";
}

function supprimerProduit(index){
panier.splice(index,1);
localStorage.setItem("panier", JSON.stringify(panier));
afficherPanier();
}

function viderPanier(){
localStorage.removeItem("panier");
panier = [];
afficherPanier();
}

let produitActuel = "";
let prixActuel = 0;

function ouvrirProduit(nom, prix){
produitActuel = nom;
prixActuel = prix;
document.getElementById("nomProduit").innerText = nom;
document.getElementById("prixProduit").innerText = "Prix: " + prix + "$";
document.getElementById("modal").style.display="flex";
}

function fermerModal(){
document.getElementById("modal").style.display="none";
}

function payer(){
let numero = document.getElementById("numero").value;

if(numero===""){
alert("Entrez votre numéro Mobile Money");
return;
}

alert("Paiement réussi pour "+produitActuel+" ("+prixActuel+"$)");
fermerModal();
}
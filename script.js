let diapoIndex = 0;
Carrossel();

function Carrossel() {
  let slides = document.getElementsByClassName("diapo");
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  diapoIndex++;
  if (diapoIndex > slides.length) { diapoIndex = 1 }

  slides[diapoIndex - 1].style.display = "block";
  setTimeout(Carrossel, 3000); // Change d'image toutes les 2 secondes
}

function addTcard(NomProduit){
  //alert(NomProduit +" a été ajouté au panier");
  qte = document.getElementById("quantite");
  quantite = parseInt(qte.innerHTML);
  qte.innerHTML = quantite + 1;
}
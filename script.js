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
Mon_Panier = {};
function addTcard(NomProduit){
  //alert(NomProduit +" a été ajouté au panier");
  qte = document.getElementById("quantite");
  quantite = parseInt(qte.innerHTML);
  qte.innerHTML = quantite + 1;
  
  const contenu = document.getElementById('leslistes');
  contenu.textContent = '';
  if (Mon_Panier[NomProduit]){
    Mon_Panier[NomProduit] += 1;
  }else {
    Mon_Panier[NomProduit] = 1;
  }
  if(Mon_Panier.length != 0){
    for(Product in Mon_Panier){
      const item = document.createElement('li');
      item.textContent = `${Product} : ${Mon_Panier[Product]}`; 
      item.style = "list-style: none; padding : 7px;";
      contenu.appendChild(item);
    }
  }else{
    item.innerHTML = 'vide';
    contenu.appendChild(item);
  }
  
 } 
 
  
  



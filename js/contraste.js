// function pour toggle contraste 

function toggleContraste() {
  const body = document.body;
  const monimage = document.getElementById("toggleConst");
   
    
  if (!body.classList.contains("contraste")) {
    // Ajoute la classe contraste
    body.classList.add("contraste");
    // Change l'image
      monimage.src = "/assets/images/not_visible.png";
  
  } else {
    // Retire la classe contraste
    body.classList.remove("contraste");
    // Remet l'image par défaut
    monimage.src = "/assets/images/visible.png";
  }
}

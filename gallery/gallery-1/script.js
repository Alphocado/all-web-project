let pop_gallery = document.getElementById("gallery-popup");
let currentGallery;

function buka(gallery){
  let container = document.getElementById(gallery);
  let background = document.getElementById("popup");

  container.style.display = "inline-block";
  background.style.display = "flex";
  currentGallery = gallery;
}

function tutup(){
  let background = document.getElementById("popup");
  let container = document.getElementById(currentGallery);
  
  container.style.display = "none";
  background.style.display = "none";
}
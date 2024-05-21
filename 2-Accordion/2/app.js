const TITLE = document.querySelectorAll(".accordion_title");
const CAPTION = document.querySelectorAll(".accordion_caption");
const ICON = document.querySelectorAll("i");

TITLE[0].addEventListener("click" , function() {
  CAPTION[0].classList.toggle("open");
  ICON[0].classList.toggle("rotate");
  CAPTION[1].classList.remove("open");
  ICON[1].classList.toggle("rotate");
  CAPTION[2].classList.remove("open");
  ICON[2].classList.toggle("rotate");
})

TITLE[1].addEventListener("click" , function() {
  CAPTION[1].classList.toggle("open");
  ICON[1].classList.toggle("rotate");
  CAPTION[0].classList.remove("open");
  ICON[0].classList.toggle("rotate");
  CAPTION[2].classList.remove("open");
  ICON[2].classList.toggle("rotate");
})

TITLE[2].addEventListener("click" , function() {
  CAPTION[2].classList.toggle("open");
  ICON[2].classList.toggle("rotate");
  CAPTION[1].classList.remove("open");
  ICON[1].classList.toggle("rotate");
  CAPTION[0].classList.remove("open");
  ICON[0].classList.toggle("rotate");
})
const LINK = document.querySelector(".link");
const LINKTXT = document.querySelector(".link__txt");
const MODALBG = document.querySelector(".modal-bg");
const FORMCLOSE = document.querySelector(".form__close");


LINK.addEventListener("click" , function() {
  LINK.classList.toggle("link--open");
  if(LINK.classList.contains("link--open")) {
    LINKTXT.textContent = "close";
    LINKTXT.classList.toggle("link__txt--color");
  }else {
    LINKTXT.textContent = "open";
    LINKTXT.classList.toggle("link__txt--color");
  }
  MODALBG.classList.toggle("modal-bg--open");
});

FORMCLOSE.addEventListener("click" ,  function() {
  MODALBG.classList.remove("modal-bg--open");
  LINK.classList.remove("link--open");
  LINKTXT.textContent = "open";
})
const BUTTON = document.querySelectorAll("button");
const CONTENT = document.querySelectorAll(".accordion__content");
const ICON = document.querySelectorAll("i");

BUTTON[0].addEventListener("click" , function() {
  if(ICON[0].classList.contains("bi-plus")){
    CONTENT[0].classList.toggle("accordion__content--open");
    ICON[0].classList.replace("bi-plus" , "bi-dash");
  }else {
    CONTENT[0].classList.toggle("accordion__content--open");
    ICON[0].classList.replace("bi-dash" , "bi-plus");
  }
  if(CONTENT[1].classList.contains("accordion__content--open") || CONTENT[2].classList.contains("accordion__content--open") ) {
    CONTENT[1].classList.remove("accordion__content--open");
    CONTENT[2].classList.remove("accordion__content--open");
    ICON[1].classList.replace("bi-dash" , "bi-plus");
    ICON[2].classList.replace("bi-dash" , "bi-plus");
  }
})

BUTTON[1].addEventListener("click" , function() {
  if(ICON[1].classList.contains("bi-plus")){
    CONTENT[1].classList.toggle("accordion__content--open");
    ICON[1].classList.replace("bi-plus" , "bi-dash");
  }else {
    CONTENT[1].classList.toggle("accordion__content--open");
    ICON[1].classList.replace("bi-dash" , "bi-plus");
  }
  if(CONTENT[0].classList.contains("accordion__content--open") || CONTENT[2].classList.contains("accordion__content--open") ) {
    CONTENT[0].classList.remove("accordion__content--open");
    CONTENT[2].classList.remove("accordion__content--open");
    ICON[0].classList.replace("bi-dash" , "bi-plus");
    ICON[2].classList.replace("bi-dash" , "bi-plus");
  }
})

BUTTON[2].addEventListener("click" , function() {
  if(ICON[2].classList.contains("bi-plus")){
    CONTENT[2].classList.toggle("accordion__content--open");
    ICON[2].classList.replace("bi-plus" , "bi-dash");
  }else {
    CONTENT[2].classList.toggle("accordion__content--open");
    ICON[2].classList.replace("bi-dash" , "bi-plus");
  }
  if(CONTENT[1].classList.contains("accordion__content--open") || CONTENT[0].classList.contains("accordion__content--open") ) {
    CONTENT[1].classList.remove("accordion__content--open");
    CONTENT[0].classList.remove("accordion__content--open");
    ICON[1].classList.replace("bi-dash" , "bi-plus");
    ICON[0].classList.replace("bi-dash" , "bi-plus");
  }
})


// for(let i = 0; i < BUTTON.length; i++) {
//   BUTTON[i].addEventListener("click" , function() {
//     if(ICON[i].classList.contains("bi-plus")){
//       CONTENT[i].classList.toggle("accordion__content--open");
//       ICON[i].classList.replace("bi-plus" , "bi-dash");
//     }else {
//       CONTENT[i].classList.toggle("accordion__content--open");
//       ICON[i].classList.replace("bi-dash" , "bi-plus");
//     }
//     if( i == 0){
//       i++;
//       CONTENT[i].classList.remove("accordion__content--open");
//       CONTENT[i++].classList.remove("accordion__content--open");
//     }else if(i == 1){
//       i++;
//       CONTENT[i++].classList.remove("accordion__content--open");
//       CONTENT[i -= 2].classList.remove("accordion__content--open");
//     }
//     else if(i == 2) {
//       i--;
//       CONTENT[i--].classList.remove("accordion__content--open");
//       CONTENT[i -= 2].classList.remove("accordion__content--open");
//     }
//   })
// }
const BUTTON = document.querySelectorAll(".form__link");
const INPUT = document.querySelectorAll("input");
const ICON = document.querySelector("i");
let randomShow = Math.floor(Math.random()*2);
let input_0 = true;
let input_1 = true;

if(randomShow == 0) {
  INPUT[0].style.display = "block";
  ICON.style.display = "block";
  input_0 = true;
  INPUT[1].style.display = "none";
}
else {
  INPUT[0].style.display = "none";
  INPUT[1].style.display = "block";
  ICON.classList.replace("bi-eye-fill" , "bi-eye-slash");
  input_1 = true;
}

BUTTON[0].addEventListener("click",function() {
  const PASSWORD = document.querySelector(".form__field-pass").value;
  INPUT[0].value = `${PASSWORD}`;
  if(input_0 = true) {
    INPUT[1].style.display = "none";
    INPUT[0].style.display = "block";
    ICON.classList.replace("bi-eye-slash" , "bi-eye-fill");
  }
})
BUTTON[1].addEventListener("click",function() {
  const TEXT = document.querySelector(".form__field-text").value;
  INPUT[1].value = `${TEXT}`;
  if(input_1 = true) {
    INPUT[0].style.display = "none";
    INPUT[1].style.display = "block";
    ICON.classList.replace("bi-eye-fill" , "bi-eye-slash");
  }
})
BUTTON[2].addEventListener("click",function() {
  INPUT[0].value = "";
  INPUT[1].value = "";
})
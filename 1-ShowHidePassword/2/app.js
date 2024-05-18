let icon = document.querySelector("i");
let input = document.querySelectorAll("input");

icon.addEventListener("click" , function() {
  if(input[0].classList.contains("hidden")) {
    let message = input[1].value;
    input[1].classList.add("hidden");
    input[0].classList.remove("hidden");
    input[0].value = message;
    icon.classList.toggle("bi-eye-slash");
    icon.classList.toggle("bi-eye");
  }
  else {
    let message = input[0].value;
    input[0].classList.add("hidden");
    input[1].classList.remove("hidden");
    input[1].value = message;
    icon.classList.toggle("bi-eye-slash");
    icon.classList.toggle("bi-eye");
  }
})
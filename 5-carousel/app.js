let containerWidth = document.getElementsByClassName("container")[0].clientWidth;
let figureCount = document.querySelectorAll("figure");
let carouselWidth = document.getElementById("carousel").style.width=containerWidth*(figureCount.length)+"px";
let arrow = document.querySelectorAll("span");

figureCount.forEach(figwidth)
function figwidth(item) {
  item.style.width=containerWidth+'px';
}

let turn = 0;
arrow[0].addEventListener("click" , function() {
  turn++;
  document.getElementById("carousel").style.transform = `translateX(-${turn * containerWidth}px)`;
  checkHand()
})
arrow[1].addEventListener("click" , function() {
  turn--;
  document.getElementById("carousel").style.transform = `translateX(-${turn * containerWidth}px)`;
  checkHand()
})

function checkHand() {
  if(turn==0) {
    document.getElementById("left").style.display = "none";
  }
  else {
    document.getElementById("left").style.display = "block";
  }
  
  if(turn >= 0 && turn < (figureCount.length)-1) {
    document.getElementById("right").style.display = "block";
  }
  else {
    document.getElementById("right").style.display = "none";
  }
}
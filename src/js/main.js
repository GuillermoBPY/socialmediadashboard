const toggleBar = document.querySelector(".toggle__bar")
const ball = document.querySelector(".toggle__ball--light")
const body = document.querySelector("body")


toggleBar.addEventListener("click", function (){
  ball.classList.toggle("toggle__ball--dark");
  body.classList.toggle("darkmode");
})



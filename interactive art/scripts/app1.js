


function run(){
  var menu = document.querySelector(".menu")
var menuBtn = document.querySelector(".header__icon")
var menuBtnIcon = document.querySelector(".header__icon i")

menuBtn.addEventListener("click",function (){
  if (menuBtnIcon.classList.contains("fa-bars")) {
    menu.style.left = "0px"
    menuBtnIcon.classList = "fa fa-times"
  } else {
    menu.style.left = "-256px"
    menuBtnIcon.classList = "fa fa-bars"
  }
})

}

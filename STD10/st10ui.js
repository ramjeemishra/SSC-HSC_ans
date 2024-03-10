const hamburger = document.querySelector('.hamburger');
hamburger.onclick = function() {
  navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("activa");
};





// preloader 

var loader = document.getElementById("preloader");

window.addEventListener("load" , function () {
  loader.style.display= "none";
});





// dark mode
const body = document.querySelector('body');
const toggle = document.getElementById('toggle');
toggle.onclick = function(){
    toggle.classList.toggle('active')
    body.classList.toggle('active')
}
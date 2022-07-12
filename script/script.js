/* Barre de navigation fixée */
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 50);
    
});
/* Date sur le copyright */
let currentDate = new Date();
document.getElementById("year").innerHTML = currentDate.getFullYear();
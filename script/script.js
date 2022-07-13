/* Barre de navigation fixée */
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 50);
    
});

/* Date sur le copyright */
let currentDate = new Date();
document.getElementById("year").innerHTML = currentDate.getFullYear();

/* Montrer les compétences */
document.getElementById('lg').style.display = "none";
document.getElementById('hb').style.display = "none";
function showSkill(s, ns1, ns2){
    document.getElementById(s).style.display = "block";
    document.getElementById(ns1).style.display = "none";
    document.getElementById(ns2).style.display = "none";
}
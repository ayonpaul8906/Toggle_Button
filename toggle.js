let button = document.querySelector(".button");

const toggle = function (){
    button.classList.toggle("move")
   
}
button.addEventListener("click",toggle);

const darkmode = function(){
    document.body.classList.toggle("dark-mode")

}
button.addEventListener("click",darkmode);
const toggle = document.getElementById("toggle")
const body = document.querySelector("body")

toggle.addEventListener("click", function(){
    this.classList.toggle("bi-moon-fill")
    if(this.classList.toggle("bi-sun-fill")){
        body.style.background = "#499cfe"
        body.style.color = "white"
        body.style.transition = "2s"
    }
    else{
        body.style.background = "#1d1664"
        body.style.color = "yellow"
        body.style.transition = "2s"
    }
})
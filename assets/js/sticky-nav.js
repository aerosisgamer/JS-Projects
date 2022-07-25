let nav = document.getElementById("nav")

window.addEventListener("scroll", function(){
    if(window.pageYOffset >= 80){
        nav.classList.add("sticky")
    }else if(this.window.pageYOffset <= 50){
        nav.classList.remove("sticky")
    }
});
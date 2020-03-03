console.log("hola")
boton = document.getElementsByClassName("design_button")
for (i=0 ; i< boton.length; i++){
    boton[i].onmouseover = function (){
        console.log(this)
        this.classList.toggle("animated")
        this.classList.toggle("swing")
        
        // boton[i].classList.toggle("animated","swing")
    }
}
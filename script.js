var menuVisible = false;
function mostrarOcultarMenu() {
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible=false
    } else{
        document.getElementById("nav").classList = "responsive";
        menuVisible =true
    }
}

function seleccionar(){
    // oculto el menu una vez seleccionada la opcion
    document.getElementById("nav").classList="";
    menuVisible=false;
}
// funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >=100){
        let habilidades = document.getElementsByClassName("progreso")
        habilidades[0].classList.add("Java");
        habilidades[1].classList.add("javascript");
        habilidades[2].classList.add("htmlcss");
        habilidades[3].classList.add("comunicacion");
        habilidades[4].classList.add("trabajo");
        habilidades[5].classList.add("creatividad");
        habilidades[6].classList.add("dedicacion");
        habilidades[7].classList.add("castellano");
        habilidades[8].classList.add("portugues");
        habilidades[9].classList.add("ingles");
    }
}

//  detecto el scrollingpara aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}

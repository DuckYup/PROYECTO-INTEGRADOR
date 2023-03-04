/*Menu lateral*/
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

let ingles = document.getElementById("ingles");
crearBarra(ingles);
let frances = document.getElementById("frances");
crearBarra(frances);
let chino = document.getElementById("chino");
crearBarra(chino);
let coreano = document.getElementById("coreano");
crearBarra(coreano);
let español = document.getElementById("español");
crearBarra(español);
let office = document.getElementById("office");
crearBarra(office);


let contadores = [-1,-1,-1,-1,-1,-1];
let entro = false;

function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalIngles = setInterval(function(){
            pintarBarra(ingles, 16, 0, intervalIngles);
        },100);
        const intervalFrances = setInterval(function(){
            pintarBarra(frances, 11, 1, intervalFrances);
        },100);
        const intervalChino = setInterval(function(){
            pintarBarra(chino, 15, 2, intervalChino);
        },100);
        const intervalCoreano = setInterval(function(){
            pintarBarra(coreano, 14, 3, intervalCoreano);
        },100);
        const intervalEspañol = setInterval(function(){
            pintarBarra(español, 17, 4, intervalEspañol);
        },100);
        const intervalOffice = setInterval(function(){
            pintarBarra(office, 13, 5, intervalOffice);
        },100);
    }
}

function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#FFFFFF";
    }else{
        clearInterval(interval)
    }
}

window.onscroll = function(){
    efectoHabilidades();
}
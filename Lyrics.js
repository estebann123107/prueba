const list ={
    IdleTown:{
        tittle:"Idle Town",
        textColor: "rgb(245, 106, 81)",
        fondo:"/Images/SunsetSeason.jpg",
        letra:"letra",
        traduccion:"traduccion",
    }
}

function obtenerParametro(nombre){
    const params = new
    URLSearchParams(window.location.search);
    return params.get(nombre)
}

const songKey = obtenerParametro("Song");
//tema
if(list[songKey]){
    document.documentElement.style.setProperty("--colorTexto",list[songKey].textColor);
}
if(list[songKey]){
    document.documentElement.style.setProperty("--fondo", `url(${list[songKey].fondo})`);
}

//titulo
if (list[songKey]){
    document.getElementById("tittle").innerText = list[songKey].tittle}
    

//letra
if (list[songKey]){
        document.getElementById("letra").innerText = list[songKey].letra}

//traduccion
if (list[songKey]){
    document.getElementById("traduccion").innerText = list[songKey].traduccion}

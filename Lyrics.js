const list ={
    IdleTown:{
        tittle:"Idle Town",
        textColor: "rgb(245, 106, 81)",
        fondo:"/Images/SunsetSeason.jpg",
    }
}

function obtenerParametro(nombre){
    const params = new
    URLSearchParams(window.location.search);
    return params.get(nombre)
}

const songKey = obtenerParametro("Song");

if(list[songKey]){
    document.documentElement.style.setProperty("--colorTexto",list[songKey].textColor);
}
if(list[songKey]){
    document.documentElement.style.setProperty("--fondo", `url(${list[songKey].fondo})`);
}
if (list[songKey]){
    document.getElementById("tittle").innerText = list[songKey].tittle}

const list ={
    IdleTown:{
        tittle:"Idle Town",
        textColor: "rgb(245, 106, 81)",
        fondo:"/Images/SunsetSeason.jpg",
        letra:"This town will never change(\n)People come and go, it's all the same(\n)Speed the roads on our doubting days(\n)To any place that's far away(\n)I never learned anybody's name(\n)We all vowed that we wouldn't stay(\n)Kissing signs on the interstate(\n)All we do for now is sit and wait(\n)In our idle town, in our idle town(\n)Yeah, we invent our own little games(\n)When the lights out at the stadium, hey(\n)Making life a spinning arcade(\n)And curfew's at midnight, we watch the sunrise(\n)We watch the sunrise(\n)We watch the Sun(\n)Springtime when the air is thin(\n)We're getting antsy and they're noticing(\n)While everybody's off partying(\n)We're watching stars over ice-cream(\n)And now we're kicking up to seventh gear(\n)And we're breathing in the atmosphere(\n)And I don't even need a sip of beer(\n)Yeah I can feel it all(\n)In our idle town, in our idle town(\n)Yeah, we invent our own little games(\n)When the lights out at the stadium, hey(\n)Making life a spinning arcade(\n)And curfew's at midnight, we watch the sunrise(\n)We watch the sunrise(\n)We watch the Sun(\n)
And they watched the sunrise(\n)Blinking out of red eyes, and sore minds(\n)The airplanes keep flying by, and they cry(\n)'Cause they've never even touched the sky(\n)No, they'll never even touch the sky(\n)Yeah we invent our own little games(\n)And everybody's trying to escape(\n)Killing time at the yellow café
And curfew's at midnight(\n)Yeah I think that we'll all be okay(\n)The idle town will stay as it stays(\n)And everyone I love's in this place(\n)So curfew's at midnight(\)We watch the sunrise",
        traduccion:"traduccion",
        video:"https://www.youtube.com/embed/BI5_hpUxDrM?si=m_Tk3-jIMy_KfFTD",
        audio:"IdleTown.mp3"
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

//video
if (list[songKey]){
    document.getElementById("video").src = list[songKey].video}

//audio
if (list[songKey]){
    document.getElementById("audio").src = list[songKey].audio}

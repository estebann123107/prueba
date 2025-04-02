const list ={
    IdleTown:{
        tittle:"Idle Town",
        textColor: "rgb(245, 106, 81)",
        fondo:"/Images/SunsetSeason.jpg",
        letra:"This town will never change(\)People come and go, it's all the same(\)Speed the roads on our doubting days(\)To any place that's far away(\)I never learned anybody's name(\)We all vowed that we wouldn't stay(\)Kissing signs on the interstate(\)All we do for now is sit and wait(\)In our idle town, in our idle town(\)Yeah, we invent our own little games(\)When the lights out at the stadium, hey(\)Making life a spinning arcade(\)And curfew's at midnight, we watch the sunrise(\)We watch the sunrise(\)We watch the Sun(\)Springtime when the air is thin(\)We're getting antsy and they're noticing(\)While everybody's off partying(\)We're watching stars over ice-cream(\)And now we're kicking up to seventh gear(\)And we're breathing in the atmosphere(\)And I don't even need a sip of beer(\)Yeah I can feel it all(\)In our idle town, in our idle town(\)Yeah, we invent our own little games(\)When the lights out at the stadium, hey(\)Making life a spinning arcade(\)And curfew's at midnight, we watch the sunrise(\)We watch the sunrise(\)We watch the Sun(\)And they watched the sunrise(\)Blinking out of red eyes, and sore minds(\)The airplanes keep flying by, and they cry(\)'Cause they've never even touched the sky(\)No, they'll never even touch the sky(\)Yeah we invent our own little games(\)And everybody's trying to escape(\)Killing time at the yellow café(\)And curfew's at midnight(\)Yeah I think that we'll all be okay(\)The idle town will stay as it stays(\)And everyone I love's in this place(\)So curfew's at midnight(\)We watch the sunrise",
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

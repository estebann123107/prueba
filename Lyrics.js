const list ={
    IdleTown:{
        tittle:"Idle Town",
        textColor: "rgb(245, 106, 81)",
        fondo:"/Images/SunsetSeason.jpg",
        letra:"This town will never change\nPeople come and go, it's all the same\nSpeed the roads on our doubting days\nTo any place that's far away\n\n\nI never learned anybody's name\nWe all vowed that we wouldn't stay\nKissing signs on the interstate\nAll we do for now is sit and wait\n\n\nIn our idle town, in our idle town\n\n\nYeah, we invent our own little games\nWhen the lights out at the stadium, hey\nMaking life a spinning arcade\nAnd curfew's at midnight, we watch the sunrise\nWe watch the sunrise\nWe watch the Sun\n\n\nSpringtime when the air is thin\nWe're getting antsy and they're noticing\nWhile everybody's off partying\nWe're watching stars over ice-cream\n\n\nAnd now we're kicking up to seventh gear\nAnd we're breathing in the atmosphere\nAnd I don't even need a sip of beer\nYeah I can feel it all\n\n\nIn our idle town, in our idle town\n\n\nYeah, we invent our own little games\nWhen the lights out at the stadium, hey\nMaking life a spinning arcade\nAnd curfew's at midnight, we watch the sunrise\nWe watch the sunrise\nWe watch the Sun\n\n\nAnd they watched the sunrise\nBlinking out of red eyes, and sore minds\nThe airplanes keep flying by, and they cry\n'Cause they've never even touched the sky\nNo, they'll never even touch the sky\n\n\nYeah we invent our own little games\nAnd everybody's trying to escape\nKilling time at the yellow café\nAnd curfew's at midnight\n\n\nYeah I think that we'll all be okay\nThe idle town will stay as it stays\nAnd everyone I love's in this place\nSo curfew's at midnight\nWe watch the sunrise",
        traduccion:"traduccion",
        video:"https://www.youtube.com/embed/BI5_hpUxDrM?si=m_Tk3-jIMy_KfFTD",
        audio:"/Audios/IdleTown.mp3"
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
    document.getElementsById("audio").src = list[songKey].audio}

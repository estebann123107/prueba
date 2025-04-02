const list ={
    IdleTown:{
        tittle:"Idle Town",
        textColor: "rgb(245, 106, 81)",
        fondo:"/Images/SunsetSeason.jpg",
        letra:"This town will never change\nPeople come and go, it's all the same\nSpeed the roads on our doubting days\nTo any place that's far away\n\nI never learned anybody's name\nWe all vowed that we wouldn't stay\nKissing signs on the interstate\nAll we do for now is sit and wait\n\nIn our idle town, in our idle town\n\nYeah, we invent our own little games\nWhen the lights out at the stadium, hey\nMaking life a spinning arcade\nAnd curfew's at midnight, we watch the sunrise\nWe watch the sunrise\nWe watch the Sun\n\nSpringtime when the air is thin\nWe're getting antsy and they're noticing\nWhile everybody's off partying\nWe're watching stars over ice-cream\n\nAnd now we're kicking up to seventh gear\nAnd we're breathing in the atmosphere\nAnd I don't even need a sip of beer\nYeah I can feel it all\n\nIn our idle town, in our idle town\n\nYeah, we invent our own little games\nWhen the lights out at the stadium, hey\nMaking life a spinning arcade\nAnd curfew's at midnight, we watch the sunrise\nWe watch the sunrise\nWe watch the Sun\n\nAnd they watched the sunrise\nBlinking out of red eyes, and sore minds\nThe airplanes keep flying by, and they cry\n'Cause they've never even touched the sky\nNo, they'll never even touch the sky\n\nYeah we invent our own little games\nAnd everybody's trying to escape\nKilling time at the yellow café\nAnd curfew's at midnight\n\nYeah I think that we'll all be okay\nThe idle town will stay as it stays\nAnd everyone I love's in this place\nSo curfew's at midnight\nWe watch the sunrise",
        traduccion:"This town will never change\n(Esta ciudad nunca cambiará)\n\nPeople come and go, it's all the same\n(La gente va y viene, es todo lo mismo)\n\nSpeed the roads on our doubting days\n(Acelerar las carreteras en nuestros días de duda)\n\nTo any place that's far away\n(A cualquier lugar que esté lejos)\n\nI never learned anybody's name\n(Nunca aprendí el nombre de nadie)\n\nWe all vowed that we wouldn't stay\n(Todos juramos que no nos quedaríamos)\n\nKissing signs on the interstate\n(Las señales de besos en la interestatal)\n\nAll we do for now is sit and wait\n(Todo lo que hacemos por ahora es sentarnos y esperar)\n\nIn our idle town, in our idle town\nEn nuestro pueblo ocioso, en nuestro pueblo ocioso)\n\nYeah, we invent our own little games\nSí, inventamos nuestros propios jueguitos)\n\nWhen the lights out at the stadium, hey\nCuando las luces del estadio se apagan, hey)\n\nMaking life a spinning arcade\n(Haciendo de la vida una arcada giratoria)\n\nAnd curfew's at midnight, we watch the sunrise\n(Y el toque de queda es a medianoche, vemos el amanecer)\n\nWe watch the sunrise\n(Vemos el amanecer)\n\nWe watch the Sun\n(Miramos el Sol)\n\nSpringtime when the air is thin\n(La primavera, cuando el aire es fino)\n\nWe're getting antsy and they're noticing\n(Nos estamos poniendo ansiosos y ellos están notando)\n\nWhile everybody's off partying\n(Mientras todo el mundo está fuera de fiesta)\n\nWe're watching stars over ice-cream\n(Estamos viendo las estrellas sobre el helado)\n\nAnd now we're kicking up to seventh gear\n(Y ahora estamos pasando a la séptima velocidad)\n\nAnd we're breathing in the atmosphere\n(Y estamos respirando la atmósfera)\n\nAnd I don't even need a sip of beer\n(Y ni siquiera necesito un sorbo de cerveza)\n\nYeah I can feel it all\n(Sí, puedo sentirlo todo)\n\nIn our idle town, in our idle town\n(En nuestro pueblo ocioso, en nuestro pueblo ocioso)\n\nYeah, we invent our own little games\n(Sí, inventamos nuestros propios jueguitos)\n\nWhen the lights out at the stadium, hey\n(Cuando las luces del estadio se apagan, hey)\n\nMaking life a spinning arcade\n(Haciendo de la vida una arcada giratoria)\n\nAnd curfew's at midnight, we watch the sunrise\n(Y el toque de queda es a medianoche, vemos el amanecer)\n\nWe watch the sunrise\n(Vemos el amanecer)\n\nWe watch the Sun\n(Miramos el Sol)\n\nAnd they watched the sunrise\n(Y vieron el amanecer)\n\nBlinking out of red eyes, and sore minds\n(Parpadear con los ojos rojos, y las mentes doloridas)\n\nThe airplanes keep flying by, and they cry\n(Los aviones siguen volando, y lloran)\n\n'Cause they've never even touched the sky\n(Porque nunca han tocado el cielo)\n\nNo, they'll never even touch the sky\n(No, ni siquiera tocarán el cielo)\n\nYeah we invent our own little games\n(Sí, inventamos nuestros propios jueguitos)\n\nAnd everybody's trying to escape\nY todo el mundo está tratando de escapar)\n\nKilling time at the yellow café\n(Matar el tiempo en el café amarillo)\n\nAnd curfew's at midnight\n(Y el toque de queda es a medianoche)\n\nYeah I think that we'll all be okay\n(Sí, creo que todos estaremos bien)\n\nThe idle town will stay as it stays\n(El pueblo ocioso se quedará como se queda)\n\nAnd everyone I love's in this place\n(Y todos los que amo están en este lugar)\n\nSo curfew's at midnight\n(Así que el toque de queda es a medianoche)\n\nWe watch the sunrise\n(Vemos el amanecer)",
        video:"https://www.youtube.com/embed/BI5_hpUxDrM?si=m_Tk3-jIMy_KfFTD",
        reproductor:"/Audios/IdleTown.mp3"
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
    const audio = document.getElementById("audios");
    audio.src = list[songKey].reproductor
    audio.load();
}

/*
<section class="Cover" >
                    <a href="SunsetSeason.html">
                        <img src="SunsetSeason.jpg" alt="">
                        <h3 class="sun">Sunset Season</h3>
                    </a>

                </section>

                <section class="Cover">
                    <a href="KidKrow.html">
                        <img src="KitKrow.jpeg" alt="">
                        <h3 class="kid">Kid Krow</h3>
                    </a>

                </section>

                <section class="Cover">
                    <a href="Superache.html">
                        <img src="Superache.jpeg" alt="">
                        <h3 class="sup">Superache</h3>
                    </a>

                </section>

                <section class="Cover">

                    <a href="FoundHeaven.html">
                        <img src="FoundHeaven.jpeg" alt="" href="">
                        <h3 class="fh">Found Heaven</h3>
                    </a>

                </section>
*/
const template = document.getElementById('cover-template')

const Albums = [
    {
        title: 'Sunset Season',
        link: 'SunsetSeason.html',
        image: 'SunsetSeason.jpg',
        class: 'sun'

    },
    {
        title: 'Kid Krow',
        link: 'KidKrow.html',
        image: 'KitKrow.jpeg',
        class: 'kid'
    },
    {
        title: 'Superache',
        link: 'Superache.html',
        image: 'Superache.jpeg',
        class: 'sup'
    },
    {
        title: 'Found Heaven',
        link: 'FoundHeaven.html',
        image: 'FoundHeaven.jpeg',
        class: 'fh'
    },
]

const albumsGroup = document.querySelector('.Albumsgroup')



Albums.forEach(album => {
    const albumTemplete = template.content.cloneNode(true).querySelector('.Cover')
    const link = albumTemplete.querySelector('a')
    link.setAttribute('href', album.link)
    const title = albumTemplete.querySelector('h3')
    title.innerText = album.title
    title.classList.add(album.class)
    const image = albumTemplete.querySelector('img')
    image.setAttribute('src', album.image)

    albumsGroup.appendChild(albumTemplete)
})
 
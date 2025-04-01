const template = document.getElementById('cover-template')

const Albums = [
    {
        title: 'Sunset Season',
        link: 'Songs.html?album=Sunsetseason',
        image: 'Images/SunsetSeason.jpg',
        class: 'sun'

    },
    {
        title: 'Kid Krow',
        link: 'Songs.html?album=KidKrow',
        image: 'Images/KitKrow.jpeg',
        class: 'kid'
    },
    {
        title: 'Superache',
        link: 'Songs.html?album=Superache',
        image: 'Images/Superache.jpeg',
        class: 'sup'
    },
    {
        title: 'Found Heaven',
        link: 'Songs.html?album=FoundHeaven',
        image: 'Images/FoundHeaven.jpeg',
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
 
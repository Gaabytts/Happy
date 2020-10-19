const options = {
        dragging: false,
        touchZoom: false,
        doubleClickZoom: false,
        scrollWheelZoom: false,
        zoomControl: false
    }
    //create map
const map = L.map("mapid", options).setView([-23.4155522, -46.7539045], 13);

//create and add titleLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconsSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2],
});



//create and add marker
L.marker([-23.4113399, -46.7499117], { icon }).addTo(map);


/* IMAGE GALLERY*/
function selectImage(event) {
    const button = event.currentTarget
        //remover todas as classes active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove("active")
    }
    //selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".ophanage-details>img ")
        //atualizar o container de imagem
    imageContainer.src = image.src
        //adicionar a classe .active para este botão clicado
    button.classList.add('active')
}
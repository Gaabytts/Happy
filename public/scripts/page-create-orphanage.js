// CREATE MAP
const map = L.map("mapid").setView([-23.4155522, -46.7539045], 13);

//create and add titleLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// CREATE ICON
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconsSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2],
});

let marker;
// CREATE AND ADD MARKER
map.on("click", (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;
    document.querySelector("[name=lat]").value = lat;
    document.querySelector("[name=lng]").value = lng;
    // remove icon
    marker && map.removeLayer(marker);

    // add icon layer

    marker = L.marker([lat, lng], { icon }).addTo(map);
});

// ADICIONAR CAMPO DE FOTOS

function addPhotoToField() {
    // pegar o container de fotos #images
    const container = document.querySelector("#images");
    // pegar o container para duplicar .new-images
    const fieldsContainer = document.querySelectorAll(".new-upload");
    // realizar o clone da última imagem adionada
    const newFieldContainer = fieldsContainer[
        fieldsContainer.length - 1
    ].cloneNode(true);
    // verficar se o campo está vazio, se sim, não adicionar ao container de imagens
    const input = newFieldContainer.children[0];
    if (input.value == "") {
        return;
    }
    // limpar o campo antes de adicionar ao container de imagens
    input.value = "";
    // adicionar o clone ao container de #imagens
    container.appendChild(newFieldContainer);
}

function deleteField(event) {
    const span = event.currentTarget;
    const fieldsContainer = document.querySelectorAll(".new-upload");
    if (fieldsContainer.length <= 1) {
        // limpar o valor do campo
        span.parentNode.children[0].value = "";
        return
    }

    // deletar o campo
    // parentNode = .new-upload
    span.parentNode.remove();
}



// SELECIONAR DO SIM E NÃO
function toggleSelect(event) {
    // remover a classe .active (dos buttuons)
    document.querySelectorAll('.button-select button').forEach(function(button) {
            button.classList.remove('active')
        })
        // adicionar a classe .active no button clicado
    const button = event.currentTarget
    button.classList.add('active')
        // pegar o botão clicado
        // atulizar o input hidden com o valor selecionado 
    const input = document.querySelector('[name"open_on_weekends"]')
        // verificar se é sim ou não 
    input.value = button.dataset.value

}
document.addEventListener('DOMContentLoaded', function () {
    const imagenes = [
        {
            src: 'img/cecafi/orlando.jpeg',
            alt: 'cecafi',
            data: 'cecafi',
            nombre: 'Cecafi Orlando',
            medida: 'Medida: 45x45'
        },
        {
            src: 'img/cecafi/volterra_plus.jpeg',
            alt: 'cecafi',
            data: 'cecafi',
            nombre: 'Cecafi Volterra Plus',
            medida: 'Medida: 45x45'
        },
        {
            src: 'img/cecafi/itamaraca.jpeg',
            alt: 'cecafi',
            data: 'cecafi',
            nombre: 'Cecafi Itamaraca',
            medida: 'Medida: 45x45'
        },
        {
            src: 'img/cecafi/albero_foresta.jpeg',
            alt: 'cecafi',
            data: 'cecafi',
            nombre: 'Cecafi Albero Foresta Plus',
            medida: 'Medida: 20x60'
        },
        {
            src: 'img/cecafi/Cecafi 20x60 Albero Bosco Plus HD 2b (034421).png',
            alt: 'cecafi',
            data: 'cecafi',
            nombre: 'Cecafi Albero Bosco Plus HD',
            medida: 'Medida: 20x60'
        },
        
        {
            src: 'img/cejatel/legno_rosso.jpeg',
            alt: 'cejatel',
            data: 'cejatel',
            nombre: 'Cejatel Legno Rosso',
            medida: 'Medida: 50x50'
        },
        {
            src: 'img/cejatel/piero_black.jpeg',
            alt: 'cejatel',
            data: 'cejatel',
            nombre: 'Cejatel Piero Black',
            medida: 'Medida: 67x67'
        },
        {
            src: 'img/cejatel/piero_gris.jpeg',
            alt: 'cejatel',
            data: 'cejatel',
            nombre: 'Cejatel Piero Gris',
            medida: 'Medida: 67x67'
        },
        {
            src: 'img/cejatel/vernis_imbuia.jpeg',
            alt: 'cejatel',
            data: 'cejatel',
            nombre: 'Cejatel Vernis Imbuia',
            medida: 'Medida: 50x50'
        },
        {
            src: 'img/cejatel/avorio_beige.jpeg',
            alt: 'cejatel',
            data: 'cejatel',
            nombre: 'Cejatel Avorio Beige Ret A',
            medida: 'Medida: 67x67'
        },
        {
            src: 'img/elizabeth/agata.jpeg',
            alt: 'elizabeth',
            data: 'elizabeth',
            nombre: 'Elizabeth Agata',
            medida: 'Medida: 62x62'
        },
        {
            src: 'img/elizabeth/estatuario_venato.jpeg',
            alt: 'elizabeth',
            data: 'elizabeth',
            nombre: 'Elizabeth Estatuario Venato',
            medida: 'Medida: 62,5x125'
        },
        {
            src: 'img/elizabeth/portoro.jpeg',
            alt: 'elizabeth',
            data: 'elizabeth',
            nombre: 'Elizabeth Portoro',
            medida: 'Medida: 62,5x125'
        },
        {
            src: 'img/forte/ares_gray.jpeg',
            alt: 'forte',
            data: 'forte',
            nombre: 'PisoForte Ares Gray',
            medida: 'Medida: 32x60'
        },
        {
            src: 'img/forte/elegance_bold.jpeg',
            alt: 'forte',
            data: 'forte',
            nombre: 'PisoForte Elegance Plus Bold',
            medida: 'Medida: 32x60'
        },
        {
            src: 'img/forte/onix_beige.jpeg',
            alt: 'forte',
            data: 'forte',
            nombre: 'PisoForte Onix Beige',
            medida: 'Medida: 50x50'
        },
        {
            src: 'img/forte/decorare_bianco.jpeg',
            alt: 'forte',
            data: 'forte',
            nombre: 'PisoForte Decorare Bianco',
            medida: 'Medida: 32x60'
        },
        {
            src: 'img/savane/classic_avela.jpeg',
            alt: 'savane',
            data: 'savane',
            nombre: 'Savane Classic Avela',
            medida: 'Medida: 53x53'
        },
        {
            src: 'img/savane/classic_capuccino.jpeg',
            alt: 'savane',
            data: 'savane',
            nombre: 'Savane Classic Capuccino',
            medida: 'Medida: 53x53'
        },
        {
            src: 'img/savane/classic_off_white.jpeg',
            alt: 'savane',
            data: 'savane',
            nombre: 'Savane Classic Off White',
            medida: 'Medida: 53x53'
        },
        {
            src: 'img/savane/classic_marmo.jpeg',
            alt: 'savane',
            data: 'savane',
            nombre: 'Savane Classic Marmo',
            medida: 'Medida: 53x53'
        },
        {
            src: 'img/portinari/Portinari 60x60 Downtown HD WH 57814C (043815) VERIFICAR.jpeg',
            alt: 'portinari',
            data: 'portinari',
            nombre: 'Portinari Downtown HD',
            medida: 'Medida: 60x60'
        },
        {
            src: 'img/portinari/Portinari 60x60 Loft BK Bold 55461A (028340) VERIFICAR.png',
            alt: 'portinari',
            data: 'portinari',
            nombre: 'Portinari Loft BK Bold',
            medida: 'Medida: 60x60'
        },
        {
            src: 'img/portinari/Portinari 60x60 Loft no Bold 55464A 2 (028338).png',
            alt: 'portinari',
            data: 'portinari',
            nombre: 'Portinari Loft No Bold',
            medida: 'Medida: 60x60'
        },
        {
            src: 'img/portinari/Portinari 60x60 Loft SGR Bold 55459A (043815) VERIFICAR.jpeg',
            alt: 'portinari',
            data: 'portinari',
            nombre: 'Portinari Loft SGR Bold',
            medida: 'Medida: 60x60'
        },
        {
            src: 'img/portinari/Portinari 60x120 6062349A Cosmic Marble Venus RET (044341).jpeg',
            alt: 'portinari',
            data: 'portinari',
            nombre: 'Portinari Cosmic Marble Venus RET',
            medida: 'Medida: 60x120'
        },
        {
            src: 'img/portinari/Portinari 60x120 Pietra di Savoie SGR Pol RET 2 (041745).jpeg',
            alt: 'portinari',
            data: 'portinari',
            nombre: 'Portinari Pietra di Savoie SGR Pol RET',
            medida: 'Medida: 60x120'
        },
        

    ];
    
      

function renderizarGaleria(imagenes) {
    const catalogoDiv = document.querySelector('.filterable_cards');
    let html = '';

    imagenes.forEach(function(imagen) {
        html += `
            <div class="card" data-name="${imagen.data}">
                <img src="/${imagen.src}" alt="${imagen.alt}"/>
                <div class="card_body">
                    <h6 class="card_title">${imagen.nombre}</h6>
                    <p class="card_text">${imagen.medida}</p>
                </div>
            </div>
        `;
    });

    catalogoDiv.innerHTML = html;
}

function filtrarPorSeccion(seccion) {
    
    const cards = document.querySelectorAll('.card');
    cards.forEach(function(card) {
        const cardSeccion = card.dataset.name;

        
        card.classList.add("hide");
            
        if (seccion === 'todos' || cardSeccion === seccion) {
                card.classList.remove("hide");
            }

    
    });
}

document.addEventListener('click', function(event) {
    const filterButtons = document.querySelectorAll(".filter_buttons button");
    const seccion = event.target.dataset.section;

    if (event.target.tagName === 'BUTTON' && event.target.closest('.filter_buttons')){
    filterButtons.forEach(function(button) {
        button.classList.remove('active');
    });
    
      event.target.classList.add('active');

      filtrarPorSeccion(seccion);
    }  

});
renderizarGaleria(imagenes);
});

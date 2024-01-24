document.addEventListener('DOMContentLoaded', function () {
   
        const imagenes = [
            {
              src: '/img/cecafi/volterra_plus.jpeg',
              alt: 'cecafi',
              data: 'cecafi',
              nombre: 'Cecafi Volterra Plus',
              medida: 'Medida: 45x45'
            },
            {
              src: '/img/cecafi/albero_foresta.jpeg',
              alt: 'cecafi',
              data: 'cecafi',
              nombre: 'Cecafi Albero Foresta Plus',
              medida: 'Medida: 20x60'
            },
            {
                src: '/img/cecafi/Cecafi_albero_bosco.jpeg',
                alt: 'cecafi',
                data: 'cecafi',
                nombre: 'Cecafi Albero Bosco Plus',
                medida: 'Medida: 20x60'
            },
            {
              src: '/img/cejatel/piero_black.jpeg',
              alt: 'cejatel',
              data: 'cejatel',
              nombre: 'Cejatel Piero Black',
              medida: 'Medida: 67x67'
            },
            {
                src: '/img/cejatel/piero_gris.jpeg',
                alt: 'cejatel',
                data: 'cejatel',
                nombre: 'Cejatel Piero Gris',
                medida: 'Medida: 67x67'
              },
              {
                src: '/img/cejatel/vernis_imbuia.jpeg',
                alt: 'cejatel',
                data: 'cejatel',
                nombre: 'Cejatel Vernis Imbuia',
                medida: 'Medida: 50x50'
              },
              {
                src: '/img/elizabeth/agata.jpeg',
                alt: 'elizabeth',
                data: 'elizabeth',
                nombre: 'Elizabeth Agata',
                medida: 'Medida: 62x62'
              },
              {
                src: '/img/elizabeth/estatuario_venato.jpeg',
                alt: 'elizabeth',
                data: 'elizabeth',
                nombre: 'Elizabeth Estatuario Venato',
                medida: 'Medida: 62,5x125'
              },
              {
                src: '/img/elizabeth/Elizabeth_Bianco_Volakas.png',
                alt: 'elizabeth',
                data: 'elizabeth',
                nombre: 'Elizabeth Bianco Volakas',
                medida: 'Medida: 62x62'
              },
              {
                src: '/img/elizabeth/Elizabeth_Mendoza.png',
                alt: 'elizabeth',
                data: 'elizabeth',
                nombre: 'Elizabeth Mendoza',
                medida: 'Medida: 62x62'
              },
              {
                src: '/img/elizabeth/Elizabeth_maxiblue.png',
                alt: 'elizabeth',
                data: 'elizabeth',
                nombre: 'Elizabeth Maxiblue',
                medida: 'Medida: 62x125'
              },
              {
                src: '/img/forte/ares_gray.jpeg',
                alt: 'forte',
                data: 'forte',
                nombre: 'PisoForte Ares Gray',
                medida: 'Medida: 32x60'
                },
                {
                    src: '/img/forte/elegance_bold.jpeg',
                    alt: 'forte',
                    data: 'forte',
                    nombre: 'PisoForte Elegance Plus Bold',
                    medida: 'Medida: 32x60'
                },
                {
                    src: '/img/forte/onix_beige.jpeg',
                    alt: 'forte',
                    data: 'forte',
                    nombre: 'PisoForte Onix Beige',
                    medida: 'Medida: 50x50'
                },
                {
                    src: '/img/savane/classic_avela.jpeg',
                    alt: 'savane',
                    data: 'savane',
                    nombre: 'Savane Classic Avela',
                    medida: 'Medida: 53x53'
                },
                {
                    src: '/img/savane/classic_marmo.jpeg',
                    alt: 'savane',
                    data: 'savane',
                    nombre: 'Savane Classic Marmo',
                    medida: 'Medida: 53x53'
                }
          ];

    function renderizarGaleria(imagenes) {
        const catalogoDiv = document.querySelector('.filterable_cards');
        let html = '';

        imagenes.forEach(function(imagen) {
            html += `
                <div class="card" data-name="${imagen.data}">
                    <img src="${imagen.src}" alt="${imagen.alt}"/>
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

            
            filterButtons.forEach(function(button) {
                button.classList.remove('active');
            });
            event.target.classList.add('active');

            filtrarPorSeccion(seccion);
        
    });
    renderizarGaleria(imagenes);
});

document.addEventListener('DOMContentLoaded', function () {
    const imagenes = [
        {
            src: 'img/MGM/Armario MGM Alure 80 cm cappuccino (042912).jpeg',
            alt: 'mgm',
            data: 'mgm',
            nombre: 'Armario MGM Alure cappuccino',
            medida: 'Medida: 80cm'
        },
        {
            src: 'img/MGM/Armario MGM Alure 80 cm pistache (043892).jpeg',
            alt: 'mgm',
            data: 'mgm',
            nombre: 'MGM Alure Pistache',
            medida: 'Medida: 80cm'
        },
        {
            src: 'img/MGM/Armario MGM Duna Cimento.jpeg',
            alt: 'mgm',
            data: 'mgm',
            nombre: 'Armario MGM Duna Cimento',
            medida: 'Medida: 80cm'
        },

        
        {
            src: 'img/MGM/Armario MGM Alure 80 cm titanium (042911).jpeg',
            alt: 'mgm',
            data: 'mgm',
            nombre: 'MGM Alure Titanium',
            medida: 'Medida: 80cm'
        },
        {
            src: 'img/MGM/Armario MGM Duna 80cm pistache (043895).jpeg',
            alt: 'mgm',
            data: 'mgm',
            nombre: 'MGM Duna Pistache',
            medida: 'Medida: 80cm'
        },
        {
            src: 'img/MGM/Armario MGM Duna 80cm cappuccino (042920).jpeg',
            alt: 'mgm',
            data: 'mgm',
            nombre: 'MGM Duna Cappuccino',
            medida: 'Medida: 80cm'
        },
        {
            src: 'img/MGM/Armario MGM Duna 80cm titanium (042918).jpeg',
            alt: 'mgm',
            data: 'mgm',
            nombre: 'MGM Duna Titanium',
            medida: 'Medida: 80cm'
        },
        {
            src: 'img/MGM/Armario MGM Espejos Gota .png',
            alt: 'mgm',
            data: 'mgm',
            nombre: 'MGM Espejos Gota',
            medida: 'Medida: '
        },
        {
            src: 'img/MGM/Armario MGM Espejos Lua.png',
            alt: 'mgm',
            data: 'mgm',
            nombre: 'MGM Espejos Lua',
            medida: 'Medida: '
        },
        {
            src: 'img/MGM/Armario MGM Espejos Lumini.png',
            alt: 'mgm',
            data: 'mgm',
            nombre: 'MGM Espejos Lumini',
            medida: 'Medida: '
        },
        {
            src: 'img/MGM/Armario MGM Espejos Monet.png',
            alt: 'mgm',
            data: 'mgm',
            nombre: 'MGM Espejos Monet',
            medida: 'Medida: '
        },
        {
            src: 'img/MGM/Armario MGM Espejos Ori.png',
            alt: 'mgm',
            data: 'mgm',
            nombre: 'MGM Espejos Ori',
            medida: 'Medida: '
        },
        {
            src: 'img/MGM/Armario MGM Frise 80cm cimento (042930).jpeg',
            alt: 'mgm',
            data: 'mgm',
            nombre: 'MGM Frise Cimento',
            medida: 'Medida: 80cm'
        },
        {
            src: 'img/MGM/Armario MGM Frise 80cm pistache (042931).jpeg',
            alt: 'mgm',
            data: 'mgm',
            nombre: 'MGM Frise Pistache',
            medida: 'Medida: 80cm'
        },
        {
            src: 'img/MGM/Armario MGM Frise 80cm titanium (042929).jpeg',
            alt: 'mgm',
            data: 'mgm',
            nombre: 'MGM Frise Titanium',
            medida: 'Medida: 80cm'
        },
        {
            src: 'img/MGM/Armario MGM Hortensia 55cm amendoa off white (044816).jpeg',
            alt: 'mgm',
            data: 'mgm',
            nombre: 'MGM Hortensia blanco',
            medida: 'Medida: 55cm'
        },
        {
            src: 'img/MGM/Armario MGM Hortensia 55cm cafe blanco (042939).jpeg',
            alt: 'mgm',
            data: 'mgm',
            nombre: 'MGM Hortensia Cafe Blanco',
            medida: 'Medida: 55cm'
        },
        {
            src: 'img/MGM/Armario MGM Hortensia 55cm negro blanco (042940).jpeg',
            alt: 'mgm',
            data: 'mgm',
            nombre: 'MGM Hortensia Negro Blanco',
            medida: 'Medida: 55cm'
        },
        {
            src: 'img/MGM/Armario MGM iris 44cm blanco (043900).jpeg',
            alt: 'mgm',
            data: 'mgm',
            nombre: 'MGM Iris Blanco',
            medida: 'Medida: 44cm'
        },
        {
            src: 'img/MGM/Armario MGM iris 44cm cafe (042942).jpeg',
            alt: 'mgm',
            data: 'mgm',
            nombre: 'MGM Iris Cafe',
            medida: 'Medida: 44cm'
        },
        {
            src: 'img/MGM/Armario MGM Iris 44cm con espejo amendoa blanco (042943).jpeg',
            alt: 'mgm',
            data: 'mgm',
            nombre: 'MGM Iris con Espejo Amendoa Blanco',
            medida: 'Medida: 44cm'
        },
        {
            src: 'img/MGM/Armario MGM Lirio 59cm amendoa off white (043899).jpeg',
            alt: 'mgm',
            data: 'mgm',
            nombre: 'MGM Iris con Espejo Amendoa off White',
            medida: 'Medida: 44cm'
        },
        {
            src: 'img/MGM/Armario MGM Lirio 59cm amendoa blanco (042938).jpeg',
            alt: 'mgm',
            data: 'mgm',
            nombre: 'MGM Lirio Amendoa Blanco',
            medida: 'Medida: 59cm'
        },
        {
            src: 'img/MGM/Armario MGM Lirio 59cm amendoa off white (043899).jpeg',
            alt: 'mgm',
            data: 'mgm',
            nombre: 'MGM Lirio Amendoa off White',
            medida: 'Medida: 59cm'
        },
        {
            src: 'img/MGM/Armario MGM Lirio 59cm blanco (019045).jpeg',
            alt: 'mgm',
            data: 'mgm',
            nombre: 'MGM Lirio Blanco',
            medida: 'Medida: 59cm'
        },
        {
            src: 'img/MGM/Armario MGM Lirio 59cm blanco y negro (042772).jpeg',
            alt: 'mgm',
            data: 'mgm',
            nombre: 'MGM Lirio Blanco y Negro',
            medida: 'Medida: 59cm'
        },
        {
            src: 'img/MGM/Armario MGM Lirio 59cm cafe blanco (042773).jpeg',
            alt: 'mgm',
            data: 'mgm',
            nombre: 'MGM Lirio Cafe Blanco',
            medida: 'Medida: 59cm'
        },
        {
            src: 'img/MGM/Armario MGM Lirio 59cm cafe off white (043898).jpeg',
            alt: 'mgm',
            data: 'mgm',
            nombre: 'MGM Lirio Cafe off White',
            medida: 'Medida: 59cm'
        },
        {
            src: 'img/MGM/Armario MGM Messina 59cm amendoa?? (044813) VERIFICAR.jpeg',
            alt: 'mgm',
            data: 'mgm',
            nombre: 'MGM Messina Amendoa',
            medida: 'Medida: 59cm'
        },
        
        {
            src: 'img/MGM/Armario MGM Messina 59cm blanco (044811).jpeg',
            alt: 'mgm',
            data: 'mgm',
            nombre: 'MGM Messina Blanco',
            medida: 'Medida: 59cm'
        },
        {
            src: 'img/MGM/Armario MGM Messina 59cm blanco y negro (044812).jpeg',
            alt: 'mgm',
            data: 'mgm',
            nombre: 'MGM Messina Blanco y Negro',
            medida: 'Medida: 59cm'
        },
        {
            src: 'img/MGM/Armario MGM Messina 59cm cafe (044814).jpeg',
            alt: 'mgm',
            data: 'mgm',
            nombre: 'MGM Messina Cafe',
            medida: 'Medida: 59cm'
        },
        {
            src: 'img/MGM/Armario MGM Metalo 60cm cimento (042937).jpeg',
            alt: 'mgm',
            data: 'mgm',
            nombre: 'MGM Metalo Cimento',
            medida: 'Medida: 60cm'
        },
        {
            src: 'img/MGM/Armario MGM Metalo 60cm pistache (043897).jpeg',
            alt: 'mgm',
            data: 'mgm',
            nombre: 'MGM Metalo Pistache',
            medida: 'Medida: 60cm'
        },
        {
            src: 'img/MGM/Armario MGM Metalo 60cm Titanium (042771).jpeg',
            alt: 'mgm',
            data: 'mgm',
            nombre: 'MGM Metalo Titanium',
            medida: 'Medida: 60cm'
        },
        {
            src: 'img/MGM/Armario MGM Portinari 80cm cimento (042915).jpeg',
            alt: 'mgm',
            data: 'mgm',
            nombre: 'MGM Portinari Cimento',
            medida: 'Medida: 80cm'
        },
        {
            src: 'img/MGM/Armario MGM Portinari 80cm pistache 2 (043893).jpeg',
            alt: 'mgm',
            data: 'mgm',
            nombre: 'MGM Portinari Pistache',
            medida: 'Medida: 80cm'
        },
        {
            src: 'img/MGM/Armario MGM Sense 80cm Cappuccino (042910).jpeg',
            alt: 'mgm',
            data: 'mgm',
            nombre: 'MGM Sense Capuccino',
            medida: 'Medida: 80cm'
        },
        {
            src: 'img/MGM/Armario MGM Sense 80cm Pistache (043891).jpeg',
            alt: 'mgm',
            data: 'mgm',
            nombre: 'MGM Sense Pistache',
            medida: 'Medida: 80cm'
        },
        {
            src: 'img/MGM/Armario MGM Sense 80cm Titanium (042909).jpeg',
            alt: 'mgm',
            data: 'mgm',
            nombre: 'MGM Sense Titanium',
            medida: 'Medida: 80cm'
        },
        {
            src: 'img/MGM/Armario MGM Veneto 80cm cappuccino (042917).jpeg',
            alt: 'mgm',
            data: 'mgm',
            nombre: 'MGM Veneto Capuccino',
            medida: 'Medida: 80cm'
        },
        {
            src: 'img/MGM/Armario MGM Veneto 80cm pistache (043894).jpeg',
            alt: 'mgm',
            data: 'mgm',
            nombre: 'MGM Veneto Pistache',
            medida: 'Medida: 80cm'
        },
        {
            src: 'img/MGM/Armario MGM Veneto 80cm Titanium (042916).jpeg',
            alt: 'mgm',
            data: 'mgm',
            nombre: 'MGM Veneto Titanium',
            medida: 'Medida: 80cm'
        },
        {
            src: 'img/MGM/Armario MGM Vitta 80 cm Metalon Cimento (042933).jpeg',
            alt: 'mgm',
            data: 'mgm',
            nombre: 'MGM Vitta Metalon Cimento',
            medida: 'Medida: 80cm'
        },
        {
            src: 'img/MGM/Armario MGM Vitta 80cm pistache (044810).jpeg',
            alt: 'mgm',
            data: 'mgm',
            nombre: 'MGM Vitta Pistache',
            medida: 'Medida: 80cm'
        },
        {
            src: 'img/MGM/Armario MGM Vitta 80cm titanium (042932).jpeg',
            alt: 'mgm',
            data: 'mgm',
            nombre: 'MGM Vitta Titanium',
            medida: 'Medida: 80cm'
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
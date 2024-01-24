document.addEventListener('DOMContentLoaded', function () {
    const imagenes = [
        {
            src: 'img/docol/Docol barra apoyo 210mm 00058106 (033165).jpeg',
            alt: 'docol',
            data: 'docol',
            nombre: 'Docol Barra de Apoyo',
            medida: 'Medida: 210mm'
        },
        {
            src: 'img/docol/Docol barra apoyo elevable 80cm 00974816 (032485).jpeg',
            alt: 'docol',
            data: 'docol',
            nombre: 'Docol Barra de Apoyo Elevable',
            medida: 'Medida: 80cm'
        },
        {
            src: 'img/docol/Docol barra apoyo recta 40cm 00963316 (032469).jpeg',
            alt: 'docol',
            data: 'docol',
            nombre: 'Docol Barra de Apoyo Recta',
            medida: 'Medida: 40cm'
        },
        {
            src: 'img/docol/Docol barra apoyo recta 60cm 00963416 (032470).jpeg',
            alt: 'docol',
            data: 'docol',
            nombre: 'Docol Barra de Apoyo Recta',
            medida: 'Medida: 60cm'
        },
        {
            src: 'img/docol/Docol barra apoyo recta 80cm 00963716 (032471).jpeg',
            alt: 'docol',
            data: 'docol',
            nombre: 'Docol Barra de Apoyo Recta',
            medida: 'Medida: 80cm'
        },
        {
            src: 'img/docol/Docol barra apoyo tipo L 80cm 00963916 (033201).jpeg',
            alt: 'docol',
            data: 'docol',
            nombre: 'Docol Barra de Apoyo tipo L',
            medida: 'Medida: 80cm'
        },
        {
            src: 'img/docol/Docol canilla alto de mesa cocina quad 00711806 (029833).jpeg',
            alt: 'docol',
            data: 'docol',
            nombre: 'Docol Canilla Cocina Quad',
            medida: 'Medida: ?'
        },
        {
            src: 'img/docol/Docol canilla cocina alto mesada pertutti 00903806 (030924).jpeg',
            alt: 'docol',
            data: 'docol',
            nombre: 'Docol Canilla Cocina Pertutti',
            medida: 'Medida: 80cm'
        },
        {
            src: 'img/docol/Docol canilla cocina pared galiflex chrome black 00967457 (030896).jpeg',
            alt: 'docol',
            data: 'docol',
            nombre: 'Docol Canilla Cocina Galiflex Black',
            medida: 'Medida: 80cm'
        },
        {
            src: 'img/docol/Docol canilla jardin 1130 00903706 (029332).jpeg',
            alt: 'docol',
            data: 'docol',
            nombre: 'Docol Canilla Jardin',
            medida: 'Medida: 80cm'
        },
        {
            src: 'img/docol/Docol canilla lavatorio 1193 nueva pertutti 00903006 (030884).jpeg',
            alt: 'docol',
            data: 'docol',
            nombre: 'Docol Canilla Lavatorio pertutti',
            medida: 'Medida: 80cm'
        },
        {
            src: 'img/docol/Docol canilla lavatorio alto lift 00872006 (028237).jpeg',
            alt: 'docol',
            data: 'docol',
            nombre: 'Docol Canilla Lavatorio alto lift',
            medida: 'Medida: 80cm'
        },
        {
            src: 'img/docol/Docol canilla lavatorio mesa lift chrome 00871906 (026176).jpeg',
            alt: 'docol',
            data: 'docol',
            nombre: 'Docol Canilla Lavatorio Mesa Lift',
            medida: 'Medida: 80cm'
        },
        {
            src: 'img/docol/Docol canilla lavatorio pico alto 90 nueva loggica 01137406 (036841).jpeg',
            alt: 'docol',
            data: 'docol',
            nombre: 'Docol Canilla Lavatorio Pico Alto',
            medida: 'Medida: 80cm'
        },
        {
            src: 'img/docol/Docol canilla lavatorio pressmatic compact 17160606 (016522).jpeg',
            alt: 'docol',
            data: 'docol',
            nombre: 'Docol Canilla Lavatorio Pressmatic Compact',
            medida: 'Medida: 80cm'
        },
        {
            src: 'img/docol/Docol canilla lavatorio primor 00671806 (030893).jpeg',
            alt: 'docol',
            data: 'docol',
            nombre: 'Docol Canilla Lavatorio Primor',
            medida: 'Medida: 80cm'
        },
        {
            src: 'img/docol/Docol canilla lavatorio trio 00500906 (030887).jpeg',
            alt: 'docol',
            data: 'docol',
            nombre: 'Docol Canilla Lavatorio Trio',
            medida: 'Medida: 80cm'
        },
        {
            src: 'img/docol/Docol canilla mistur mono mesa lift 00796106 (022688).jpeg',
            alt: 'docol',
            data: 'docol',
            nombre: 'Docol Canilla Mistur Mono Mesa Lift',
            medida: 'Medida: 80cm'
        },
        {
            src: 'img/docol/Docol canilla mono lift mesa 00795906 (021130).jpeg',
            alt: 'docol',
            data: 'docol',
            nombre: 'Docol Canilla Mono Mesa Lift',
            medida: 'Medida: 80cm'
        },
        {
            src: 'img/docol/Docol canilla mono mesa nexus 00494506 (024465).jpeg',
            alt: 'docol',
            data: 'docol',
            nombre: 'Docol Canilla  Mono Mesa Nexus',
            medida: 'Medida: 80cm'
        },
        {
            src: 'img/docol/Docol canilla tanque maquina 00897206 (037554).jpeg',
            alt: 'docol',
            data: 'docol',
            nombre: 'Docol Canilla Tanque Maquina',
            medida: 'Medida: 80cm'
        },
        {
            src: 'img/docol/Docol conj valv mono tina ducha lift 01039606 (028475).png',
            alt: 'docol',
            data: 'docol',
            nombre: 'Docol Conjunto Valv. Tina Ducha Lift',
            medida: 'Medida: 80cm'
        },
        {
            src: 'img/docol/Docol desague univ lavatorio arte 00486306 (028245).jpeg',
            alt: 'docol',
            data: 'docol',
            nombre: 'Docol Desague Univ. Lavatorio Arte',
            medida: 'Medida: 80cm'
        },
        {
            src: 'img/docol/Docol desague univ lavatorio lujo 00444306 (028245).jpeg',
            alt: 'docol',
            data: 'docol',
            nombre: 'Docol Desague Univ. Lavatorio Lujo',
            medida: 'Medida: 80cm'
        },
        {
            src: 'img/docol/Docol ducha higienica c llave nueva perrutti 00900806 (029023).jpeg',
            alt: 'docol',
            data: 'docol',
            nombre: 'Docol Ducha Higienica Llave Perrutti',
            medida: 'Medida: 80cm'
        },
        {
            src: 'img/docol/Docol Lift Ducha higienica 00812206 (024750).jpeg',
            alt: 'docol',
            data: 'docol',
            nombre: 'Docol Lift Ducha Higienica',
            medida: 'Medida: 80cm'
        },
        {
            src: 'img/docol/Docol mezc mono cocina gali 00934606 (029334).jpeg',
            alt: 'docol',
            data: 'docol',
            nombre: 'Docol Mono Cocina Gali',
            medida: 'Medida: 80cm'
        },
        {
            src: 'img/docol/Docol mezc mono lavatorio gali 00934406 (032173).jpeg',
            alt: 'docol',
            data: 'docol',
            nombre: 'Docol Mono Lavatorio Gali',
            medida: 'Medida: 80cm'
        },
        {
            src: 'img/docol/Docol mezc mono lavatorio nexus 00668906 (028238).jpeg',
            alt: 'docol',
            data: 'docol',
            nombre: 'Docol Mono Lavatorio Nexus',
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

        
        filterButtons.forEach(function(button) {
            button.classList.remove('active');
        });
        event.target.classList.add('active');

        filtrarPorSeccion(seccion);
    
});
renderizarGaleria(imagenes);
});

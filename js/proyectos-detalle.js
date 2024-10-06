document.addEventListener("DOMContentLoaded", function () {
    const contenedorSubImagenes = document.querySelector('.contenedor-sub__imagenes');
    const contenedorTitulo = document.querySelector('.titulo-texto');
    const contenedorDescripcion = document.querySelector('.description');
    const contenedorLinks = document.querySelector('.contenedor-description__detalle');
    const imagenPrincipal = document.querySelector('.imagen-principal');
    document.addEventListener('click', function (event) {
        const proyecto = event.target.closest('.contenido-proyectos');
        if (proyecto) {
            const recursoImagenes = proyecto.querySelector('.recurso-imagenes');
            const nombreProyecto = proyecto.querySelector('.nombre-proyecto').textContent;
            const descripcionProyecto = proyecto.querySelector('.description-proyecto__a').textContent;
            const linksProyecto = proyecto.querySelectorAll('.contenedor-links a');
            const imagenProyecto = proyecto.querySelector('img');
            // Limpiar el contenido antes de agregar nuevos elementos
            contenedorSubImagenes.innerHTML = '';
            contenedorLinks.innerHTML = '';
            // Agregar imágenes al contenedor de sub-imágenes
            const imagenes = Array.from(recursoImagenes.querySelectorAll('img'));
            imagenes.forEach((imagen) => {
                contenedorSubImagenes.appendChild(imagen.cloneNode(true));
            });

            // Mostrar el nombre y descripción del proyecto
            contenedorTitulo.textContent = nombreProyecto;
            contenedorDescripcion.textContent = descripcionProyecto;

            // Cambiar la imagen principal
            if (imagenProyecto && imagenProyecto.src) {
                imagenPrincipal.src = imagenProyecto.src;
                imagenPrincipal.alt = imagenProyecto.alt || 'Imagen Principal';

            } else {
                imagenPrincipal.src = '../img/portada.jpg';
                imagenPrincipal.alt = 'Imagen Principal';
            }

            // Agregar enlaces al contenedor de enlaces
            const iconosDiv = document.createElement('div');
            iconosDiv.classList.add('contenedor-iconos');
            linksProyecto.forEach((link) => {
                const linkElement = document.createElement('a');
                linkElement.href = link.href;
                linkElement.innerHTML = link.innerHTML;
                linkElement.target = '_blank';
                iconosDiv.appendChild(linkElement);
            });
            contenedorLinks.appendChild(iconosDiv);
            // Mover el elemento de descripción dentro del contenedor de descripción
            const descripcionElement = document.createElement('a');
            descripcionElement.classList.add('description');
            descripcionElement.textContent = descripcionProyecto;
            contenedorLinks.appendChild(descripcionElement);
        }
    });
});

function dirImaDetaPrin() {
    var rutaImagenPrincipal = imagenPrincipal.src;
    window.open(rutaImagenPrincipal, '_blank', 'width=600,height=400,top=100,left=100');
}

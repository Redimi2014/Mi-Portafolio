document.addEventListener("DOMContentLoaded", function () {
    /**Declaracion de variables para extraer las clases de los elementos a interacuar */
    const btnHtmlLink = document.querySelector(".list-html-Link");
    const btnPhpLink = document.querySelector(".list-php-Link");
    const btnCsharpLink = document.querySelector(".list-csharp-Link");
    const btnVbNetLink = document.querySelector(".list-vb-Link");

    /**Contenedores de las secciones de las baldozas en donde estan los proyectos */
    const panelHtml = document.querySelector(".contenedor-proyecos__html-css-js");
    const PanelPhp = document.querySelector(".contenedor-proyecos__php");
    const panelCsharp = document.querySelector(".contenedor-proyecos__csharp");
    const panelVbNet = document.querySelector(".contenedor-proyecos__vbnet");

    /**Contenedores para dar color a los iconos creados por mi que son de C# y de VB.net  */
    const contenedorLinkiconCsharp = document.querySelector(".conenedor-menu__proyectos div .icon-csharp");
    const contenedorLinkiconVb = document.querySelector(".conenedor-menu__proyectos div .icon-vbnet");

    /* Extraer las variables para lso i y a de la lista de menu*/
    const contenedorHtmlLinkMenuI = document.querySelector(".conenedor-menu__proyectos .list-html-Link  i");
    const contenedorHtmlLinkMenuA = document.querySelector(".conenedor-menu__proyectos .list-html-Link  a");
    const contenedorPhpLinkMenuI = document.querySelector(".conenedor-menu__proyectos .list-php-Link  i");
    const contenedorPhpLinkMenuA = document.querySelector(".conenedor-menu__proyectos .list-php-Link  a");
    const contenedorbtnCsharpLinkMenuA = document.querySelector(".conenedor-menu__proyectos .list-csharp-Link  a");
    const contenedorVbNetLinkMenuA = document.querySelector(".conenedor-menu__proyectos .list-vb-Link  a");

    /* Empezar con la interaccion, para que el menu inicie desde html CSS JS */
    panelHtml.style.display = 'flex';
    PanelPhp.style.display = 'none';
    panelCsharp.style.display = 'none';
    panelVbNet.style.display = 'none';
    btnHtmlLink.style.borderBottom = '2px solid var( --color-Primario)';
    contenedorHtmlLinkMenuI.style.color = 'var( --color-Primario)';
    contenedorHtmlLinkMenuA.style.color = 'var( --color-Primario)';

    // eventos para manejar los clics de las listas
    btnHtmlLink.addEventListener("click", function (event) {
        panelHtml.style.display = 'flex';
        PanelPhp.style.display = 'none';
        panelCsharp.style.display = 'none';
        panelVbNet.style.display = 'none';
        btnHtmlLink.style.borderBottom = ' 2px solid var( --color-Primario)';
        btnPhpLink.style.borderBottom = ' 2px solid var(--color-Secundario)';
        btnCsharpLink.style.borderBottom = ' 2px solid var(--color-Secundario)';
        btnVbNetLink.style.borderBottom = ' 2px solid var( --color-Secundario)';
        contenedorHtmlLinkMenuI.style.color = 'var( --color-Primario)';
        contenedorHtmlLinkMenuA.style.color = 'var( --color-Primario)';
        contenedorPhpLinkMenuI.style.color = 'var( --color-Secundario)';
        contenedorPhpLinkMenuA.style.color = 'var( --color-Secundario)';
        contenedorbtnCsharpLinkMenuA.style.color = 'var( --color-Secundario)';
        contenedorVbNetLinkMenuA.style.color = 'var( --color-Secundario)';
        contenedorLinkiconCsharp.style.border = '0.1rem solid var(--color-Primario)';
        contenedorLinkiconVb.style.border = '0.1rem solid var(--color-Primario)';
        contenedorLinkiconVb.style.border = '0.1rem solid var( --color-Secundario)';
        contenedorLinkiconCsharp.style.border = '0.1rem solid var( --color-Secundario)';
        contenedorLinkiconCsharp.style.color = 'var( --color-Secundario)';
        contenedorLinkiconVb.style.color = 'var( --color-Secundario)';
    });

    btnPhpLink.addEventListener("click", function (event) {
        panelHtml.style.display = 'none';
        PanelPhp.style.display = 'flex'
        panelCsharp.style.display = 'none';
        panelVbNet.style.display = 'none';
        btnHtmlLink.style.borderBottom = ' 2px solid var( --color-Secundario)';
        btnPhpLink.style.borderBottom = ' 2px solid var( --color-Primario)';
        btnCsharpLink.style.borderBottom = ' 2px solid var(--color-Secundario)';
        btnVbNetLink.style.borderBottom = ' 2px solid var(--color-Secundario)';
        contenedorHtmlLinkMenuI.style.color = 'var( --color-Secundario)';
        contenedorHtmlLinkMenuA.style.color = 'var( --color-Secundario)';
        contenedorPhpLinkMenuI.style.color = 'var( --color-Primario)';
        contenedorPhpLinkMenuA.style.color = 'var( --color-Primario)';
        contenedorbtnCsharpLinkMenuA.style.color = 'var( --color-Secundario)';
        contenedorVbNetLinkMenuA.style.color = 'var( --color-Secundario)';
        contenedorLinkiconVb.style.border = '0.1rem solid var( --color-Secundario)';
        contenedorLinkiconCsharp.style.border = '0.1rem solid var( --color-Secundario)';
        contenedorLinkiconCsharp.style.color = 'var( --color-Secundario)';
        contenedorLinkiconVb.style.color = 'var( --color-Secundario)';
    });

    btnCsharpLink.addEventListener("click", function (event) {
        panelHtml.style.display = 'none';
        PanelPhp.style.display = 'none';
        panelCsharp.style.display = 'flex'
        panelVbNet.style.display = 'none';
        btnHtmlLink.style.borderBottom = ' 2px solid var(--color-Secundario)';
        btnPhpLink.style.borderBottom = ' 2px solid var(--color-Secundario)';
        btnCsharpLink.style.borderBottom = ' 2px solid var( --color-Primario)';
        btnVbNetLink.style.borderBottom = ' 2px solid var(--color-Secundario)';
        contenedorHtmlLinkMenuI.style.color = 'var( --color-Secundario)';
        contenedorHtmlLinkMenuA.style.color = 'var( --color-Secundario)';
        contenedorPhpLinkMenuI.style.color = 'var( --color-Secundario)';
        contenedorPhpLinkMenuA.style.color = 'var( --color-Secundario)';
        contenedorbtnCsharpLinkMenuA.style.color = 'var( --color-Primario)';
        contenedorVbNetLinkMenuA.style.color = 'var( --color-Secundario)';
        contenedorLinkiconVb.style.border = '0.1rem solid var( --color-Secundario)';
        contenedorLinkiconCsharp.style.border = '0.1rem solid var(--color-Primario)';
        contenedorLinkiconCsharp.style.color = 'var( --color-Primario)';
        contenedorLinkiconVb.style.color = 'var( --color-Secundario)';
    });

    btnVbNetLink.addEventListener("click", function (event) {
        panelHtml.style.display = 'none';
        PanelPhp.style.display = 'none';
        panelCsharp.style.display = 'none';
        panelVbNet.style.display = 'flex'
        btnHtmlLink.style.borderBottom = ' 2px solid var( --color-Secundario)';
        btnPhpLink.style.borderBottom = ' 2px solid var(--color-Secundario)';
        btnCsharpLink.style.borderBottom = ' 2px solid var(--color-Secundario)';
        btnVbNetLink.style.borderBottom = ' 2px solid var( --color-Primario)';
        contenedorHtmlLinkMenuI.style.color = 'var( --color-Secundario)';
        contenedorHtmlLinkMenuA.style.color = 'var( --color-Secundario)';
        contenedorPhpLinkMenuI.style.color = 'var( --color-Secundario)';
        contenedorPhpLinkMenuA.style.color = 'var( --color-Secundario)';
        contenedorbtnCsharpLinkMenuA.style.color = 'var( --color-Secundario)';
        contenedorVbNetLinkMenuA.style.color = 'var( --color-Primario)';
        contenedorLinkiconCsharp.style.border = '0.1rem solid var( --color-Secundario)';
        contenedorLinkiconVb.style.border = '0.1rem solid var(--color-Primario)';
        contenedorLinkiconCsharp.style.color = 'var( --color-Secundario)';
        contenedorLinkiconVb.style.color = 'var( --color-Primario)';
    });

    /* seccion  para cerrar y abrir el module de Proyecto detallado */
    const btnSalirDetalle = document.querySelector(".titulo-principal a i");
    const modDetalleProyecto = document.querySelector(".contenedor-detalle_proyecto");
    const btnAbrirDetalle = document.querySelectorAll('.contenido-proyectos img');
    modDetalleProyecto.style.display = 'none';
    btnSalirDetalle.addEventListener("click", function (event) {
        modDetalleProyecto.style.display = 'none';
        // Deshabilitar el scroll del cuerpo
        document.body.style.overflow = 'auto';
    });

    // Recorre todos los elementos 'contenido-proyectos' y agrega un evento de clic a cada uno
    btnAbrirDetalle.forEach((btnAbrirDetalle) => {
        btnAbrirDetalle.addEventListener('click', () => {
            modDetalleProyecto.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });

    // Recorre todos los elementos 'contenido-proyectos' y agrega un evento de clic a cada uno
    const proyectos = document.querySelectorAll('.contenido-proyectos');
    proyectos.forEach((proyecto) => {
        const descripcionProyecto = proyecto.querySelector('.description-proyecto');
        const descripcionProyectoA = proyecto.querySelector('.description-proyecto__a');
        // Función para truncar el texto y mostrar solo una cantidad limitada de caracteres
        function truncarTexto(texto, longitudMaxima) {
            if (texto.length > longitudMaxima) {
                return texto.substring(0, longitudMaxima) + '...';
            }
            return texto;
        }
        const longitudMaxima = 35;
        const textoOriginal = descripcionProyecto.textContent.trim();
        const textoTruncado = truncarTexto(textoOriginal, longitudMaxima);
        descripcionProyecto.textContent = textoTruncado;
        descripcionProyectoA.textContent = textoOriginal;
    });
});
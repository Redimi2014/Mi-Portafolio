document.querySelector('.botton-menu__responsivo i').addEventListener('click', function () {
    const menu = document.querySelector('.menu-lista__derecha');
    const icon = document.querySelector('.botton-menu__responsivo i');
    const logoPrincipal = document.querySelector('.menu_lista .menu-lista__izquierda');
    menu.classList.toggle('mostrar-menu');

    // Alternar entre rotar y rotar-vuelta
    if (icon.classList.contains('rotar')) {
        icon.classList.remove('rotar');
        icon.classList.add('rotar-vuelta');
    } else {
        icon.classList.remove('rotar-vuelta');
        icon.classList.add('rotar');

    }
    //ocultar y mostrar el logo cada vez que se da clic al menu
    logoPrincipal.classList.add('ocultar-logo__principal');
    setTimeout(function () {
        logoPrincipal.classList.remove('ocultar-logo__principal');
    }, 100);
});

//Seccion para el boton de información
document.querySelector('.foto-usuario__curriculum').addEventListener('click', function () {
    //llamar el objeto
    const curriculumDesPiePagina = document.querySelector('.descargar__curriculum');
    //asignar el nombbre de la funcion 
    curriculumDesPiePagina.classList.toggle('mostrar-descurriculum__pie');
    //llamar el objeto
    const redesSocialesPiePagina = document.querySelector('.redes-sociales__curriculum');
    //asignar el nombre de la funcion
    redesSocialesPiePagina.classList.toggle('monstrar-redes__pie');

    const bloboFoto = document.querySelector('.contenedor-globo');

    //llamar el objeto
    const fotoPiePagina = document.querySelector('.foto-usuario__curriculum');
    //condicion para mantener la foto expandida cuando se de clic o viceversa 
    if (fotoPiePagina.classList.contains('foto-usuario__pie')) {
        fotoPiePagina.classList.remove('foto-usuario__pie');
        fotoPiePagina.classList.add('foto-usuario__piegrande');
        bloboFoto.classList.add('globo-texto__oculto');
    } else {
        fotoPiePagina.classList.remove('foto-usuario__piegrande');
        fotoPiePagina.classList.add('foto-usuario__pie');

    }
});

document.addEventListener('DOMContentLoaded', function () {
    //llamar el objeto
    const fotoPiePagina = document.querySelector('.foto-usuario__curriculum');
    //asignar la funcion de css para utilizarlo en un hover para hacer zoom cuando se pase el mouse por ensima
    fotoPiePagina.classList.toggle('foto-usuario__pie');

});
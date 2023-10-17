document.getElementById('menu-toggle-left').addEventListener('click', function (event) {
    event.preventDefault(); // Prevenir la acción predeterminada del enlace
    var navbar = document.getElementById('navbar');
    navbar.classList.toggle('active'); // Alternar la clase 'active' en el menú
});

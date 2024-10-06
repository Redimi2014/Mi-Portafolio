//link accesos externos
document.getElementById("linkedin-icon").addEventListener("click", function () {
    window.open("https://www.linkedin.com/in/rperezpaz", "_blank");
});

document.getElementById("github-icon").addEventListener("click", function () {
    window.open("https://github.com/Redimi2014", "_blank");
});

document.getElementById("facebook-icon").addEventListener("click", function () {
    window.open("https://web.facebook.com/BK30Rey/", "_blank");
});

document.getElementById("instagram-icon").addEventListener("click", function () {
    window.open("https://www.instagram.com/gregorybk30/", "_blank");
});

document.getElementById("docum-curriculum").addEventListener("click", function () {

    window.open("./docs/curriculum-Reymond-Perez.pdf", "_blank");
});

//link carpetas internas
document.getElementById("logoprincipal").addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "./index.html";
});

document.getElementById("inicio").addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "./index.html";
});

document.getElementById("skills").addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "./skills.html";
});

document.getElementById("formacion").addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "./formation.html";
});

document.getElementById("proyectos").addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "./proyect.html";
});

document.getElementById("contacto").addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "./contact.html";
});




const lemas = [
    "PROGRAMANDO CON PASIÓN, INSPIRANDO CON CREATIVIDAD", // Español
    "编程充满激情，激发创意灵感", // Chino Mandarín
    "CODING WITH PASSION, INSPIRING WITH CREATIVITY", // Inglés
    "उत्कृष्टता के साथ कोडिंग करते हुए, रचनात्मकता से प्रेरित करते हुए", // Hindi
    "برمجة بشغف، وإلهام بالإبداع", // Árabe
    "PROGRAMMATION AVEC PASSION, INSPIRATION AVEC CRÉATIVITÉ", // Francés
    "উত্সাহে কোডিং করা, সৃজনশীলতার সঙ্গে প্রেরণা", // Bengalí
    "PROGRAMANDO COM PAIXÃO, INSPIRANDO COM CREATIVIDADE", // Portugués
    "ПРОГРАММИРОВАНИЕ С ПАССИЕЙ, ВДОХНОВЛЯЯ ТВОРЧЕСТВОМ", // Ruso
    "PROGRAMMIEREN MIT LEIDENSCHAFT, INSPIRIEREN MIT KREATIVITÄT" // Alemán
];

document.addEventListener("DOMContentLoaded", function () {
    const lemaPrincipal = document.getElementById("lemaPrincipal");
    // Función para cambiar el lema cada 5 segundos de forma aleatoria
    setInterval(() => {
        // Añadir efecto de zoom
        lemaPrincipal.classList.add('zoom');
        const indiceAleatorio = Math.floor(Math.random() * lemas.length);
        const nuevoLema = lemas[indiceAleatorio];
        // Aplicar efecto de desvanecimiento al cambiar el lema
        lemaPrincipal.style.opacity = 0;
        setTimeout(() => {
            lemaPrincipal.textContent = nuevoLema;
            lemaPrincipal.style.opacity = 1;
            // Remover efecto de zoom después de un tiempo
            setTimeout(() => {
                lemaPrincipal.classList.remove('zoom');
            }, 500); // Esperar el tiempo de transición
        }, 500); // Esperar 0.5 segundos antes de mostrar el nuevo lema
    }, 5000); // Cambiar cada 5 segundos (5000 milisegundos)
});

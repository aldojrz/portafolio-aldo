// Efecto typing
const texto = "Desarrollador Web | Analista de Sistemas | Programador";
let i = 0;

function typing() {
    if (i < texto.length) {
        document.getElementById("typing").innerHTML += texto.charAt(i);
        i++;
        setTimeout(typing, 50);
    }
}

typing();

function mensaje() {
    document.getElementById("mensaje").innerHTML =
    "Gracias por tu interés. Estoy disponible para proyectos tecnológicos.";
}

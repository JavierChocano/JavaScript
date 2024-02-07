let nota = parseFloat(prompt("Introduce tu nota:"));
let cadena;
if (!isNaN(nota)) {
    if (nota >= 0 && nota < 3) {
        cadena="Muy deficiente";
    } else if (nota >= 3 && nota < 5) {
        cadena= "Insuficiente";
    } else if (nota >= 5 && nota < 6) {
        cadena= "Suficiente";
    } else if (nota >= 6 && nota < 7) {
        cadena="Bien";
    } else if (nota >= 7 && nota < 9) {
        cadena= "Notable";
    } else if (nota >= 9 && nota <= 10) {
        cadena= "Sobresaliente";
    } else {
        cadena="La nota debe estar entre 0 y 10";
    }
    alert(cadena);
} else {
    cadena= "Por favor, introduce un número válido para la nota.";
    alert(cadena);
}

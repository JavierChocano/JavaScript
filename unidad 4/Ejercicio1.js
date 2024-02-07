
let edad;
let faltan;

let cadena;
edad = prompt("¿Cuál es tu edad?");
edad = parseInt(edad)

faltan = 18 -edad;
if (!isNaN(edad)) { 
    if (edad >= 18) {
       cadena = "Tienes la edad suficiente para poder conducir"
    } else {
        cadena= "Eres menor de edad, por lo que no puedes conducir, te faltan "+faltan+" años"
    }
    alert(cadena);
} else {
    cadena = "Por favor, introduce un número válido para la edad.";
    alert(cadena);
}
console.log("Bienvenido al Sistema interactivo de Mensajes!")

const nombre = prompt("Por favor, ingresa tu nombre");
let edad = prompt("Por favor, ingresa tu edad");

edad = parseInt(edad);

if (isNaN(edad)) {
    console.error("Error: Por favor, ingresa una edad valida en numeros.");
}else if (edad<18) {
    alert(`Hola ${nombre}, eres menor de edad. ¡Sigue aprendiendo y disfruntando del codigo!`);
}else {
    alert(`Hola ${nombre},eres mayor de edad. ¡Preparate para grandes oportunidades en el mundo de la programacion!`);
}
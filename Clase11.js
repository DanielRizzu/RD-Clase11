
let precio;
let precioFinal;
let helado = 20;
let topping = Number(prompt("Seleccione un numero de Topping:  1 - Kinder / 2 - KitKat / 3 - Oreo "));


if (topping === 1) {
    precio = 25;
    alert("El helado cuesta $ " + (precioFinal = helado + precio) + " dolares");
} else if (topping === 2) {
    precio = 15;
    alert("El helado cuesta $ " + (precioFinal = helado + precio) + " dolares");
} else if (topping === 3) {
    precio = 10;
    alert("El helado cuesta $ " + (precioFinal = helado + precio) + " dolares");
} else {
    alert("No tenemos ese topping");
}

// precioFinal = helado + precio;
// alert("El helado cuesta $ " + precioFinal + " dolares");

let menu = Number(prompt("Seleccione un numero del menu: 1 - Carne / 2 - Verdura / 3 - Pescado"))

switch (menu) {
    case 1:
        alert("Con ese menu le ofrecemos vino tinto como bebida");
        break;
    case 2:
        alert("Con ese menu le ofrecemos agua como bebida");
        break;
    case 3:
        alert("Con ese menu le ofrecemos vino blanco como bebida");
        break;
    default: alert("Debe elegir algo del menu: 1 - Carne / 2 - Verdura / 3 - Pescado");
}

console.log("");
console.log("Ejercicio con array: ");
let jugadores = ["Oberto", "Ginobili", "Scola", "Prigioni"];
let basquet = "Nocioni";

console.log("Listado inicial de jugadores: ");
for (let i = 0; i < jugadores.length; i++) {
    console.log(jugadores[i]);
}

jugadores.push(basquet);

console.log("Listado actualizado de jugadores: ");
for (let i = 0; i < jugadores.length; i++) {
    console.log(jugadores[i]);
}

console.log("");
console.log("Ejercicio con while: ");
let numero = 0;
while (numero < 11) {
    console.log("El numero " + numero + " es mas chico que 11");
    numero++
}
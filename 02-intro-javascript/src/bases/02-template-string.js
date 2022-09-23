

const nombre = "Agustin";
const apellido = "Hernandez Montero";

//const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`;

console.log( nombreCompleto );

function getSaludo(nombre = 'Fernanda') {
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${ getSaludo('Lizeth')} `);
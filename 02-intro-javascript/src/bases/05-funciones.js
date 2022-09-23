/* 
const saludar = function( nombre ) => {
    return `Hola, ${ nombre }`;
};
*/

const saludar = (nombre) => {
  return `Hola, ${nombre}`;
};

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;

//saludar = 30;

console.log(saludar);
console.log(saludar3("Vegueta"));
console.log(saludar4());

const getUser = () => {
  return {
    uid: "ABC123",
    username: "El_Papi1502",
  };
};

const getUser2 = () => ({
  uid: "ABC123",
  username: "El_Papi1502",
});

console.log(getUser());
console.log(getUser2());

// Tarea 
// 1. Transformar a una función de Flecha.
// 2. Tiene que retornar un objeto implicito.
// 3. Test
function getUsuarioActivo( nombre ){
    return {
        uid: 'ABC567',
        username: nombre
    }
};

const usuarioActivo = getUsuarioActivo('Agustin');
console.log( usuarioActivo );

const getUsuarioActivo2 = (nombre) => ({
    uid: 'ABC567',
    username: nombre
});

const usuarioActivo2 = getUsuarioActivo2('Fernanda');
console.log( usuarioActivo2 );
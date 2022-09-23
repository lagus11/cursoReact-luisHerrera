
const personajes = ['Goku', 'Vegueta', 'Trunks'];

const [ , , p3 ] = personajes;

console.log( p3 );


const retornarArreglo = () => {
    return ['ABC', 123];
}

const [letras, numero] = retornarArreglo();
console.log(letras, numero);

//Tarea
//1. El primer valor del arr se llamará nombre
//2. se llamará setNombre
const uuseState = ( valor ) => {
    return [ valor, () => {console.log('Hola Mundo')}];
}

const arr = uuseState( 'Goku' );
console.log(arr);
arr[1]();

const [nombre, setNombre] = uuseState('Agustin');
console.log(nombre);
setNombre();





const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'IronMan'
}
/*
const { nombre, edad, clave } = persona;

console.log( nombre );
console.log( edad );
console.log( clave );*/

//console.log( persona.nombre);
//console.log( persona.edad);
//console.log( persona.clave);

const uuseContext = ( {clave, nombre, edad, rango = 'Capitán'} ) => {
    //const { edad, clave, nombre } = usuario;
    //console.log(edad,  nombre, rango);

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
}

const {nombreClave, anios, latlng:{ lat, lng} } = uuseContext( persona );
console.log(nombreClave, anios);
console.log( lat, lng );
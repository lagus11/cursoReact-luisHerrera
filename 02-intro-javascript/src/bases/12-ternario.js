

const activo = true;


//tradicional
/*let mensaje = '';
if ( !activo ) {
  mensaje = 'Activo';
}
else {
  mensaje = 'Inactivo';
}*/

//ternario
//const mensaje = ( !activo ) ? 'Activo' : 'Inactivo';
//const mensaje = ( !activo ) ? 'Activo' : null;

const mensaje = activo && 'Activo';

console.log(mensaje);
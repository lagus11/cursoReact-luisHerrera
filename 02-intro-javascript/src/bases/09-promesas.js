import { getHeroeById } from "./bases/08-imp-exp";

//resolve, promesa fue un exito
//reject, existio un problema
/*const promesa = new Promise((resolve, reject)=> {
    setTimeout(() => {
       
        const heroe = getHeroeById(2);
        resolve(heroe); //pasa heroe a then
        //reject('No se pudo encontrar el heroe');
    }, 2000);
});

promesa.then((heroe) => {
    //resolve fue exitoso
    console.log(heroe);
}).catch( error => console.warn(error)); //atrapa el error reject
*/

const getHeroeByIdAsync = ( id ) => {
    
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            const p1 = getHeroeById( id );
            !!p1 ? resolve(p1): reject("No existe Heroe");
        }, 2000);
    });

}

getHeroeByIdAsync(30)
    .then( console.log )
    .catch( console.warn );

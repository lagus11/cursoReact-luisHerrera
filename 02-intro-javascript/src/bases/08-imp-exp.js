
import { heroes,  owner } from '../data/heroes';

//console.log( heroes );


const getHeroeById = (id) => {
    return heroes.find(element => element.id === id);
}

//console.log( getHeroeById(2) );

const getHeroesByOwner = ( owner ) => heroes.filter((heroe) => heroe.owner === owner );

//console.log(getHeroesByOwner('DC'));

//console.log(owner);

export {getHeroeById, getHeroesByOwner};
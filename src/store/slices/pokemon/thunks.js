import { pokemonApi } from '../../../api/pokemonApi';
import { startLoadingPokemons, setPokemons } from './pokemonSlice';



export const getPokemons = ( page = 0 ) => {

    return async( dispatch, getState ) => {
        dispatch( startLoadingPokemons() );
        //const httpResp = await fetch(`/pokemon?limit=10&offset=${ page }`);
        //const dataPokemons = await httpResp.json();
        const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${ page }`);
        
        const actionSetPokemons = {
            page: page + 1,
            pokemons: data.results,
        }
       
        dispatch( setPokemons( actionSetPokemons ));
    }
}
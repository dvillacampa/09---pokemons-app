import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from './store/slices/pokemon';


export const PokemonApp = () => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch( getPokemons() );
    }, []);

    const { page, isLoading, pokemons } = useSelector( state => state.pokemon );

    return (
        <>
            <h1>Pokemon API</h1>
            <hr />

            <span>Pokemons page { page }</span>
            <p>Is loading: { isLoading ? 'True' : 'False' }</p>

            <ul>
                {
                    pokemons.map( ( pokemon ) => <li key={ pokemon.name }>{ pokemon.name }</li>)
                }
            </ul>
            <button 
                disabled={ isLoading }
                onClick={ () => dispatch( getPokemons( page )) }            
            >Next pokemons
            </button>
        </>
    )
}

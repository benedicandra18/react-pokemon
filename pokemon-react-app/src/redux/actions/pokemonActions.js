import { SET_POKEMONS, SET_POKEMON, FILTER_POKEMONS, POKEMONS_LOADING, POKEMON_NOT_FOUND } from '../types'

export const setPokemons = (pokemons) => {
    return {
        type: SET_POKEMONS,
        payload: pokemons
    }
}

export const setPokemon = (pokemon) => {
    return {
        type: SET_POKEMON,
        payload: pokemon
    }
}

export const filterPokemons = (filteredPokemons) => {
    return {
        type: FILTER_POKEMONS,
        payload: filteredPokemons
    }
}

export const notFoundPokemon = () => {
    return {
        type: POKEMON_NOT_FOUND
    }
}

export const setPokemonsLoading = () => {
    return {
        type: POKEMONS_LOADING
    }
}

import { SET_POKEMONS, SET_POKEMON} from '../types'

export function fetchGenIPokemons() {
    fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=160')
        .then(res => res.json())
        .then(function (pokemons) {
            pokemons.results.forEach(function (pokemon) {
                fetchPokemonDataFromGenI(pokemon)
            })
        })
}

export function fetchPokemonDataFromGenI(pokemon) {
    var species = []
    fetch('https://pokeapi.co/api/v2/generation/1/')
        .then(response => response.json())
        .then(data => data.pokemon_species
            .map(specieData => { return species.push(specieData.name) }))

        .then(fetch(pokemon.url)
            .then(res => res.json())
            .then(data => {
                if (species.includes(data.species.name)) {
                    return data
                }
            })
        )
}

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

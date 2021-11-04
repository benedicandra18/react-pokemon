import { combineReducers } from "redux"
import pokemonListReducer from "./pokemonListReducer"
import pokemonReducer from "./pokemonReducer"

export default combineReducers({
    pokemons: pokemonListReducer,
    pokemon: pokemonReducer
})
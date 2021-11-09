import { SET_POKEMONS, POKEMONS_LOADING, FILTER_POKEMONS } from "../types";

const initialState = {
  pokemons: [],
  filteredPokemons:[],
  filterStatus: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload
      };
    case FILTER_POKEMONS:
      return {
        ...state,
        // filteredPokemons: state.pokemons.filter((pokemon)=> {
        //   return pokemon.name.includes(action.payload.toLowerCase())
        // })
        filteredPokemons: action.payload,
        filterStatus: true
      }
    default:
      return state;
  }
}
import { SET_POKEMONS, POKEMONS_LOADING, FILTER_POKEMONS } from "../types";

const initialState = {
  pokemons: [],
  filteredPokemons: [],
  filterStatus: false,
  loading: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        loading: false
      };
    case POKEMONS_LOADING:
      return {
        ...state,
        loading: true
      };
    case FILTER_POKEMONS:
      return {
        ...state,
        filteredPokemons: action.payload,
        filterStatus: true
      }
    default:
      return state;
  }
}
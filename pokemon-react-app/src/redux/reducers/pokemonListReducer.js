import { GET_ALL_POKEMONS, FILTER_POKEMONS } from "../types";

const initialState = {
  pokemons: [],
  loading: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_POKEMONS:
      return {
        ...state,
        pokemons: action.payload
      };
    case FILTER_POKEMONS:
      return {
        ...state
      };
    case POKEMONS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
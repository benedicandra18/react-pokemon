import { GET_POKEMON, POKEMON_LOADING } from "../types";

const initialState = {
  pokemon: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMON:
      return {
        ...state,
        pokemon: action.payload
      };
    case POKEMON_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
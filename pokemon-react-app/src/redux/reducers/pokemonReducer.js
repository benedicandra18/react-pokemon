import { SET_POKEMON, POKEMON_NOT_FOUND, POKEMON_LOADING } from "../types";

const initialState = {
  pokemon: {},
  loading: false,
  notFound: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_POKEMON:
      return {
        ...state,
        pokemon: action.payload,
        loading: false,
        notFound: false
      };
    case POKEMON_NOT_FOUND:
      return {
        ...state,
        loading: false,
        notFound: true
      }
      case POKEMON_LOADING:
      return {
        ...state,
        loading: false
      }
    default:
      return state;
  }
}
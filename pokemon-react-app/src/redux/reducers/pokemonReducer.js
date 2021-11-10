import { SET_POKEMON, POKEMON_NOT_FOUND } from "../types";

const initialState = {
  pokemon: {},
  notFound: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_POKEMON:
      return {
        ...state,
        pokemon: action.payload,
        notFound: false
      };
    case POKEMON_NOT_FOUND:
      return {
        ...state,
        notFound: true
      }
    default:
      return state;
  }
}
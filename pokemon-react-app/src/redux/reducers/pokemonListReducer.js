import { SET_POKEMONS, POKEMONS_LOADING } from "../types";

const initialState = {
  pokemons: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload
      };
    default:
      return state;
  }
}
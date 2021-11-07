import { SET_POKEMON } from "../types";

const initialState = {
  pokemon: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_POKEMON:
      return {
        ...state,
        pokemon: action.payload
      };
    default:
      return state;
  }
}
import {POKEMON} from '../actionTypes';

export function SearchPokemon(payload) {
  return {
    type: POKEMON,
    payload
  };
}

import {POKEMON} from '../actionTypes';

const initialState = {
  pokemon: {
    name: '',
    desc: '',
    image: '',
    isFavorite: false
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case POKEMON:
      return {
        ...state,
        pokemon: {
          name: action.payload.name,
          desc: action.payload.desc,
          image: action.payload.image,
          isFavorite: action.payload.isFavorite,
        },
      };
    default:
      return state;
  }
};

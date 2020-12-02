import {SearchPokemon} from '../actions/pokemon';

//limpia los los estados selecionados al ser accionado
export function asyncSearchPokemon(pokemon) {
  return async (dispatch) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    if (!response || response.status !== 200){
      dispatch(
        SearchPokemon({
          name: 'No exist',
          desc: 'Pokemon not found',
          image: 'https://i.servimg.com/u/f47/12/07/42/11/tm/062-i10.jpg',
          isFavorite: false
        })
      )
    }else {
      const data = await response.json();
      const name = data.name;
      const desc = `this pokemon has Ability of: ${data.abilities[0].ability.name}`;
      const image = data.sprites.other.dream_world.front_default;
      dispatch(
        SearchPokemon({
          name: name,
          desc: desc,
          image: image,
          isFavorite: false
        })
      )
    }
  };
}

export function asyncClear(){
  return (dispatch) => {
    dispatch(
      SearchPokemon({
        name: '',
        desc: '',
        image: '',
        isFavorite: false
      })
    );
  }
}

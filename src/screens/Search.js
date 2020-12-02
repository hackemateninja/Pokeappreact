import React, {useState} from 'react';
import {Card} from "../components";
import styled from "styled-components";
import {connect} from "react-redux";

const SearchContainer = styled.div`
	width: 100%;
	height: 50%;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	margin-top: 10px;
	margin-bottom: 20px;
	margin-left: 75%;
`;

function Search({pokemon}) {

	const [localFavorite, setLocalFavorite] = useState(pokemon.pokemon.isFavorite)
	const [data, setData] = useState([]);
	const handleAddFavorite = () => {
		const favorite = {
			name: pokemon.pokemon.name,
			desc: pokemon.pokemon.desc,
			image: pokemon.pokemon.image,
			isFavorite: true
		}
		setData(prev => prev.push(favorite))
		localStorage.setItem("Favorites", JSON.stringify(data))
		setLocalFavorite(true)
	}



	return (
		<SearchContainer>
			{
				pokemon.pokemon.name.length <= 0? null:
					(<Card
						name={pokemon.pokemon.name}
						desc={pokemon.pokemon.desc}
						image={pokemon.pokemon.image}
						isFavorite={localFavorite}
						handleButton={handleAddFavorite}
					/>)
			}
		</SearchContainer>
	)
}

const mapStateToProps = (state) => {
	return state;
};

export default connect(mapStateToProps)(Search);

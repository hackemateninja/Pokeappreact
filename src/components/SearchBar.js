import React, {useState} from 'react';
import styled from "styled-components";
import {connect} from 'react-redux';
import {asyncSearchPokemon, asyncClear} from "../state/thunks/pokemon";


const Bar = styled.div`
	margin-top: 50px;
	width: 70%;
	background-color: white;
	padding: 10px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;
const Button = styled.button`
	width: 19%;
  height: 100%;
	border: 5px solid black;
	background-color: coral;
	color: white;
	font-weight: bold;
	font-size: 16px;
	padding: 10px;
`;
const Input = styled.input`
  width: 80%;
	height: 100%;
	font-family: sans-serif;
	font-size: 24px;
	font-weight: bold;
	border: 5px solid black;
	background-color: coral;
	color: white;
	padding: 5px;
`;

function SearchBar({getPokemon, pokemon, clear}) {
	const [name, setName] = useState('')

	const handleInputText = (e)=>{
		setName(e.target.value)
	}

	const handleSearchPokemon = (e) =>{
		e.preventDefault();
		getPokemon(name.trim().toLowerCase())
		setName('')
	}

	return (
		<Bar>
			<Input
				placeholder="Write a pokemon name"
				onChange={handleInputText}
				onSubmit={handleSearchPokemon}
				value={name}
				type="text"
			/>
			<Button type="submit" onClick={handleSearchPokemon}>
				Search
			</Button>
		</Bar>
	)
}
const mapStateToProps = (state) => {
	return state;
};

const mapDispatchToProps = (dispatch) => ({
	getPokemon: (name) => dispatch(asyncSearchPokemon(name)),
	clear: ()=> dispatch(asyncClear()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

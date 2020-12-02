import React, {useState, useEffect} from 'react';
import {Card} from "../components";
import styled from "styled-components";

const Container = styled.div`
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	flex-wrap: wrap;
	width: 100%;
	padding: 20px;
`;

const Message = styled.h3`
	text-align: center;
	font-weight: bold;
	font-size: 24px;
	font-family: sans-serif;
	margin-top: 40px;
`;

export default function Favorites() {

	const [data, setData] = useState([]);

	const handleLocalData = () => {
		const data = JSON.parse(localStorage.getItem("Favorites"))
		setData(data)
	}

	const handleDelete = (name) => {
		const newData = data.filter(n => n !== name);
		localStorage.setItem("Favorites", JSON.stringify(newData));
		setData(newData);
	}

	useEffect(()=>{
		handleLocalData()
	},[])


	if (data.length > 0){

		return (
			<Container>
				{
					data.map((poke, id)=>{
						return (
							<Card
								key={id.toString()}
								name={poke.name}
								isFavorite={poke.isFavorite}
								image={poke.image}
								desc={poke.desc}
								handleButton={() => handleDelete(poke.name)}
							/>
						)
					})
				}
			</Container>
		)
	}else {
		return (
			<Message>
				No exist favorites
			</Message>
		)
	}
}

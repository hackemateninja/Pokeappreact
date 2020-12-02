import React, {useState} from 'react';
import styled from "styled-components";

const CardContainer = styled.div`
	width: 400px;
	height: 400px;
	padding: 10px;
	background-color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
`;

const Image = styled.img`
	width: 350px;
	height: 250px;
`;

const Name = styled.h3`
	font-size: 20px;
	font-weight: bold;
	color: black;
	text-align: center;
`;


const Description = styled.p`
	font-size: 18px;
	font-weight: normal;
	color: darkslategrey;
	text-align: center;
	font-family: sans-serif;
`;

const Button = styled.button`
  width: 80%;
  height: 100px
  border: 5px solid black;
  background-color: coral;
  color: white;
  font-weight: bold;
  font-size: 16px;
  padding: 10px;
`;


export default function Card({name, desc, image, handleButton, isFavorite}) {

	return (
		<CardContainer>
			<Image src={image}/>
			<Name>
				{name}
			</Name>
			<Description>
				{desc}
			</Description>
			{
				isFavorite ? null :
					(
						<Button onClick={handleButton}>Add to favorites</Button>
					)
			}
		</CardContainer>
	)
}

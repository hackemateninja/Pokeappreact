import React from "react";
import styled from "styled-components";
import LOGO from './logo.webp'
import {Navigation, SearchBar} from "./components";

const Page = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Header = styled.div`
  width: 75%;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
const Logo = styled.img`
  width: 500px;
  height: 200px;
`

function App() {
  return (
    <Page>
      <Header>
        <Logo src={LOGO}/>
        <SearchBar />
      </Header>
      <Navigation/>
    </Page>
  );
}

export default App;

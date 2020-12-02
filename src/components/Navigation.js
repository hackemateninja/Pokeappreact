import React from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, NavLink
} from "react-router-dom";
import {
  Search,
  Favorites
} from '../screens'

const Nav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const InnerNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const List = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 350px;
  background-color: aliceblue;
  padding: 10px;
`;
const Item = styled.li`
  list-style: none;
  width: 170px;
  display: flex;
  justify-content: center;
  align-self: center;
`;

const routes = [
  {
    name: 'Search',
    url: '/'
  },
  {
    name: 'Favorites',
    url: '/favorites'
  }
]

export default function Navigation() {
  return (
    <Router>
      <Nav>
        <InnerNav>
          <List>
            {
              routes.map((r)=>(
                  <Item key={r.url}>
                    <NavLink
                      activeClassName="activeLink"
                      to={r.url}>
                      {r.name}
                    </NavLink>
                  </Item>
                )
              )
            }
          </List>
        </InnerNav>
        <Switch>
          <Route exact path="/">
            <Search />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
        </Switch>
      </Nav>
    </Router>
  );
}

import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const NavLink = styled(Link)`
  background-color: #323232;
  outline: none;
  border: 1px #ffcc00 solid;
  border-radius: 5px;
  text-decoration: none;
  color: white;
  line-height: 1.2;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  font-family: 'Raleway', sans-serif;
  margin: 0rem 2rem 0rem 1.2rem;
  font-weight: 600;
  &:hover {
    background-color: #ffcc00;
    color: black;
    transition: all 0.3s ease-out;
  }
`;

const HeaderAPIButton = ({styles}) => (
  <NavLink style={styles && {...styles}} to="/cryptocurrency-bitconi-api">
    {'Free API Key'}{' '}
  </NavLink>
);
export default HeaderAPIButton;

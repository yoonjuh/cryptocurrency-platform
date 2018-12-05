import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const NavLink = styled(Link)`
  padding-right: 5px;
  width: 100%;
  text-decoration: none;
  color: #808080;
  font-size: 15px;
  margin: 5px 10px;
  white-space: nowrap;
  line-height: 1.2;
  font-family: 'Righteous', sans-serif;
  &:hover {
    color: #e8e8e8;
    transition: all 0.5s ease-out;
  }
`;
const HeaderNavSubItem = ({name, to}) => <NavLink to={to}>{name}</NavLink>;
export default HeaderNavSubItem;

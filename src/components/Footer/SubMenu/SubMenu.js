import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const LinkWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;
const NavLink = styled(Link)`
  font-size: 14px;
  text-decoration: none;
  padding: 4px 0px;
  color: #909090;
  font-family: 'Raleway', sans-serif;

  &:hover {
    color: white;
    transition: all 0.5s;
  }

  @media only screen and (min-width: 960px) {
    font-size: 15px;
  }
`;

const SubMenu = ({navLink}) => (
  <Fragment>
    {navLink &&
      navLink.map(({name, to}) => (
        <LinkWrapper key={name}>
          <NavLink to={to}>{name}</NavLink>
        </LinkWrapper>
      ))}
  </Fragment>
);
export default SubMenu;

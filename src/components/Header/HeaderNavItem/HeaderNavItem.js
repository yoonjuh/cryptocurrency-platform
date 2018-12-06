import React from 'react';
import styled from 'styled-components';
import HeaderNavSubItem from '../HeaderNavSubItem';

const Container = styled.div`
  color: #808080;
  padding-right: 20px;
  position: relative;

  .nav-name-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    &:hover {
      color: #d8d8d8;
      transition: all 0.5s;
      cursor: pointer;
    }
  }
  &:hover {
    .dropdown-list-container {
      display: block;
    }
  }
`;
const NavNameContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  &:hover {
    color: #d8d8d8;
    transition: all 0.5s;
    cursor: pointer;
  }
`;
const NavName = styled.div`
  font-size: 1.2rem;
  padding-right: 7px;
  font-family: 'Raleway', sans-serif;
`;
const NavIcon = styled.i`
  font-size: 1rem;
  margin-top: 3px;
  font-weight: 600;
`;
const DropdownContainer = styled.div`
  padding-top: 10px;
  position: absolute;
  display: none;
  overflow: hidden;
  outline: none;

  &:hover {
    display: block;
  }
`;
const SubMenuWrapper = styled.div`
  padding: 15px 15px 15px 10px;
  background-color: #282828;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const HeaderNavItem = ({title, subNav}) => (
  <Container>
    <div className="nav-name-container">
      <NavName>{title}</NavName>
      <NavIcon className="fas fa-angle-down" />
    </div>
    <DropdownContainer className="dropdown-list-container">
      <SubMenuWrapper>
        {subNav &&
          subNav.map(({name, to}) => (
            <HeaderNavSubItem key={name + to} name={name} to={to} />
          ))}
      </SubMenuWrapper>
    </DropdownContainer>
  </Container>
);

export default HeaderNavItem;

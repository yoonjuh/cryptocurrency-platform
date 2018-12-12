import React from 'react';
import styled from 'styled-components';
import LogoWrapper from '../../../components/Header/LogoWrapper';
import SortByNav from '../../../components/Header/SortByNav';
import HeaderNav from '../../../components/Header/HeaderNav';
import HeaderAPIButton from '../../../components/Header/HeaderAPIButton';
import BurgerMenu from '../../../components/Header/BurgerMenu';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2e2e2e;
  &.expand {
    background-color: #18191a;
    border-bottom: 1px #484848 solid;
    transition: all 0.1s ease-in;
  }
`;
const BriefSection = styled.div`
  padding: 10px 20px;
  margin-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DetailSection = styled.div`
  display: none;
  @media screen and (min-width: 960px) {
    flex: 1;
    color: white;
    font-size: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const HeaderNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderContainer = ({menuToggler, onClickHandler}) => (
  <Container className={menuToggler ? 'expand' : ''}>
    <BriefSection>
      <LogoWrapper />
    </BriefSection>
    <DetailSection>
      <SortByNav />
      <HeaderNavContainer>
        <HeaderNav />
        <HeaderAPIButton />
      </HeaderNavContainer>
    </DetailSection>
    <BurgerMenu menuToggler={menuToggler} onClickHandler={onClickHandler} />
  </Container>
);

export default HeaderContainer;
HeaderContainer.displayName = 'HeaderContainer';

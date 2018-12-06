import React from 'react';
import styled from 'styled-components';
import LogoWrapper from '../../../components/Header/LogoWrapper';
import SortByNav from '../../../components/Header/SortByNav';
import HeaderNav from '../../../components/Header/HeaderNav';
import HeaderAPIButton from '../../../components/Header/HeaderAPIButton';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #323232;
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

const BurgerMenu = styled.button`
  margin-right: 30px;
  width: 40px;
  height: 40px;
  /* background-color: black; */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 5px 5px;
  transition: all 0.2s ease;

  /* span:nth-child(2) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  } */
  .bars {
    width: 40px;
    height: 4px;
    /* border: 6px white solid; */
    background-color: white;
    border-radius: 5px;
    z-index: 9999;
  }
  &:hover {
    cursor: pointer;
    .bm-bar_1 {
      transform: translate(0px, -4px);
      transition: all 0.2s linear;
    }

    .bm-bar_3 {
      transform: translate(0px, 4px);
      transition: all 0.2s linear;
    }
  }
  @media screen and (min-width: 960px) {
    display: none;
  }
`;

const HeaderContainer = ({navItems}) => (
  <Container>
    <BriefSection>
      <LogoWrapper />
    </BriefSection>
    <DetailSection>
      <SortByNav />
      <HeaderNavContainer>
        <HeaderNav navItems={navItems} />
        <HeaderAPIButton />
      </HeaderNavContainer>
    </DetailSection>
    <BurgerMenu>
      <span className="bars bm-bar_1" />
      <span className="bars bm-bar_2" />
      <span className="bars bm-bar_3" />
    </BurgerMenu>
  </Container>
);

export default HeaderContainer;
HeaderContainer.displayName = 'HeaderContainer';

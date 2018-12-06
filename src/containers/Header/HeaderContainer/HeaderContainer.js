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
const TestDiv = styled.div`
  display: block;
  color: white;
  margin-right: 10px;
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
    </Container>
  );

export default HeaderContainer;
HeaderContainer.displayName = 'HeaderContainer';

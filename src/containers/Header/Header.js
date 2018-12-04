import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const BriefSection = styled.div`
  font-size: 2rem;
`;
const DetailSection = styled.div`
  font-size: 2rem;
`;
const AppTitle = styled.div``;

const Header = () => (
  <HeaderContainer>
    <BriefSection>Breif</BriefSection>
    <DetailSection>Details</DetailSection>
  </HeaderContainer>
);

export default Header;
Header.displayName = 'Header';

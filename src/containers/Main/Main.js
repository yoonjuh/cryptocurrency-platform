import React from 'react';
import styled from 'styled-components';
import Header from '../Header';
import FooterWrapper from '../../components/Footer/FooterWrapper';

const MainContainer = styled.div.withConfig({displayName: 'MainContainer'})`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
`;
const MainBody = styled.div.withConfig({displayName: 'MainBody'})`
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10rem;
`;

const Main = () => (
  <MainContainer>
    <Header />
    <MainBody>Main</MainBody>
    <FooterWrapper />
  </MainContainer>
);
export default Main;
Main.displayName = 'Main';

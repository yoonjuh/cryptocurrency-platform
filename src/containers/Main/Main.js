import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import HeaderContainer from '../Header/HeaderContainer';
import FooterWrapper from '../../components/Footer/FooterWrapper';
import ResponsiveMenuBar from '../../components/Header/ResponsiveMenuBar';
import Sidebar from '../../components/Header/Sidebar';

const MainContainer = styled.div.withConfig({displayName: 'MainContainer'})`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
  &.expand {
    width: 0%;
    height: 0%;
    transition: opacity 0.3s ease-out;
  }
`;
const BodyWrapper = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  &.expand {
    display: none;
  }
  @media screen and (min-width: 960px) {
    flex: 1;
    width: 100%;
    height: 100%;
  }
`;
const MainBody = styled.div.withConfig({displayName: 'MainBody'})`
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10rem;
`;
const ResponsiveContainer = styled.div.withConfig({
  displayName: 'ResponsiveContainer',
})`
  width: 100%;
  height: 100%;
  // flex: 1;
  display: flex;
`;

const Main = () => {
  const [menuToggler, setMenuToggler] = useState(false);
  const [currentWidth, _] = useState(window.innerWidth);
  console.log(menuToggler);

  function onClickHandler() {
    setMenuToggler(!menuToggler);
  }

  return (
    <MainContainer>
      <HeaderContainer
        menuToggler={menuToggler}
        onClickHandler={onClickHandler}
      />
      <ResponsiveContainer>
        <Sidebar menuToggler={menuToggler} setMenuToggler={setMenuToggler} />
        <BodyWrapper className={menuToggler ? 'expand' : ''}>
          <MainBody>
            Main <ResponsiveMenuBar />
          </MainBody>
          <FooterWrapper />
        </BodyWrapper>
      </ResponsiveContainer>
    </MainContainer>
  );
};
export default Main;
Main.displayName = 'Main';

import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {getAllCurrencies} from '../../../store/actions';
import BodyContainer from '../BodyContainer';
import HeaderContainer from '../../Header/HeaderContainer';
import FooterWrapper from '../../../components/Footer/FooterWrapper';
import SidebarWrapper from '../../../components/Sidebar/SidebarWrapper';
import BodyNav from '../BodyNav';
import BodyIntro from '../../../components/Main/BodyHeader/BodyIntro';

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
  flex-direction: column;
  font-size: 3rem;
`;
const ResponsiveContainer = styled.div.withConfig({
  displayName: 'ResponsiveContainer',
})`
  width: 100%;
  height: 100%;
  display: flex;
`;

const Main = props => {
  useEffect(() => {
    props.getAllCurrencies();
  });
  const [menuToggler, setMenuToggler] = useState(false);

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
        <SidebarWrapper
          menuToggler={menuToggler}
          setMenuToggler={setMenuToggler}
        />
        <BodyWrapper className={menuToggler ? 'expand' : ''}>
          <MainBody>
            <BodyIntro />
            <BodyNav />
            <BodyContainer />
          </MainBody>
          <FooterWrapper />
        </BodyWrapper>
      </ResponsiveContainer>
    </MainContainer>
  );
};
export default connect(
  ({currency}) => ({
    currency,
  }),
  {getAllCurrencies}
)(Main);
Main.displayName = 'Main';

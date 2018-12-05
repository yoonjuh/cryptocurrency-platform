import React from 'react';
import styled from 'styled-components';
import HeaderContainer from '../Header/HeaderContainer';
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

const navItems = [
  {
    name: 'Market Activity',
    subNav: [{name: 'Currencies', to: '/'}, {name: 'Exchanges', to: '/'}],
  },
  {
    name: 'Products',
    subNav: [
      {name: 'Pricing', to: 'pricing'},
      {name: 'Market Data API', to: 'cryptocurrency-bitcoin-api'},
      {name: 'Services', to: 'services'},
    ],
  },
  {
    name: 'Learn',
    subNav: [{name: 'Blog', to: '/blog'}, {name: 'Podcast', to: '/podcast'}],
  },
  {
    name: 'Company',
    subNav: [
      {name: 'About', to: '/about'},
      {name: 'Contact Us', to: '/contact'},
      {name: 'Press Inquiries', to: '/contact'},
      {name: 'Donate', to: '/donate'},
    ],
  },
  {
    name: 'Contact',
    subNav: [
      {name: 'contact.ex@someexample.co', to: '/'},
      {name: '000-000-0000', to: '/'},
    ],
  },
];

const Main = () => (
  <MainContainer>
    <HeaderContainer
      navItems={navItems // TO RE-USE THIS, IT NEEDS A BIT DIFFERENT DATA SET
        .filter(
          item => item.name !== 'Market Activity' && item.name !== 'Contact'
        )}
    />
    <MainBody>Main</MainBody>
    <FooterWrapper navItems={navItems} />
  </MainContainer>
);
export default Main;
Main.displayName = 'Main';

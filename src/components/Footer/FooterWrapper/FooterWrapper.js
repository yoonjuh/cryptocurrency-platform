import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import FooterNavWrapper from '../FooterNavWrapper';
import FooterLogo from '../FooterLogo';
import CopyRight from '../CopyRight';

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
      {name: 'contact.ex@someexample.co', to: ''},
      {name: '000-000-0000', to: ''},
    ],
  },
];
const FooterContainer = styled.div.withConfig({displayName: 'FooterContainer'})`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const UpperSection = styled.div`
  line-height: 1.15;
  display: flex;
  background-color: #323232;
  justify-content: space-between;
  flex-direction: column;
  /* padding: 0.7rem 1rem; */
  @media screen and (min-width: 960px) {
    flex-direction: row;
    align-self: bottom;
    align-items: flex-start;
    height: 100%;
    min-height: 18rem;
    width: 100%;
    padding: 4rem 1rem;
  }
`;

const FooterWrapper = () => (
  <FooterContainer>
    <UpperSection>
      <FooterLogo />
      <FooterNavWrapper navItems={navItems} />
    </UpperSection>
    <CopyRight />
  </FooterContainer>
);
export default FooterWrapper;
FooterWrapper.displayName = 'FooterWrapper';

import React from 'react';
import styled from 'styled-components';
import FooterNavWrapper from '../FooterNavWrapper';
import FooterLogoSection from '../FooterLogoSection';
import CopyRight from '../CopyRight';
import withNavItems from '../../../StaticData/withNavItems';

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

const FooterWrapper = ({navItems}) => (
  <FooterContainer>
    <UpperSection>
      <FooterLogoSection />
      <FooterNavWrapper navItems={navItems} />
    </UpperSection>
    <CopyRight />
  </FooterContainer>
);
export default withNavItems(FooterWrapper);
FooterWrapper.displayName = 'FooterWrapper';

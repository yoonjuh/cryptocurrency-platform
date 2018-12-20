import React from 'react';
import styled from 'styled-components';
import DescToggleButton from '../DescToggleButton';
import {marketCapPrettier} from '../../../../utils/helpers';

const ResponsiveIntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  margin: 1rem 0rem;
  @media screen and (min-width: 650px) {
    display: none;
  }
`;
const ResponsiveDescButtonWrapper = styled.div`
  &.expand {
    display: none;
  }
`;

const Highlight = styled.div`
  font-family: 'Open Sans', sans-serif;
  margin: 3px 0px 0px 10px;
  padding: 3px 5px;
  background-color: rgb(255, 0, 21);
  color: #fff;
  display: flex;
  height: min-content;
  width: min-content;
`;

const ResponsiveIntro = ({descToggler, setDescToggler, marketCap}) => (
  <ResponsiveIntroWrapper>
    <div style={{display: 'flex', alignItems: 'center'}}>
      <div>Total Market Cap = </div>
      <Highlight>{marketCapPrettier(marketCap)}</Highlight>
    </div>
    <ResponsiveDescButtonWrapper className={descToggler ? 'expand' : ''}>
      <DescToggleButton
        term="Read More"
        icon="fas fa-arrow-down"
        descToggler={descToggler}
        styles={{margin: '8px 0px 0px 8px'}}
        setDescToggler={setDescToggler}
      />
    </ResponsiveDescButtonWrapper>
  </ResponsiveIntroWrapper>
);

export default ResponsiveIntro;

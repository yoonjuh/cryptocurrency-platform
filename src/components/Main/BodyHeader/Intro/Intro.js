import React from 'react';
import styled from 'styled-components';
import DescToggleButton from '../DescToggleButton';
import {marketCapPrettier} from '../../../../utils/helpers';

const IntroWrapper = styled.div`
  display: none;
  padding: 1rem 0rem 2rem 0rem;
  @media screen and (min-width: 650px) {
    width: 100%;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem 0rem 3rem 0rem;
  }
`;
const IntroUpperContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Raleway', sans-serif;
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
const IntroLowerContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const Intro = ({descToggler, setDescToggler, marketCap}) => (
  <IntroWrapper>
    <IntroUpperContainer>
      <div>The total cryptocurrency market cap is </div>
      <Highlight>{marketCapPrettier(marketCap)}</Highlight>.
    </IntroUpperContainer>
    <IntroLowerContainer>
      <div>That is 1.44% of all gold in the world.</div>
      <DescToggleButton
        term="Read More"
        icon="fas fa-arrow-down"
        descToggler={descToggler}
        styles={{margin: '8px 0px 0px 8px'}}
        clsName="responsive"
        setDescToggler={setDescToggler}
      />
    </IntroLowerContainer>
  </IntroWrapper>
);

export default Intro;

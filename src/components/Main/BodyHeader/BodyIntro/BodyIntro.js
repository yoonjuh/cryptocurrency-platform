import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {
  getMarketCapDay,
  getMarketCapWeek,
  getMarketCapMonth,
  getMarketCapYear,
} from '../../../../store/actions';
import IntroDescription from '../IntroDescription';
import Intro from '../Intro';
import ResponsiveIntro from '../ResponsiveIntro';

const IntroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0rem 1rem;
  font-size: 1.2rem;
  background-color: #2e2e2e;

  @media screen and (min-width: 960px) {
    font-size: 1.5rem;
  }
`;
const BodyIntro = props => {
  const [descToggler, setDescToggler] = useState(false);
  const {
    marketCap: {market_cap},
    nav,
  } = props;

  useEffect(
    () => {
      if (nav === 'Day') {
        props.getMarketCapDay();
      } else if (nav === 'Week') {
        props.getMarketCapWeek();
      } else if (nav === 'Month') {
        props.getMarketCapMonth();
      } else {
        props.getMarketCapYear();
      }
    },
    [nav]
  );
  return (
    <IntroContainer>
      <Intro
        descToggler={descToggler}
        setDescToggler={setDescToggler}
        marketCap={market_cap}
      />
      <ResponsiveIntro
        descToggler={descToggler}
        setDescToggler={setDescToggler}
        marketCap={market_cap}
      />
      <IntroDescription
        clsName={descToggler ? 'expand' : ''}
        term="Read Less"
        icon="fas fa-arrow-up"
        styles={{flexDirection: 'row-reverse', margin: '2rem 0rem 2rem 0rem'}}
        descToggler={descToggler}
        setDescToggler={setDescToggler}
      />
    </IntroContainer>
  );
};
export default connect(
  ({marketCap}) => ({
    marketCap,
  }),
  {getMarketCapDay, getMarketCapWeek, getMarketCapMonth, getMarketCapYear}
)(BodyIntro);

import React, {useState} from 'react';
import styled from 'styled-components';
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
const BodyIntro = () => {
  const [descToggler, setDescToggler] = useState(false);
  return (
    <IntroContainer>
      <Intro descToggler={descToggler} setDescToggler={setDescToggler} />
      <ResponsiveIntro
        descToggler={descToggler}
        setDescToggler={setDescToggler}
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
export default BodyIntro;

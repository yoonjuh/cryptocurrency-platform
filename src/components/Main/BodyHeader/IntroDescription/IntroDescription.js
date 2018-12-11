import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import DescToggleButton from '../DescToggleButton';

const Foldable = styled.div`
  height: 0;
  display: none;
  margin: 0rem 10%;
  background-color: transparent;
  color: #93979e;

  &.expand {
    position: relative;
    height: 100%;
    display: block;
  }
  @media screen and (min-width: 960px) {
    margin: 0rem 25%;
    /* margin: auto; */
    overflow: hidden;

    &.expand {
      position: relative;
      height: 100%;
      display: block;
    }
  }
`;
const Description = styled.div`
  font-size: 1rem;
  font-family: 'Raleway', sans-serif;
  overflow: hidden;
`;
const ListContainer = styled.div`
  margin: 1rem 2rem;
  word-break: keep-all;
  display: flex;
  flex-direction: column;
`;
const RelatedLink = styled(Link)`
  color: red;
  text-decoration: none;

  a:active,
  &:visited,
  &:hover {
    opacity: 0.7;
    transition: opacity 0.2s linear;
  }
`;

const IntroDescription = ({
  clsName,
  term,
  icon,
  styles,
  descToggler,
  setDescToggler,
}) => (
  <Foldable className={clsName}>
    <Description>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at purus
        pulvinar ipsum auctor tempus mattis sed felis. Etiam in urna a dolor
        blandit mattis. Donec viverra urna et fermentum tincidunt. Quisque
        tempor consectetur quam, ut suscipit enim vehicula non. Sed at malesuada
        enim. Donec dignissim id est in tristique. <br />
        <br />
        Suspendisse porttitor lacus ac lacus molestie tempor. Morbi sit amet
        tellus justo. Donec ullamcorper ipsum et neque laoreet, vitae gravida
        est venenatis. Pellentesque mattis nisi consequat dolor pellentesque, id
        tempus lectus pharetra. Mauris sagittis id velit sed bibendum.
      </p>
      <br />
      <div>
        Donec eu lectus varius, lacinia lorem sit amet, porttitor massa. Proin
        eget faucibus tellus. Duis euismod auctor dapibus. Praesent ullamcorper
        tincidunt risus, a tempor velit consectetur vitae.
        <br />
        <ListContainer>
          <span>1. Aenean cursus risus vel ligula feugiat pretium. </span>
          <span>2. Cras congue varius dictum. </span>
          <span>
            3. Pellentesque habitant morbi tristique senectus et netus et
            malesuada
          </span>
          <span>4. Aliquam lobortis neque in felis finibus lobortis.</span>
        </ListContainer>
      </div>
      <p>
        Morbi tempor dolor eu quam vehicula, eu vulputate est fringilla.
        Suspendisse sagittis aliquet odio, eget sollicitudin risus ultrices at.
        Integer gravida tempus urna ac dictum. Interdum et malesuada fames ac
        ante ipsum primis in faucibus. <br />
      </p>
      <p>
        Pellentesque a gravida diam. Donec vestibulum justo eget augue ultrices,
        id vestibulum turpis pulvinar. Suspendisse vitae lacinia risus, ut
        molestie est. <br />
      </p>
      <br />
      <p>
        Cras tristique vestibulum nibh at consectetur. Aliquam sit amet dui
        neque. Mauris gravida eleifend mi, quis consectetur dolor hendrerit ac.
        Quisque eleifend eros non porta commodo.
      </p>
      <h4
        style={{
          margin: '2rem 0rem 1.2rem 0rem',
          color: 'white',
          fontWeight: 600,
        }}
      >
        Overview
      </h4>
      <p>
        Donec finibus, libero vitae scelerisque iaculis, mauris dolor laoreet
        sapien, vitae varius est nibh eget dolor. Cras pulvinar pretium felis.
        Quisque fringilla pulvinar ipsum, quis congue orci tincidunt vel. Ut est
        ipsum, scelerisque a ex quis, suscipit suscipit ligula. In pharetra
        tristique metus, et tempus quam viverra blandit. Cras tincidunt risus
        sed lacus dignissim aliquet.
      </p>
      <br />
      <p>
        In tempor vitae risus ut pharetra. Duis sollicitudin metus justo, vel
        commodo massa semper in. Vivamus non sagittis tellus. Interdum et
        malesuada fames ac ante ipsum primis in faucibus. Donec blandit, augue
        in condimentum finibus, urna lectus viverra augue, non cursus sem mauris
        at massa. Fusce at tristique leo.
      </p>
      <br />
      <div>
        Please <RelatedLink to="/newsletter/some-article">see here</RelatedLink>{' '}
        for more information about how we price cryptoassets and{' '}
        <RelatedLink to="/newsletter/other-article">
          here for how we calculate-all-time high data
        </RelatedLink>
      </div>
      <br />
      <p>
        eget laoreet risus arcu ac eros. Ut egestas turpis eget risus fringilla,
        vel sodales dolor ornare. Fusce eu sodales neque. Vivamus pulvinar enim
        at nisi aliquam, quis pharetra libero porttitor. Vestibulum non
        venenatis augue, in euismod ipsum. Maecenas gravida orci at elit
        pretium, et tincidunt nisl cursus. Pellentesque porta eros sed mattis
        feugiat. Ut eu molestie nibh.
      </p>
      <DescToggleButton
        term={term}
        icon={icon}
        styles={styles}
        descToggler={descToggler}
        setDescToggler={setDescToggler}
      />
    </Description>
  </Foldable>
);
export default IntroDescription;

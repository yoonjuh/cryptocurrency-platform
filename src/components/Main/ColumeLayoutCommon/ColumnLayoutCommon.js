import React from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  cursor: pointer;
`;

export const IndexWrapper = styled.div`
  width: 5%;
  padding-left: 1rem;
  @media screen and (max-width: 1170px) {
    width: 8%;
    padding-left: 1rem;
  }
`;

export const NameWrapper = styled.div`
  width: 10%;
  display: flex;
  cursor: pointer;
  @media screen and (max-width: 1440px) {
    width: 13%;
  }
  @media screen and (max-width: 1170px) {
    width: 17.5%;
  }
`;

export const MarketCapWrapper = styled(Layout)`
  width: 15%;

  @media screen and (max-width: 700px) {
    width: 24.5%;
  }
`;

export const PriceWrapper = styled(Layout)`
  width: 17.5%;

  @media screen and (max-width: 1440px) {
    width: 12.5%;
  }
  @media screen and (max-width: 1170px) {
    width: 16%;
  }

  @media screen and (max-width: 700px) {
    width: 24.5%;
  }
`;

export const ChangeWrapper = styled(Layout)`
  width: 0%;
  display: none;
  overflow: hidden;

  @media screen and (min-width: 1600px) {
    width: 8.5%;
    display: flex;

    &.negative {
      color: rgb(255, 0, 21);
    }

    &.positive {
      color: rgb(0, 224, 142);
    }
  }
`;

export const ATHWrapper = styled(Layout)`
  width: 11.5%;
  display: flex;
  @media screen and (max-width: 1440px) {
    width: 12%;
    display: flex;
  }
  @media screen and (max-width: 1170px) {
    width: 17%;
    display: flex;
  }
  @media screen and (max-width: 700px) {
    width: 0%;
    display: none;
  }
`;

export const VolumeWrapper = styled(Layout)`
  width: 17.5%;
  @media screen and (max-width: 1600px) {
    width: 14.5%;
  }
  @media screen and (max-width: 1440px) {
    width: 17.5%;
  }
  @media screen and (max-width: 1170px) {
    width: 26.5%;
  }
`;

export const SupplyWrapper = styled(Layout)`
  display: flex;
  width: 23.5%;

  justify-content: center;
  @media screen and (max-width: 1600px) {
    display: flex;
    width: 18%;
  }
  @media screen and (max-width: 1400px) {
    display: flex;
    width: 26%;
  }
  @media screen and (max-width: 1170px) {
    display: none;
    width: 0;
  }
`;

export const PriceGraph = styled.div`
  width: 13%;
  display: flex;
  overflow: hidden;

  @media screen and (max-width: 1440px) {
    width: 0%;
    display: none;
  }
`;
const InfoIconWrapper = styled.div`
  margin: 0px 5px;

  &:hover {
    color: black;
    transition: color 0.3s ease;

    + span {
      opacity: 1;
      transition: all 0.2s ease-in;
      visibility: visible;
    }
  }
`;

export const InfoIcon = ({styles, clsName}) => (
  <InfoIconWrapper style={styles} className={`fas fa-info-circle ${clsName}`} />
);

export const Index = ({styles, children}) => (
  <IndexWrapper style={{...styles}}>{children}</IndexWrapper>
);
export const Name = ({styles, children}) => (
  <NameWrapper style={{...styles}}>{children}</NameWrapper>
);
export const MarketCap = ({styles, children}) => (
  <MarketCapWrapper style={{...styles}}>{children}</MarketCapWrapper>
);
export const Price = ({styles, children}) => (
  <PriceWrapper style={{...styles}}>{children}</PriceWrapper>
);
export const Change = ({styles, clsName, children}) => (
  <ChangeWrapper className={clsName} style={{...styles}}>
    {children}
  </ChangeWrapper>
);
export const ATH = ({styles, children}) => (
  <ATHWrapper style={{...styles}}>{children}</ATHWrapper>
);
export const Volume = ({styles, children}) => (
  <VolumeWrapper style={{...styles}}>{children}</VolumeWrapper>
);
export const Supply = ({styles, children}) => (
  <SupplyWrapper style={{...styles}}>{children}</SupplyWrapper>
);

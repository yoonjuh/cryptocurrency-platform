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
`;

export const NameWrapper = styled.div`
  width: 10%;

  display: flex;

  cursor: pointer;
`;

export const MarketCapWrapper = styled(Layout)`
  width: 15%;
`;

export const PriceWrapper = styled(Layout)`
  width: 17.5%;
  @media screen and (min-width: 1440px) {
    width: 12.5%;
  }
`;

export const ChangeWrapper = styled(Layout)`
  width: 0%;
  overflow: hidden;
  @media screen and (min-width: 1600px) {
    width: 8.5%;
  }
`;

export const ATHWrapper = styled(Layout)`
  width: 11.5%;
  @media screen and (min-width: 1440px) {
    width: 8.5%;
  }
`;

export const VolumeWrapper = styled(Layout)`
  width: 17.5%;
  @media screen and (min-width: 1440px) {
    width: 12.5%;
  }
`;

export const SupplyWrapper = styled(Layout)`
  width: 23.5%;
  @media screen and (min-width: 1600px) {
    width: 15%;
  }

  justify-content: center;
`;

export const PriceGraph = styled.div`
  width: 0%;
  overflow: hidden;

  @media screen and (min-width: 1440px) {
    width: 13%;
  }
`;

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
export const Change = ({styles, children}) => (
  <ChangeWrapper style={{...styles}}>{children}</ChangeWrapper>
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

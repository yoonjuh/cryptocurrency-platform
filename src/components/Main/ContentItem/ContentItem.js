import React from 'react';
import styled from 'styled-components';
import {
  Index,
  Name,
  MarketCap,
  Price,
  Change,
  ATH,
  Volume,
  Supply,
  PriceGraph,
} from '../ColumeLayoutCommon/ColumnLayoutCommon';

const ItemWrapper = styled.div`
  width: 100%;
  padding: 10px 15px;

  font-size: 1rem;
  font-family: 'Roboto Slap', sans-serif;

  border-bottom: 0.2px grey solid;
  display: flex;
`;

const ContentsItem = ({item, index}) => (
  <ItemWrapper>
    <Index>{index}</Index>
    <Name styles={{fontSize: '1.2rem', fontWeight: 500}}>{item.currency}</Name>
    <MarketCap>{item.price}</MarketCap>
    <Price>{item.price}</Price>
    <Change>Changes</Change>
    <ATH>ATH</ATH>
    <Volume>{item.dayVolume}</Volume>
    <Supply>Supply</Supply>
    <PriceGraph>Graph</PriceGraph>
  </ItemWrapper>
);
export default ContentsItem;

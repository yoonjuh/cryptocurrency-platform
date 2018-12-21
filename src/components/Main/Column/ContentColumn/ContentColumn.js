import React, {Suspense, useEffect, useState} from 'react';
import styled from 'styled-components';
import {
  Index,
  NameWrapper,
  PriceGraph,
  ColNameWrapper,
} from '../ColumeLayoutCommon/ColumnLayoutCommon';
import ColMarketCap from '../ColumnItems/ColMarketCap';
import ColPrice from '../ColumnItems/ColPrice';
import ColChange from '../ColumnItems/ColChange';
import ColATH from '../ColumnItems/ColATH';
import ColVolume from '../ColumnItems/ColVolume';
import ColSupply from '../ColumnItems/ColSupply';
import SortUpDownIcon from '../SortUpDownIcon';

const ColumnContainer = styled.div`
  width: 100%; /** LAYOUT */
  padding: 10px 1rem;

  display: flex; /** CHILD */

  font-family: 'Roboto Slap', sans-serif; /** FONT */
  font-size: 14px;
  color: #93979e;

  background-color: #f5f7fa; /** EFFECT */

  &.sticky {
    margin-top: 42px;
    z-index: 9999;
    position: fixed;
    top: 0;
    right: 0;
    box-sizing: border-box;
  }
`;

const ContentColumn = ({selected, setSelected}) => {
  const [sticky, setSticky] = useState('');
  const {name, asc} = selected;

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset >= 212 && sticky !== 'sticky') {
        setSticky('sticky');
      }

      if (window.pageYOffset <= 212) {
        setSticky('');
      }
    });
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ColumnContainer className={sticky}>
        <Index>#</Index>
        <NameWrapper onClick={() => setSelected({name: 'Name', asc: !asc})}>
          <SortUpDownIcon name={name} asc={asc} match="Name" />
          <ColNameWrapper>Name</ColNameWrapper>
        </NameWrapper>
        <ColMarketCap selected={selected} setSelected={setSelected} />
        <ColPrice selected={selected} setSelected={setSelected} />
        <ColChange selected={selected} setSelected={setSelected} />
        <ColATH selected={selected} setSelected={setSelected} />
        <ColVolume selected={selected} setSelected={setSelected} />
        <ColSupply selected={selected} setSelected={setSelected} />
        <PriceGraph>PriceGraph</PriceGraph>
      </ColumnContainer>
    </Suspense>
  );
};
export default ContentColumn;

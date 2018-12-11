import React from 'react';
import styled from 'styled-components';
import {StickyContainer, Sticky} from 'react-sticky';

const StickyHeaderWrapper = () => (
  <StickyContainer
    style={{overflowY: 'auto', backgroundColor: '#ddd', position: 'relative'}}
  >
    <p style={{height: '100px'}}>Somethings to say</p>
    <Sticky topOffeset={0} relative>
      {({
        style,
        isSticky,
        wasSticky,
        distanceFromTop,
        distanceFromBottom,
        calculateHeight,
      }) => (
        <div isSticky style={{...style, height: '100px'}}>
          {JSON.stringify(style)}
        </div>
      )}
    </Sticky>
  </StickyContainer>
);

export default StickyHeaderWrapper;

import React from 'react';
import styled from 'styled-components';

const SortIconWrapper = styled.div`
  opacity: 0;
  visibility: hidden;
  margin: 0px 3px 5px 0px;

  &.selected {
    opacity: 1;
    visibility: visible;
    transition: opacity 0.2s linear;
    & > *:first-child {
      display: ${props => (props.asc ? 'inline-block' : 'none')};
    }
    & > *:last-child {
      display: ${props => (props.asc ? 'none' : 'inline-block')};
    }
  }
`;

const SortUpDownIcon = ({name, asc, match}) => (
  <SortIconWrapper className={name === match ? 'selected' : ''} asc={asc}>
    <i className="fas fa-angle-up" />
    <i className="fas fa-angle-down" />
  </SortIconWrapper>
);
export default SortUpDownIcon;

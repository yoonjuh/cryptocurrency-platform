import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  background-color: transparent;
  color: #fff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 8px 0px 0px 10px;
  margin: auto;
  font-size: 1rem;
  word-break: keep-all;
  border-bottom: 2px rgb(255, 0, 21) solid;
  font-family: 'Open Sans', sans-serif;
  width: min-content;

  &:hover {
    opacity: 0.5;
    transition: opacity 0.3s ease;
  }
`;

const DescToggleButton = ({
  term,
  icon,
  styles,
  descToggler,
  setDescToggler,
}) => (
  <ButtonContainer
    style={styles && styles}
    onClick={() => setDescToggler(!descToggler)}
  >
    <div style={{marginRight: '5px', whiteSpace: 'nowrap'}}>{term}</div>
    <i className={icon} style={{padding: '0px 3px', maxWidth: '20px'}} />
  </ButtonContainer>
);
export default DescToggleButton;

import React from 'react';
import styled from 'styled-components';

const SearchBarContainer = styled.div`
  width: 100%; /** LAYOUT */
  outline: none;
  padding: 5px 2rem;
  border: none;

  display: flex; /** CHILD */

  background-color: white; /** EFFECTS */
`;

const IconWrapper = styled.div`
  outline: none; /** LAYOUT */
  border: none;
  min-height: 100%;
  padding-right: 10px;

  font-size: 1rem; /** FONTS */
  color: #aaaaaa;

  display: flex; /** CHILD */
  justify-content: center;
  align-items: center;

  background-color: transparent; /** EFFECTS */
`;

const Input = styled.input`
  background-color: transparent; /** LAYOUT */
  width: 100%;
  padding: 10px;
  outline: none;
  border: none;
  line-height: 1.2;

  display: flex; /** CHILD */
  justify-content: stretch;

  color: #18191a; /** FONT */
  font-family: 'Roboto Slap', sans-serif;
  font-size: 1rem;

  opacity: 0.5; /** EFFECTS */
  transition: opacity 0.3s ease-out;

  &.entered {
    opacity: 0.8;
    transition: opacity 0.3s ease-in;
  }

  &:focus {
    opacity: 0.8;
    transition: opacity 0.2s ease-in-out;
  }
`;
const ResetButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.4rem;
  font-family: 'Open Sans', sans-serif;

  display: none;

  &.activate {
    display: block;
  }

  &:hover {
    color: #8b0000;
    transition: color 0.5s linear;
  }
`;

const BodySearchBar = ({term, setTerm, resetSearch}) => {
  console.log();
  return (
    <SearchBarContainer>
      <IconWrapper>
        <i
          className="fas fa-search"
          style={{outline: 'none', border: 'none'}}
        />
      </IconWrapper>
      <Input
        value={term}
        onChange={({target: {value}}) => setTerm(value)}
        placeholder="Search Crytocurrencies"
        className={term.length > 0 ? 'entered' : ''}
      />
      <ResetButton
        className={term.length > 0 ? 'activate' : ''}
        onClick={resetSearch}
      >
        x
      </ResetButton>
    </SearchBarContainer>
  );
};
export default BodySearchBar;

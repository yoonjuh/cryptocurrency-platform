import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const ContactIcons = styled.div`
  color: #989898;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 3px;
`;
const ContactLink = styled(Link)`
  text-decoration: none;
  color: #989898;
  &:hover {
    color: white;
    transition: all 0.5s;
  }
`;

const ContactIcon = styled.div`
  margin-right: 10px;
`;
const Icons = [
  {
    name: 'fab fa-facebook',
    to: 'https://www.facebook.com/JuhyungEdwinYoon?ref=bookmarks',
  },
  {name: 'fab fa-twitter', to: 'https://twitter.com/'},
  {
    name: 'fab fa-linkedin-in',
    to: 'https://www.linkedin.com/in/awesome-js-dev/',
  },
];

const SocialMedia = ({navTitle}) => (
  <div>
    {' '}
    {navTitle === 'Contact' ? (
      <ContactIcons>
        {Icons.map(({name, to}) => (
          <ContactLink key={name} to={to}>
            <ContactIcon className={name} />
          </ContactLink>
        ))}
      </ContactIcons>
    ) : (
      ''
    )}
  </div>
);
export default SocialMedia;

import React from 'react';

const navItems = [
  {
    name: 'Market Activity',
    subNav: [{name: 'Currencies', to: '/'}, {name: 'Exchanges', to: '/'}],
  },
  {
    name: 'Products',
    subNav: [
      {name: 'Pricing', to: 'pricing'},
      {name: 'Market Data API', to: 'cryptocurrency-bitcoin-api'},
      {name: 'Services', to: 'services'},
    ],
  },
  {
    name: 'Learn',
    subNav: [{name: 'Blog', to: '/blog'}, {name: 'Podcast', to: '/podcast'}],
  },
  {
    name: 'Company',
    subNav: [
      {name: 'About', to: '/about'},
      {name: 'Contact Us', to: '/contact'},
      {name: 'Press Inquiries', to: '/contact'},
      {name: 'Donate', to: '/donate'},
    ],
  },
  {
    name: 'Contact',
    subNav: [
      {name: 'contact.ex@someexample.co', to: '/'},
      {name: '000-000-0000', to: '/'},
    ],
  },
];

const sortByNavItems = ['Currencies', 'Exchanges'];

export default (Component, ...props) => {
  function navItemDevider() {
    return navItems.filter(
      item => item.name !== 'Market Activity' && item.name !== 'Contact'
    );
  }

  return function Wrapper() {
    return (
      <Component
        sortByNavItems={sortByNavItems}
        navItems={navItems}
        sortedNavItems={navItemDevider()}
        {...props}
      />
    );
  };
};

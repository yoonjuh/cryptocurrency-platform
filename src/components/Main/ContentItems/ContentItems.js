import React, {Fragment, useEffect} from 'react';
import ContentItem from '../ContentItem';

const ContentItems = ({term, sortBy}) => (
  <Fragment>
    {term !== ''
      ? sortBy
          .filter(({currency}) =>
            currency.toLowerCase().includes(term.toLowerCase())
          )
          .map((item, i) => (
            <ContentItem index={i} item={item} key={item.currency} />
          ))
      : sortBy.map((item, i) => (
          <ContentItem index={i} item={item} key={item.currency} />
        ))}
  </Fragment>
);
export default ContentItems;

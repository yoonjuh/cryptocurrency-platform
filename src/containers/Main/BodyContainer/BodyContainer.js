import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {arrayConcater} from '../../../utils/helpers';
import ContentItem from '../../../components/Main/ContentItem';
import BodySearchBar from '../../../components/Main/BodySearchBar';
import ContentColumn from '../../../components/Main/ContentColumn';
import {getDashboardData} from '../../../store/actions/dashboard';
import {getAllPrice} from '../../../store/actions/price';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: white;
  outline: none;
  border: none;
`;

const BodyContainer = props => {
  useEffect(() => {
    props.getDashboardData();
    props.getAllPrice();
  }, []);

  const [term, setTerm] = useState('');
  const [selected, setSelected] = useState('');
  const {dashboard, price} = props;
  const merged = arrayConcater(dashboard, price);

  function resetSearch() {
    setTerm('');
  }

  return (
    <Container>
      <BodySearchBar term={term} setTerm={setTerm} resetSearch={resetSearch} />
      <ContentColumn selected={selected} setSelected={setSelected} />
      {merged &&
        merged.map((item, i) => (
          <ContentItem index={i} item={item} key={item.currency} />
        ))}
    </Container>
  );
};
export default connect(
  ({dashboard, price}) => ({
    dashboard,
    price,
  }),
  {getDashboardData, getAllPrice}
)(BodyContainer);

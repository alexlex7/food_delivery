import Container from 'components/Container/Container';
import ShopList from 'components/ShopList/ShopList';
import React from 'react';
import data from '../data/data';

export default function Shop() {
  return (
    <Container>
      <ShopList shops={data.shops} />
    </Container>
  );
}

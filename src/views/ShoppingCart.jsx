import Basket from 'components/Basket/Basket';
import Container from 'components/Container/Container';
import React from 'react';

export default function ShoppingCart({
  cartItems,
  onAdd,
  onRemove,
  setCartItems,
}) {
  return (
    <Container
      styles={{
        paddingRight: '15px',
        paddingLeft: '15px',
        paddingBottom: '40px',
        height: 'calc(100vh - 70px)',
      }}
    >
      <Basket
        cartItems={cartItems}
        onAdd={onAdd}
        onRemove={onRemove}
        setCartItems={setCartItems}
      />
    </Container>
  );
}

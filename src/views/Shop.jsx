import axios from 'axios';
import Container from 'components/Container/Container';
import GoodsList from 'components/GoodsList/GoodsList';
import ShopList from 'components/ShopList/ShopList';
import React, { useState, useEffect } from 'react';

export default function Shop({ onAdd, cartItems }) {
  const [shops, setShops] = useState([]);
  const [activeShopId, setActiveShopId] = useState(null);

  useEffect(() => {
    const getShops = async () => {
      try {
        const { data } = await axios.get(
          'https://delivery-appl.herokuapp.com/api/shops'
        );
        if (!data) return;
        setShops(data.shops);
        setActiveShopId(data.shops[0]._id);
      } catch (error) {
        console.log(error.message);
      }
    };

    getShops();
  }, []);

  return (
    <Container
      styles={{
        paddingRight: '15px',
        paddingLeft: '15px',
        paddingBottom: '40px',
        height: 'calc(100vh - 70px)',
        display: 'flex',
      }}
    >
      {shops.length > 0 && (
        <ShopList
          shops={shops}
          setActiveShopId={setActiveShopId}
          activeShopId={activeShopId}
          cartItems={cartItems}
        />
      )}

      {activeShopId && <GoodsList activeShopId={activeShopId} onAdd={onAdd} />}
    </Container>
  );
}

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './GoodsList.module.css';
import GoodsListItem from 'components/GoodsListItem/GoodsListItem';
import Loader from 'components/Loader/Loader';

export default function GoodsList({ activeShopId, onAdd }) {
  const [goods, setGoods] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getGoods = async shopId => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://delivery-appl.herokuapp.com/api/goods/${activeShopId}`
        );
        if (!data) return;
        setGoods(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error.message);
      }
    };

    getGoods();
  }, [activeShopId]);

  return (
    <ul className={styles.list}>
      {isLoading ? (
        <Loader />
      ) : (
        goods.map(item => (
          <GoodsListItem key={item._id} product={item} onAdd={onAdd} />
        ))
      )}
    </ul>
  );
}

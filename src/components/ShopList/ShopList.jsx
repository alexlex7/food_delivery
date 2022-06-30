import ShopListItem from 'components/ShopListItem/ShopListItem';
import React from 'react';
import styles from './ShopList.module.css';

export default function ShopList({
  shops,
  activeShopId,
  setActiveShopId,
  cartItems,
}) {
  return (
    <>
      <div className={styles.asideContainer}>
        <h4 className={styles.title}>Shops:</h4>
        <ul className={styles.list}>
          {shops.map(item => (
            <ShopListItem
              key={item._id}
              item={item}
              isActive={activeShopId === item._id ? true : false}
              setActiveShopId={setActiveShopId}
              cartItems={cartItems}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

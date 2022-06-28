import React from 'react';
import styles from './ShopList.module.css';

export default function ShopList({ shops }) {
  return (
    <>
      <div className={styles.asideContainer}>
        <h4 className={styles.title}>Shops:</h4>
        <ul className={styles.list}>
          {shops.length > 0 ? (
            shops.map(item => (
              <li className={styles.listItem} key={item.id}>
                {item.name}
              </li>
            ))
          ) : (
            <div>There is no available shop</div>
          )}
        </ul>
      </div>
    </>
  );
}

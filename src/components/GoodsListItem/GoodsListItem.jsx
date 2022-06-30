import React from 'react';
import styles from './GoodsListItem.module.css';

export default function GoodsListItem({ product, onAdd }) {
  const handleAddProduct = e => {
    onAdd(product);
  };
  return (
    <li className={styles.listItem}>
      <div className={styles.thumb}>
        <img className={styles.image} src={product.image} alt="food" />
      </div>
      <p className={styles.text}>{product.name}</p>
      <div className={styles.wrapper}>
        <button type="button" className={styles.btn} onClick={handleAddProduct}>
          Add to cart
        </button>
      </div>
    </li>
  );
}

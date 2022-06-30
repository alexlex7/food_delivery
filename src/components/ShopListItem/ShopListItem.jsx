import React from 'react';
import styles from './ShopListItem.module.css';

export default function ShopListItem({
  item,
  isActive,
  setActiveShopId,
  cartItems,
}) {
  const handleClick = e => {
    setActiveShopId(item._id);
  };

  const shouldDisable = (isActive, cartItems) => {
    if (!isActive && cartItems.length !== 0) {
      return true;
    }

    return false;
  };
  return (
    <li className={isActive ? styles.activeItem : styles.listItem}>
      <button
        disabled={shouldDisable(isActive, cartItems)}
        type="button"
        className={styles.btn}
        onClick={handleClick}
      >
        {item.name}
      </button>
    </li>
  );
}

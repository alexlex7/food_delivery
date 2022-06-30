import React, { useState } from 'react';
import styles from './Basket.module.css';
import axios from 'axios';

const initialFormState = {
  name: '',
  email: '',
  phone: '',
  address: '',
};

export default function Basket({ cartItems, onAdd, onRemove, setCartItems }) {
  const [formData, setFormData] = useState(initialFormState);

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setFormData(state => {
          return { ...state, name: e.target.value };
        });
        break;
      case 'email':
        setFormData(state => {
          return { ...state, email: e.target.value };
        });
        break;
      case 'phone':
        setFormData(state => {
          return { ...state, phone: e.target.value };
        });
        break;
      case 'address':
        setFormData(state => {
          return { ...state, address: e.target.value };
        });
        break;

      default:
        break;
    }
  };

  const getTotalPrice = cartItems => {
    let totalPrice = cartItems.reduce((acc, item) => {
      return item.price * item.qty + acc;
    }, 0);

    return totalPrice;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const order = {
      ...formData,
      cartItems,
    };

    try {
      const response = await axios.post(
        'https://delivery-appl.herokuapp.com/api/orders',
        order
      );

      if (response.status === 201) {
        alert('Your order has been accepted');
        setFormData(initialFormState);
        setCartItems([]);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className={styles.wrapper}>
        <form
          className={styles.orderForm}
          autoComplete="off"
          id="orderForm"
          onSubmit={handleSubmit}
        >
          <label className={styles.label}>
            Name:
            <input
              required
              className={styles.input}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label className={styles.label}>
            Email:
            <input
              required
              className={styles.input}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label className={styles.label}>
            Phone:
            <input
              required
              className={styles.input}
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </label>
          <label className={styles.label}>
            Address:
            <input
              required
              className={styles.input}
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </label>
        </form>
        <ul className={styles.list}>
          {cartItems.length > 0 ? (
            cartItems.map(item => (
              <li key={item._id} className={styles.listItem}>
                <div className={styles.thumb}>
                  <img
                    className={styles.image}
                    src={item.image}
                    alt={item.name}
                  />
                </div>
                <div className={styles.textWrapper}>
                  <p>{item.name}</p>
                  <p>Price: {item.price * item.qty}</p>

                  <div className={styles.inputWrapper}>
                    <span
                      className={styles.inputNumberDecrement}
                      onClick={() => onRemove(item)}
                    >
                      –
                    </span>
                    <input
                      readOnly
                      className={styles.inputNumber}
                      type="text"
                      value={item.qty}
                    />
                    <span
                      className={styles.inputNumberIncrement}
                      onClick={() => onAdd(item)}
                    >
                      +
                    </span>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <p>Cart is empty</p>
          )}
        </ul>
      </div>
      <div className={styles.btnWrapper}>
        <p className={styles.text}>Total price: {getTotalPrice(cartItems)} </p>
        <button
          form="orderForm"
          disabled={!cartItems.length > 0}
          className={styles.btn}
          type="submit"
        >
          Submit
        </button>
      </div>
    </>
  );
}

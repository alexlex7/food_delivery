import { Routes, Route } from 'react-router-dom';
import Shop from 'views/Shop';
import ShoppingCart from 'views/ShoppingCart';
import Navigation from './Navigation/Navigation';
import NotFound from '../views/NotFound';
import { useState, useEffect } from 'react';

const getCartItems = () => {
  const cartItems = JSON.parse(localStorage.getItem('cartItems'));
  return cartItems ? cartItems : [];
};

export const App = () => {
  const [cartItems, setCartItems] = useState(getCartItems);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const onAdd = product => {
    const exist = cartItems.find(x => x._id === product._id);
    if (exist) {
      setCartItems(
        cartItems.map(x =>
          x._id === product._id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = product => {
    const exist = cartItems.find(x => x._id === product._id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter(x => x._id !== product._id));
    } else {
      setCartItems(
        cartItems.map(x =>
          x._id === product._id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={<Shop onAdd={onAdd} cartItems={cartItems} />}
        />
        <Route
          path="/shopping-cart"
          element={
            <ShoppingCart
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove}
              setCartItems={setCartItems}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

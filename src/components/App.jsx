import { Routes, Route } from 'react-router-dom';
import Shop from 'views/Shop';
import ShoppingCart from 'views/ShoppingCart';
import Navigation from './Navigation/Navigation';
import NotFound from '../views/NotFound';

export const App = () => {
  return (
    <div className="app">
      <Navigation />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

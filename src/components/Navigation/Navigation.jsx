import React from 'react';
import style from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <div className={style.navigation}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? style.activeLink : style.navLink
        }
      >
        Shop
      </NavLink>
      <span className={style.lineElement}></span>
      <NavLink
        to="/shopping-cart"
        className={({ isActive }) =>
          isActive ? style.activeLink : style.navLink
        }
      >
        Shopping Cart
      </NavLink>
    </div>
  );
}

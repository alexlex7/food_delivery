import React from 'react';
import style from './Container.module.css';

export default function Container({ styles, children }) {
  return (
    <div className={style.container} style={styles}>
      {children}
    </div>
  );
}

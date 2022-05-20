import React from 'react';

import { IProduct } from './Product.types';
import styles from './Product.module.css';

export function Product({
  name,
  price,
  quantity,
}: IProduct) {
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        {name}
      </div>
      <div className={styles.quantity}>
        Quantity: {quantity}
      </div>
      <div className={styles.price}>
        Price: {price}
      </div>
    </div>
  );
}

import React from 'react';

import { STATUSES } from 'app/constants';
import { IStatus } from './Status.types';
import styles from './Status.module.css';

export function Status({
  value,
  className,
}: IStatus) {
  const statusStyles = [
    styles.placed,
    styles.preparing,
    styles.prepared,
    styles.onTheWay,
    styles.delivered,
  ];

  return (
    <div className={`${styles.root} ${statusStyles[value]} ${className}`}>
      {STATUSES[value]}
    </div>
  );
}

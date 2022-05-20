import React from 'react';

import { STATUSES } from 'app/constants';
import { Collapse } from 'components';
import { IOrderDetails } from './OrderDetails.types';
import styles from './OrderDetails.module.css';

export function OrderDetails({
  order,
}: IOrderDetails) {
  const deliveryAddress = order.deliveryAddress;
  const addressString = deliveryAddress
    ? `${deliveryAddress.postalCode}, ${deliveryAddress.city}, ${deliveryAddress.street} ${deliveryAddress.streetNumber}`
    : '';

  const statusHistory = order.statusHistory;
  statusHistory?.sort((a, b) => new Date(a.timeStamp).getTime() - new Date(b.timeStamp).getTime());

  return (
    <>
      <div className={styles.title}>
        Order details
      </div>
      <div className={styles.address}>
        Address: {addressString}
      </div>
      <div className={styles.packaging}>
        Include cutlery:
        <div className={styles.cutlery}>
          {order.packaging.includeCutlery ? 'Yes' : 'No'}
        </div>
      </div>
      <Collapse
        label="Status history"
        className={styles.statusHistory}
      >
        {statusHistory?.map((item) => (
          <div
            key={item.timeStamp}
            className={styles.status}
          >
            {`${STATUSES[item.status]}: ${new Date(item.timeStamp).toLocaleString()}`}
          </div>
        ))}
      </Collapse>
      <Collapse
        label="Payment"
        className={styles.payment}
      >
        <div className={styles.amount}>
          Amount: {order.payment.amount}
        </div>
        <div className={styles.due}>
          Due: {order.payment.due}
        </div>
      </Collapse>
    </>
  );
}

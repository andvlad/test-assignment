import React from 'react';
import { useQuery } from 'react-query';

import { QUERY_KEYS } from 'app/constants';
import { fetchOrder } from 'services/order';
import { Product } from 'components';
import { OrderDetails, Status } from 'features';
import styles from './Order.module.css';

function Order() {
  const { isLoading, isError, data } = useQuery(QUERY_KEYS.ORDER, fetchOrder);

  return (
    <div className={styles.root}>
      {isLoading ? (
        <div className={styles.title}>
          Loading...
        </div>
      ) : (
        <>
          <div className={styles.title}>
            Order {data?.channelOrderDisplayId}
          </div>
          <div className={styles.dates}>
            <div className={styles.created}>
              Created {data ? new Date(data._created).toLocaleString() : ''};
            </div>
            <div className={styles.updated}>
              Updated {data ? new Date(data._updated).toLocaleString() : ''}
            </div>
          </div>
          {data && <Status value={data.status} />}
          <div className={styles.subtitle}>
            Order content
          </div>
          {data?.items.map((product) => (
            <Product
              key={product.plu}
              {...product}
            />
          ))}
          {data && <OrderDetails order={data} />}
        </>
      )}
      {isError && (
        <div className={styles.title}>
          Error
          <div className={styles.errorMessage}>
            Something went wrong. Please try again
          </div>
        </div>
      )}
    </div>
  );
}

export default Order;

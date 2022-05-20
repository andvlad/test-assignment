import React, {
  useCallback,
  useState,
  FormEvent,
} from 'react';

import { queryClient } from 'App';
import { STATUSES, QUERY_KEYS } from 'app/constants';
import { updateOrder } from 'services/order';
import { Status as StatusComponent } from 'components';
import { IStatus } from './Status.types';
import styles from './Status.module.css';

export function Status({
  value,
}: IStatus) {
  const [isStatusChangeActive, setIsStatusChangeActive] = useState<boolean>(false);
  const [selectValue, setSelectValue] = useState<number>(value);

  const onStatusChangeCallback = useCallback((event: FormEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    setIsStatusChangeActive(!isStatusChangeActive);
  }, [isStatusChangeActive, setIsStatusChangeActive])

  const onSelectChangeCallback = useCallback((event: FormEvent<HTMLSelectElement>) => {
    event.preventDefault();

    setSelectValue(Number(event.currentTarget.value));
  }, [setSelectValue])

  const onOkClickCallback = useCallback(async (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (selectValue === value) {
      return;
    }

    const order = queryClient.getQueryData<any>(QUERY_KEYS.ORDER);
    const now = new Date().toISOString();

    try {
      await updateOrder({
        ...order,
        status: selectValue,
        _updated: now,
        statusHistory: [
          ...order.statusHistory,
          {
            status: selectValue,
            timeStamp: now,
          }
        ],
      });
    } catch (e) {
      console.error(e)
    }

    setIsStatusChangeActive(false);
  }, [selectValue, value])

  return (
    <div className={styles.root}>
      Status:
      <StatusComponent
        value={value}
        className={styles.statusComponent}
      />
      {isStatusChangeActive ? (
        <>
          <select
            value={selectValue}
            onChange={onSelectChangeCallback}
          >
            {STATUSES.map((status, index) => (
              <option
                key={status}
                value={index}
              >
                {status}
              </option>
            ))}
          </select>
          <button
            onClick={onOkClickCallback}
            className={styles.okButton}
          >
            Ok
          </button>
          <a onClick={onStatusChangeCallback}>Cancel</a>
        </>
      ) : (
        <a onClick={onStatusChangeCallback}>Change status</a>
      )}
    </div>
  );
}

import React, {FormEvent, useCallback, useState} from 'react';

import { ICollapse } from './Collapse.types';
import styles from './Collapse.module.css';

export function Collapse({
  label,
  className,
  children,
}: ICollapse) {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  const onClickCallback = useCallback((event: FormEvent<HTMLDivElement>) => {
    event.preventDefault();

    setIsCollapsed(!isCollapsed)
  }, [isCollapsed, setIsCollapsed])

  return (
    <div className={`${styles.root} ${isCollapsed ? styles.collapsed : styles.opened} ${className}`}>
      <div
        className={styles.label}
        onClick={onClickCallback}
      >
        {label}
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}

import React from 'react';
import { useScrollPercent } from './useScrollPercent.hook';
import styles from './Progresser.module.scss';

export const Progresser = (): JSX.Element => {
  const scrollPercent = useScrollPercent();

  return (
    <div
      className={styles.progresser}>

      <div
        className={styles['progress-line']}
        style={{ width: `${scrollPercent}%` }}
      />
    </div>
  );
};

import React, { FC } from 'react';
import styles from './RomanNumberConverter.module.css';
import ResultTable from '../ResultTable';

const RomanNumberConverter = () => {
  const total = 0;
  return (
    <div>
      <h1 className={styles.title}>Roman Numeral Calculator</h1>
      <div className={styles.description}>
        <input className={styles.input} placeholder="Type Roman Numerals" />
      </div>
      <div>
        {!!total && <ResultTable total={total} numbers={[]} />}
      </div>
    </div>
  );
};

export default RomanNumberConverter;

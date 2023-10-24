import React, { ChangeEvent, FC, useState } from 'react';
import styles from './RomanNumberConverter.module.css';
import ResultTable from '../ResultTable';
import convertRomanNumberToNormalizedNumber, { TConvertedNumberResult } from 'utils/convertRomanNumberToNormalizedNumber';

const RomanNumberConverter = () => {
  const [{ total, numbers }, setConverterState] = useState<TConvertedNumberResult>({ total:0, numbers: [] });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const finalValue = value.toUpperCase();
    const result = convertRomanNumberToNormalizedNumber(finalValue);
    setConverterState(result);
  }

  return (
    <div>
      <h1 className={styles.title}>Roman Numeral Calculator</h1>
      <div className={styles.description}>
        <input className={styles.input} onChange={onChange} placeholder="Type Roman Numerals" />
      </div>
      <div>
        {!!total && <ResultTable total={total} numbers={numbers} />}
      </div>
    </div>
  );
};

export default RomanNumberConverter;

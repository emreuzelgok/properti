import React, { ChangeEvent, useEffect, useState } from 'react';
import styles from './RomanNumberConverter.module.css';
import ResultTable from '../ResultTable';
import convertRomanNumberToNormalizedNumber, { TConvertedNumberResult } from 'utils/convertRomanNumberToNormalizedNumber';

const ONLY_ROMAN_NUMERAL_ALPHABETS_REGEX = /[^IVXLCDM]/gi;

const RomanNumberConverter = () => {
  const [inputValue, setInputValue] = useState('');
  const [{ total, numbers }, setConverterState] = useState<TConvertedNumberResult>({
    total:0,
    numbers: [],
  });

  useEffect(() => {
    const result = convertRomanNumberToNormalizedNumber(inputValue);
    setConverterState(result);
  }, [inputValue]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const finalValue = value.replaceAll(ONLY_ROMAN_NUMERAL_ALPHABETS_REGEX, '').toUpperCase();
    setInputValue(finalValue);
  }

  return (
    <div>
      <h1>Roman Numeral Calculator</h1>
      <div className={styles.description}>
        <input
          data-test-id="input"
          placeholder="Type Roman Numerals"
          className={styles.input}
          onChange={onChange}
          value={inputValue}
        />
      </div>
      <div>
        {!!total && <ResultTable total={total} numbers={numbers} />}
      </div>
    </div>
  );
};

export default RomanNumberConverter;

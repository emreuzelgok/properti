import React, { FC, useMemo } from 'react';
import styles from './ResultTable.module.css';
import { TNumberObject } from 'utils/findRomanNumberFromText';

type ResultTableProps = {
  numbers: TNumberObject[],
  total: number,
};

const ResultTable: FC<ResultTableProps> = ({ numbers,  total }) => {
  const finalNumbers = useMemo(() => {
    return numbers.filter(item => !!item.number)
  }, [numbers]);

  return (
    <table className={styles.table}>
      <tr>
        <th>Roman Numeral</th>
        <th>=</th>
        <th>Latin Number</th>
      </tr>
      {finalNumbers.filter(item => !!item.number).map((item)=> (
        <tr>
          <td><strong>{item.key}</strong></td>
          <td><center>=</center></td>
          <td>{item.number}</td>
        </tr>
      ))}
      {!!total && (
        <tr>
          <th><strong>Total</strong></th>
          <th><center>=</center></th>
          <th><strong>{total}</strong></th>
        </tr>
      )}
    </table>
  );
};

export default ResultTable;

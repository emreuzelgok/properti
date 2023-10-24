import React, { FC, useMemo } from 'react';
import styles from './ResultTable.module.css';
import { TNumberObject } from 'utils/findRomanNumberFromText';

type ResultTableProps = {
  numbers: TNumberObject[],
  total: number,
};

const ResultTable: FC<ResultTableProps> = ({ numbers,  total }) => {
  const finalNumbers = useMemo(() => {
    return numbers.filter(item => !!item.number);
  }, [numbers]);

  return (
    <table className={styles.table} data-testid="result-table">
      <thead>
        <tr>
          <th>Roman Numeral</th>
          <th>=</th>
          <th>Latin Number</th>
        </tr>
      </thead>
      <tbody>
        {finalNumbers.map((item)=> (
          <tr key={item.key}>
            <td><strong>{item.key}</strong></td>
            <td><center>=</center></td>
            <td>{item.number}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        {!!total && (
          <tr>
            <th><strong>Total</strong></th>
            <th><center>=</center></th>
            <th><strong>{total}</strong></th>
          </tr>
        )}
      </tfoot>
    </table>
  );
};

export default ResultTable;

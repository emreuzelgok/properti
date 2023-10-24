import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react';
import ResultTable from './ResultTable';

const result = {
  total: 2421,
  numbers: [
    {
      number: 2000,
      key: 'MM',
      startIndex: 2
    },
    {
      number: 400,
      key: 'CD',
      startIndex: 2
    },
    {
      number: 20,
      key: 'XX',
      startIndex: 2
    },
    {
      number: 1,
      key: 'I',
      startIndex: 1
    }
  ]
}

it('ResultTable component should be rendered.', () => {
  render(<ResultTable {...result} />);
  const resultTable = screen.getByTestId('result-table');
  expect(resultTable).toBeInTheDocument();
});

it('ResultTable component should be rendered with correct values.', () => {
  render(<ResultTable {...result} />);
  const resultTable = screen.getByTestId('result-table');
  const rows = resultTable.querySelectorAll('tr');
  
  expect(rows).toHaveLength(6);
  const row1= rows[0];
  const row2= rows[1];
  const row3= rows[2];
  const row4= rows[3];
  const row5= rows[4];
  const row6= rows[5];

  const row1Cells = row1.querySelectorAll('th');
  const row2Cells = row2.querySelectorAll('td');
  const row3Cells = row3.querySelectorAll('td');
  const row4Cells = row4.querySelectorAll('td');
  const row5Cells = row5.querySelectorAll('td');
  const row6Cells = row6.querySelectorAll('th');

  // Heading Row
  expect(row1Cells[0].innerHTML).toEqual('Roman Numeral');
  expect(row1Cells[1].innerHTML).toEqual('=');
  expect(row1Cells[2].innerHTML).toEqual('Latin Number');

  // Number list
  const firstNumber = result.numbers[0];
  expect(row2Cells[0].querySelector('strong')?.innerHTML).toEqual(firstNumber.key);
  expect(row2Cells[1].querySelector('center')?.innerHTML).toEqual('=');
  expect(row2Cells[2].innerHTML).toEqual(firstNumber.number.toString());

  const secondNumber = result.numbers[1];
  expect(row3Cells[0].querySelector('strong')?.innerHTML).toEqual(secondNumber.key);
  expect(row3Cells[1].querySelector('center')?.innerHTML).toEqual('=');
  expect(row3Cells[2].innerHTML).toEqual(secondNumber.number.toString());

  const thirdNumber = result.numbers[2];
  expect(row4Cells[0].querySelector('strong')?.innerHTML).toEqual(thirdNumber.key);
  expect(row4Cells[1].querySelector('center')?.innerHTML).toEqual('=');
  expect(row4Cells[2].innerHTML).toEqual(thirdNumber.number.toString());

  const fourthNumber = result.numbers[3];
  expect(row5Cells[0].querySelector('strong')?.innerHTML).toEqual(fourthNumber.key);
  expect(row5Cells[1].querySelector('center')?.innerHTML).toEqual('=');
  expect(row5Cells[2].innerHTML).toEqual(fourthNumber.number.toString());

  // Total Row
  expect(row6Cells[0].querySelector('strong')?.innerHTML).toEqual('Total');
  expect(row6Cells[1].querySelector('center')?.innerHTML).toEqual('=');
  expect(row6Cells[2].querySelector('strong')?.innerHTML).toEqual(result.total.toString());
})
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react';
import RomanNumberConverter from './RomanNumberConverter';

it('RomanNumberConverter should have input element on first render', () => {
  render(<RomanNumberConverter />);
  const input = screen.queryByPlaceholderText('Type Roman Numerals');
  expect(input).toBeInTheDocument();
});

it('RomanNumberConverter shuld have empty value when typed incorrect Roman Numerals', () => {
  render(<RomanNumberConverter />);
  const input = screen.getByTestId('converter-input');
  fireEvent.change(input, { target: { value: 'a' } });
  expect(input).toHaveValue('');  
});

it('RomanNumberConverter converter-input should have correct and uppercase value when typed correct Roman Numerals', () => {
  render(<RomanNumberConverter />);
  const input = screen.getByTestId('converter-input');
  fireEvent.change(input, { target: { value: 'xii' } });
  expect(input).toHaveValue('XII');
});

it('RomanNumberConverter should not have result-table when typed incorrect Roman Numerals', () => {
  render(<RomanNumberConverter />);
  const input = screen.getByTestId('converter-input');
  fireEvent.change(input, { target: { value: 'a' } });
  const tableContainer = screen.queryByText('Latin Number');
  expect(tableContainer).toBeNull()
});

it('RomanNumberConverter should have result-table when typed correct Roman Numerals in converter-input.', () => {
  render(<RomanNumberConverter />);
  const input = screen.getByTestId('converter-input');
  fireEvent.change(input, { target: { value: 'xii' } });
  const resultTable = screen.getByTestId('result-table');
  expect(resultTable).toBeInTheDocument();
});
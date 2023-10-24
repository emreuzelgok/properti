import convertRomanNumberToNormalizedNumber from './convertRomanNumberToNormalizedNumber';

it('"XXXIX" roman number total property should be equal to 39.', () => {
  const numbers = convertRomanNumberToNormalizedNumber('XXXIX');
  expect(numbers.total).toEqual(39);
});

it('"XXXIX" roman number have numbers property should be includes 30 and 9 numbers.', () => {
  const numbers = convertRomanNumberToNormalizedNumber('XXXIX');
  expect(numbers.numbers[2].number).toEqual(30);
  expect(numbers.numbers[3].number).toEqual(9);
});

it('"XXXIX" roman number have numbers.key property should be includes 30 and 9 numbers.', () => {
  const numbers = convertRomanNumberToNormalizedNumber('XXXIX');
  const finalNumbersList = numbers.numbers.map(num => num.number).filter(num => !!num);
  expect(finalNumbersList[0]).toEqual(30);
  expect(finalNumbersList[1]).toEqual(9);
});
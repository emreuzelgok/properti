import findRomanNumberFromText from './findRomanNumberFromText';
import ROMAN_NUMBERS_MAP from './romanNumbers';
const { thousands, hundreds, tens, units } = ROMAN_NUMBERS_MAP;

it('"MM" Roman number should be equal to 2000, key value equal to "MM" and startIndex equal to 2.', () => {
  const numObject = findRomanNumberFromText('MM', thousands);
  expect(numObject.number).toEqual(2000);
  expect(numObject.key).toEqual('MM');
  expect(numObject.startIndex).toEqual(2);
});


it('"DCC" Roman number should be equal to 700, key value equal to "DCC" and startIndex equal to 3.', () => {
  const numObject = findRomanNumberFromText('DCC', hundreds);
  expect(numObject.number).toEqual(700);
  expect(numObject.key).toEqual('DCC');
  expect(numObject.startIndex).toEqual(3);
});


it('"LX" Roman number should be equal to 60, key value equal to "LX" and startIndex equal to 3.', () => {
  const numObject = findRomanNumberFromText('LX', tens);
  expect(numObject.number).toEqual(60);
  expect(numObject.key).toEqual('LX');
  expect(numObject.startIndex).toEqual(2);
});

it('"VIII" Roman number should be equal to 8, key value equal to "VIII" and startIndex equal to 4.', () => {
  const numObject = findRomanNumberFromText('VIII', units);
  expect(numObject.number).toEqual(8);
  expect(numObject.key).toEqual('VIII');
  expect(numObject.startIndex).toEqual(4);
});
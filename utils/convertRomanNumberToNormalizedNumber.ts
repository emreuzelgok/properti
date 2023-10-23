import findRomanNumberFromText, { TNumberObject } from './findRomanNumberFromText';
import ROMAN_NUMBERS_MAP from 'utils/romanNumbers';

const { thousands, hundreds, tens, units } = ROMAN_NUMBERS_MAP;

type TConvertedNumberResult = {
  total: number;
  numbers: TNumberObject[];
}

function convertRomanNumberToNormalizedNumber(text: string): TConvertedNumberResult {
  const upperCaseValue = text.toUpperCase();
  const thousandNum = findRomanNumberFromText(upperCaseValue, thousands);
  const hundredsNum = findRomanNumberFromText(upperCaseValue, hundreds, thousandNum.startIndex);
  const tensStartIndex = thousandNum.startIndex + hundredsNum.startIndex;
  const tensNum = findRomanNumberFromText(upperCaseValue, tens, tensStartIndex);
  const onesStartIndex = thousandNum.startIndex + hundredsNum.startIndex + tensNum.startIndex;
  const onesNum = findRomanNumberFromText(upperCaseValue, units, onesStartIndex);

  const numberList = [
    thousandNum,
    hundredsNum,
    tensNum,
    onesNum,
  ];

  const total = numberList
    .map(item => item.number)
    .reduce((prev, current) => prev + current, 0);

  return { total, numbers: numberList };  
}

export default convertRomanNumberToNormalizedNumber;
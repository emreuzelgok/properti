type TNumberDefinition = Record<string, number>;

export type TNumberObject = {
  key: string;
  number: number;
  startIndex: number;
}

function findRomanNumberFromText(text: string, numbersObject: TNumberDefinition, startIndex = 0): TNumberObject {
  /**
   * Reverse number keys by key length cause of finding correct numbers firstly.
   */
  const numberKeys = Object.keys(numbersObject).sort((a , b) => b.length - a.length);
  const finalText = !startIndex ? text : text.substring(startIndex, text.length);

  for (let i = 0; i < numberKeys.length; i++) {
    const key = numberKeys[i];
    if (finalText.startsWith(key)) {
      return {
        number: numbersObject[key as keyof typeof numbersObject] as number,
        key,
        startIndex: key.length,
      };
    } 
  }

  return { number: 0, startIndex: 0, key: '' };
}

export default findRomanNumberFromText;
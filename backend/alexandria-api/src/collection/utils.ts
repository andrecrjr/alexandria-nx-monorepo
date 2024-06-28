export function numberToWord(text) {
  const numberWords = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  };

  // Function to convert individual number to word
  function convertNumberToWord(number) {
    if (number <= 20) return numberWords[number];
    if (number < 100) {
      const tens = Math.floor(number / 10) * 10;
      const unit = number % 10;
      return numberWords[tens] + (unit ? '-' + numberWords[unit] : '');
    }
    if (number < 1000) {
      const hundreds = Math.floor(number / 100);
      const rest = number % 100;
      return (
        numberWords[hundreds] +
        ' hundred' +
        (rest ? ' ' + convertNumberToWord(rest) : '')
      );
    }
    return 'one thousand';
  }

  // Split the text into words and numbers
  const words = text.split(/\s+/);
  // Convert numbers to words
  const convertedWords = words.map((word) => {
    const number = parseInt(word);
    if (!isNaN(number)) {
      return convertNumberToWord(number);
    } else {
      return word;
    }
  });

  // Join the converted words back into a string
  return convertedWords.join(' ');
}

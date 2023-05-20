import React from 'react';

const NumberToWords = ({ amount }) => {
  const convertToWords = (num) => {
    const units = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten',
      'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

    if (num === 0) return 'Zero';

    const convertBelow100 = (num) => {
      if (num < 20) {
        return units[num];
      } else {
        const unitDigit = num % 10;
        const tensDigit = Math.floor(num / 10);
        return tens[tensDigit] + (unitDigit > 0 ? ` ${units[unitDigit]}` : '');
      }
    };

    const convert = (num) => {
      if (num < 100) {
        return convertBelow100(num);
      } else if (num < 1000) {
        const hundredDigit = Math.floor(num / 100);
        const remainingNum = num % 100;
        return units[hundredDigit] + ' Hundred' + (remainingNum > 0 ? ` and ${convertBelow100(remainingNum)}` : '');
      } else {
        const thousandDigit = Math.floor(num / 1000);
        const remainingNum = num % 1000;
        return convertBelow100(thousandDigit) + ' Thousand' + (remainingNum > 0 ? `, ${convert(remainingNum)}` : '');
      }
    };

    const crore = Math.floor(num / 10000000);
    const lakh = Math.floor((num % 10000000) / 100000);
    const remainingNum = num % 100000;

    const result = [];
    if (crore > 0) {
      result.push(`${convert(crore)} Crore`);
    }
    if (lakh > 0) {
      result.push(`${convert(lakh)} Lakh`);
    }
    if (remainingNum > 0) {
      result.push(convert(remainingNum));
    }

    return result.join(', ');
  };

  return (
    <div>
      <p>{convertToWords(amount)}</p>
    </div>
  );
};

export default NumberToWords;

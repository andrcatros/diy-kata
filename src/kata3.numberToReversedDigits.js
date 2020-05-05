const numberToReversedDigits = number => {
  const getRidOfMinus = array => {
    array.shift();
  };
  const getRidOfDot = array => {
    const a = array.indexOf(".");
    if (a !== -1) {
      num.splice(a, 1);
    }
  };
  let num = number.toString().split("");

  if (number < 0) {
    getRidOfMinus(num);
    getRidOfDot(num);
  } else {
    getRidOfDot(num);
  }
  num = num.map(i => parseInt(i));

  return num.reverse();
};

module.exports = numberToReversedDigits;

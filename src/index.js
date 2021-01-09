module.exports = function toReadable (number) {
  let units = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine"
  };
  let tenthsA = {
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen"
  };
  let tenthsB = {
    2: "twenty",
    3: "thirty",
    4: "forty",
    5: "fifty",
    6: "sixty",
    7: "seventy",
    8: "eighty",
    9: "ninety"
  }
  if(number >= 0 && number < 10){
    return units[number];
  }
  if(number >= 10 && number < 20){
    return tenthsA[number];
  }
  if(number >= 20 && number < 100){
    let strNumber = number.toString().split('');
    if (strNumber[1] === '0') {
      return tenthsB[strNumber[0]];
    }else{
      return tenthsB[strNumber[0]] + ' ' + units[strNumber[1]];
    }
  }
  if (number >= 100) {
    let strNumber = number.toString().split('');
    if (strNumber[1] === '0' && strNumber[2] === '0'){
      return units[strNumber[0]] + ' hundred';
    }
    if (strNumber[1] === '0'){
      return units[strNumber[0]] + ' hundred ' + units[strNumber[2]];
    }
    if(+strNumber[1]+strNumber[2] >= 10 && +strNumber[1]+strNumber[2] < 20){
      return units[strNumber[0]] + ' hundred ' + tenthsA[strNumber[1]+strNumber[2]];
    }
    if(strNumber[2] === '0'){
      return units[strNumber[0]] + ' hundred ' + tenthsB[strNumber[1]];
    }else{
      return units[strNumber[0]] + ' hundred ' + tenthsB[strNumber[1]] + ' ' + units[strNumber[2]];
    }

  }

};

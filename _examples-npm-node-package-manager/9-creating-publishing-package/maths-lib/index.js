module.exports.add = function (num1, num2) { 
  return num1 + num2;
}

module.exports.subtract = function (num1, num2) { 
  return num1 - num2;
}

module.exports.multiply = function (num1, num2) { 
  return num1 * num2;
}

module.exports.divide = function (num1, num2) { 
  return num1 / num2;
}

module.exports.oddEven = function (num1) {
  if(num1 % 2 === 0){
    return 'Even Number';
  } else {
    return 'Odd Number';
  }
}

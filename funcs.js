function isFive(num) {
  if(num === 5) {
    return true;
  } else {
    return false;
  }
}

function isOdd(number) {
  if (number % 2 === 1 || number % 2 === -1) {
    return true;
  } 
  if(number % 2 === 0) {
    return false;
  }
  if(typeof number !== "number") {
    throw new Error("argument is not a typeof 'number'");
  }
}

function myRange(min, max, step = 1) {
  let resArr = [];
  if(min < max) {
    for(let i = min; i <= max; i += step) {
      resArr.push(i);
    }
  }
  return resArr;
}


module.exports = { isFive, isOdd, myRange };
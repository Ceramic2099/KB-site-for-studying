function getRandomNumber(min, max) {
  if (Number.isFinite(min) && Number.isFinite(max)) {
    if (min >= 0 && max > min) {
      return Math.round(Math.random() * (max - min) + min);
    }
  }

  return NaN;
}

function getRandomNumberWithFloat(min, max, decimal) {
  if (Number.isFinite(min) && Number.isFinite(max) && Number.isFinite(decimal)) {
    if (min >= 0 && max > min) {
      return (Math.random() * (max - min) + min).toFixed(decimal);
    }
  }
  return NaN;
}

export {getRandomNumber, getRandomNumberWithFloat};
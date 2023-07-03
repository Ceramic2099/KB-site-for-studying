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

function getTypeToRus(type) {
  let houseType = '';
  switch (type) {
    case 'flat' :
      houseType = 'Квартира';
      break;
    case 'bungalow' :
      houseType = 'Бунгало';
      break;
    case 'house' :
      houseType = 'Дом';
      break;
    case 'palace' :
      houseType = 'Дворец';
      break;
  }
  return houseType;
}

function getPhotosImg (photoArray, imageElement) {
  const photoContainer = document.createDocumentFragment();
  photoArray.forEach(function(src) {
    const imgSample = imageElement.querySelector('.popup__photo').cloneNode(true);
    imgSample.src = src;
    photoContainer.appendChild(imgSample);
  });
  return photoContainer;
}

export {getRandomNumber, getRandomNumberWithFloat, getTypeToRus, getPhotosImg};
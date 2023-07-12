//import {getFakeSuitesData} from './data.js';
import {getTypeToRus, getPhotosImg} from './util.js'

//const fakeData = getFakeSuitesData();

/*function getAdsElements (dataAttay) {
  const adsContainer = document.createDocumentFragment();
  const adsTemplate = document.querySelector('#card').content.querySelector('.popup');

  dataAttay.forEach(function(elementValue) {
    const newAds = adsTemplate.cloneNode(true);
    newAds.querySelector('.popup__title').textContent = elementValue.offer.title ? elementValue.offer.title : newAds.querySelector('.popup__title').style.display = 'none';
    newAds.querySelector('.popup__text--address').textContent = elementValue.offer.address ? elementValue.offer.address : newAds.querySelector('.popup__text--address').style.display = 'none';
    newAds.querySelector('.popup__text--price').textContent = elementValue.offer.price + ' ₽/ночь' ? elementValue.offer.price + ' ₽/ночь' : newAds.querySelector('.popup__text--price').style.display = 'none';
    newAds.querySelector('.popup__type').textContent = getTypeToRus(elementValue.offer.type) ? getTypeToRus(elementValue.offer.type) : newAds.querySelector('.popup__type').style.display = 'none';
    newAds.querySelector('.popup__text--capacity').textContent = elementValue.offer.rooms + ' комнаты для ' + elementValue.offer.guests + ' гостей' ? elementValue.offer.rooms + ' комнаты для ' + elementValue.offer.guests + ' гостей' : newAds.querySelector('.popup__text--capacity').style.display = 'none';
    newAds.querySelector('.popup__text--time').textContent = 'Заезд после ' + elementValue.offer.chekin + ', выезд до ' + elementValue.offer.chekout ? 'Заезд после ' + elementValue.offer.chekin + ', выезд до ' + elementValue.offer.chekout : newAds.querySelector('.popup__text--time').style.display = 'none';
    newAds.querySelector('.popup__features').textContent = elementValue.offer.features.join(', ') ? elementValue.offer.features.join(', ') : newAds.querySelector('.popup__features').style.display = 'none';
    newAds.querySelector('.popup__description').textContent = elementValue.offer.description ? elementValue.offer.description : newAds.querySelector('.popup__description').style.display = 'none';
    newAds.querySelector('.popup__photos').replaceChild(getPhotosImg(elementValue.offer.photos, newAds), newAds.querySelector('.popup__photo')) ? newAds.querySelector('.popup__photos').replaceChild(getPhotosImg(elementValue.offer.photos, newAds), newAds.querySelector('.popup__photo')) : newAds.querySelector('.popup__photos').style.display = 'none';
    newAds.querySelector('.popup__avatar').src = elementValue.author.avatar ? elementValue.author.avatar : newAds.querySelector('.popup__avatar').style.display = 'none';


    adsContainer.appendChild(newAds);
  })

  return adsContainer;

}*/

function getAdsElement (data) {
  const adsTemplate = document.querySelector('#card').content.querySelector('.popup');

  const newAds = adsTemplate.cloneNode(true);
  newAds.querySelector('.popup__title').textContent = data.offer.title ? data.offer.title : newAds.querySelector('.popup__title').style.display = 'none';
  newAds.querySelector('.popup__text--address').textContent = data.offer.address ? data.offer.address : newAds.querySelector('.popup__text--address').style.display = 'none';
  newAds.querySelector('.popup__text--price').textContent = data.offer.price + ' ₽/ночь' ? data.offer.price + ' ₽/ночь' : newAds.querySelector('.popup__text--price').style.display = 'none';
  newAds.querySelector('.popup__type').textContent = getTypeToRus(data.offer.type) ? getTypeToRus(data.offer.type) : newAds.querySelector('.popup__type').style.display = 'none';
  newAds.querySelector('.popup__text--capacity').textContent = data.offer.rooms + ' комнаты для ' + data.offer.guests + ' гостей' ? data.offer.rooms + ' комнаты для ' + data.offer.guests + ' гостей' : newAds.querySelector('.popup__text--capacity').style.display = 'none';
  newAds.querySelector('.popup__text--time').textContent = 'Заезд после ' + data.offer.chekin + ', выезд до ' + data.offer.chekout ? 'Заезд после ' + data.offer.chekin + ', выезд до ' + data.offer.chekout : newAds.querySelector('.popup__text--time').style.display = 'none';
  newAds.querySelector('.popup__features').textContent = data.offer.features.join(', ') ? data.offer.features.join(', ') : newAds.querySelector('.popup__features').style.display = 'none';
  newAds.querySelector('.popup__description').textContent = data.offer.description ? data.offer.description : newAds.querySelector('.popup__description').style.display = 'none';
  newAds.querySelector('.popup__photos').replaceChild(getPhotosImg(data.offer.photos, newAds), newAds.querySelector('.popup__photo')) ? newAds.querySelector('.popup__photos').replaceChild(getPhotosImg(data.offer.photos, newAds), newAds.querySelector('.popup__photo')) : newAds.querySelector('.popup__photos').style.display = 'none';
  newAds.querySelector('.popup__avatar').src = data.author.avatar ? data.author.avatar : newAds.querySelector('.popup__avatar').style.display = 'none';

  return newAds;

}

export {getAdsElement};

//const adsElements = getAdsElements(fakeData);
//document.querySelector('#map-canvas').appendChild(adsElements.childNodes[0]);
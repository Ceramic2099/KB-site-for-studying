import {getTypeToRus, getPhotosImg} from './util.js';

function getAdsElement (data) {
  const adsTemplate = document.querySelector('#card').content.querySelector('.popup');

  const newAds = adsTemplate.cloneNode(true);
  newAds.querySelector('.popup__title').textContent = data.offer.title ? data.offer.title : newAds.querySelector('.popup__title').style.display = 'none';
  newAds.querySelector('.popup__text--address').textContent = data.offer.address ? data.offer.address : newAds.querySelector('.popup__text--address').style.display = 'none';
  newAds.querySelector('.popup__text--price').textContent = data.offer.price + ' ₽/ночь' ? data.offer.price + ' ₽/ночь' : newAds.querySelector('.popup__text--price').style.display = 'none';
  newAds.querySelector('.popup__type').textContent = getTypeToRus(data.offer.type) ? getTypeToRus(data.offer.type) : newAds.querySelector('.popup__type').style.display = 'none';
  newAds.querySelector('.popup__text--capacity').textContent = data.offer.rooms + ' комнаты для ' + data.offer.guests + ' гостей' ? data.offer.rooms + ' комнаты для ' + data.offer.guests + ' гостей' : newAds.querySelector('.popup__text--capacity').style.display = 'none';
  newAds.querySelector('.popup__text--time').textContent = 'Заезд после ' + data.offer.chekin + ', выезд до ' + data.offer.chekout ? 'Заезд после ' + data.offer.chekin + ', выезд до ' + data.offer.chekout : newAds.querySelector('.popup__text--time').style.display = 'none';
  newAds.querySelector('.popup__features').textContent = data.offer.features ? data.offer.features.join(', ') : newAds.querySelector('.popup__features').style.display = 'none';
  newAds.querySelector('.popup__description').textContent = data.offer.description ? data.offer.description : newAds.querySelector('.popup__description').style.display = 'none';
  data.offer.photos ? newAds.querySelector('.popup__photos').replaceChild(getPhotosImg(data.offer.photos, newAds), newAds.querySelector('.popup__photo')) : newAds.querySelector('.popup__photos').style.display = 'none';
  newAds.querySelector('.popup__avatar').src = data.author.avatar ? data.author.avatar : newAds.querySelector('.popup__avatar').style.display = 'none';

  return newAds;

}

export {getAdsElement};
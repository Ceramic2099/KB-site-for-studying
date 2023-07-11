import {getFakeSuitesData} from './data.js';
import {getTypeToRus, getPhotosImg} from './util.js'

const fakeData = getFakeSuitesData();
const similiarTemplate = document.querySelector('#card').content;
const adsTemplate = similiarTemplate.querySelector('.popup');

function getAdsElements (dataAttay) {
  const adsContainer = document.createDocumentFragment();

  dataAttay.forEach(function(elementValue) {
    const newAds = adsTemplate.cloneNode(true);
    newAds.querySelector('.popup__title').textContent = elementValue.offer.title;
    newAds.querySelector('.popup__text--address').textContent = elementValue.offer.address;
    newAds.querySelector('.popup__text--price').textContent = elementValue.offer.price + ' ₽/ночь';
    newAds.querySelector('.popup__type').textContent = getTypeToRus(elementValue.offer.type);
    newAds.querySelector('.popup__text--capacity').textContent = elementValue.offer.rooms + ' комнаты для ' + elementValue.offer.guests + ' гостей';
    newAds.querySelector('.popup__text--time').textContent = 'Заезд после ' + elementValue.offer.chekin + ', выезд до ' + elementValue.offer.chekout;
    newAds.querySelector('.popup__features').textContent = elementValue.offer.features.join(', ');
    newAds.querySelector('.popup__description').textContent = elementValue.offer.description;
    newAds.querySelector('.popup__photos').replaceChild(getPhotosImg(elementValue.offer.photos, newAds), newAds.querySelector('.popup__photo'));
    newAds.querySelector('.popup__avatar').src = elementValue.author.avatar;

    adsContainer.appendChild(newAds);
  })

  return adsContainer;

}

//const adsElements = getAdsElements(fakeData);
//document.querySelector('#map-canvas').appendChild(adsElements.childNodes[0]);
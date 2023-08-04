import {getTypeToRus, getPhotosImg} from './util.js';

const Default = {
  HOUSE_TYPE: 'any',
  HOUSE_PRICE: 'any',
  HOUSE_ROOMS: 'any',
}

function getAdsElement (data) {
  const adsTemplate = document.querySelector('#card').content.querySelector('.popup');

  const newAds = adsTemplate.cloneNode(true);
  newAds.querySelector('.popup__title').textContent = data.offer.title ? data.offer.title : newAds.querySelector('.popup__title').style.display = 'none';
  newAds.querySelector('.popup__text--address').textContent = data.offer.address ? data.offer.address : newAds.querySelector('.popup__text--address').style.display = 'none';
  newAds.querySelector('.popup__text--price').textContent = data.offer.price + ' ₽/ночь' ? data.offer.price + ' ₽/ночь' : newAds.querySelector('.popup__text--price').style.display = 'none';
  newAds.querySelector('.popup__type').textContent = getTypeToRus(data.offer.type) ? getTypeToRus(data.offer.type) : newAds.querySelector('.popup__type').style.display = 'none';
  newAds.querySelector('.popup__text--capacity').textContent = data.offer.rooms + ' комнаты для ' + data.offer.guests + ' гостей' ? data.offer.rooms + ' комнаты для ' + data.offer.guests + ' гостей' : newAds.querySelector('.popup__text--capacity').style.display = 'none';
  newAds.querySelector('.popup__text--time').textContent = 'Заезд после ' + data.offer.checkin + ', выезд до ' + data.offer.checkout ? 'Заезд после ' + data.offer.checkin + ', выезд до ' + data.offer.checkout : newAds.querySelector('.popup__text--time').style.display = 'none';
  newAds.querySelector('.popup__features').textContent = data.offer.features ? data.offer.features.join(', ') : newAds.querySelector('.popup__features').style.display = 'none';
  newAds.querySelector('.popup__description').textContent = data.offer.description ? data.offer.description : newAds.querySelector('.popup__description').style.display = 'none';
  data.offer.photos ? newAds.querySelector('.popup__photos').replaceChild(getPhotosImg(data.offer.photos, newAds), newAds.querySelector('.popup__photo')) : newAds.querySelector('.popup__photos').style.display = 'none';
  newAds.querySelector('.popup__avatar').src = data.author.avatar ? data.author.avatar : newAds.querySelector('.popup__avatar').style.display = 'none';

  return newAds;
}

function getAdsFilter (ads) {
  const adsFilterList = document.querySelector('.map__filters');
  const adsHousingTypeFilter = adsFilterList.querySelector('#housing-type option:checked');
  const adsPriceFilter = adsFilterList.querySelector('#housing-price option:checked');
  const adsRoomsCountFilter = adsFilterList.querySelector('#housing-rooms option:checked');
  const adsGuestNumberFilter = adsFilterList.querySelector('#housing-guests option:checked');
  const adsFeaturesFilter = adsFilterList.querySelectorAll('#housing-features input[type=checkbox]');

  let rank = 0;

  if (ads.offer.type === (adsHousingTypeFilter.value || Default.HOUSE_TYPE) || adsHousingTypeFilter.value === Default.HOUSE_TYPE) {
    rank += 1;
  }

  switch (adsGuestNumberFilter.value) {
    case 'any' :
      rank += 1;
      break;
    case '1' :
      if (ads.offer.guests === 1) {
        rank += 1;
      }
      break;
    case '2' :
      if (ads.offer.guests === 2) {
        rank += 1;
      }
      break;
    case '0' :
      if (ads.offer.guests > 10) {
        rank += 1;
      }
      break;
  }

  switch (adsRoomsCountFilter.value) {
    case 'any' :
      rank += 1;
      break;
    case '1' :
      if (ads.offer.rooms === 1) {
        rank += 1;
      }
      break;
    case '2' :
      if (ads.offer.rooms === 2) {
        rank += 1;
      }
      break;
    case '3' :
      if (ads.offer.rooms === 3) {
        rank += 1;
      }
      break;
  }

  switch (adsPriceFilter.value) {
    case 'any' :
      rank += 1;
      break;
    case 'middle' :
      if (ads.offer.price > 10000 && ads.offer.price < 50000) {
        rank += 1;
      }
      break;
    case 'low' :
      if (ads.offer.price < 10000) {
        rank += 1;
      }
      break;
    case 'high' :
      if (ads.offer.price > 50000) {
        rank += 1;
      }
      break;
  }

  adsFeaturesFilter.forEach(function (element){
    if (element.checked) {
      rank -= 1;
      if (ads.offer.features) {
        for (let i = 0; i < ads.offer.features.length; i++) {
          if (element.value === ads.offer.features[i]) {
            rank += 1;
          }
        }
      }
    }
  })

  if (rank > 3) {
    return true
  } else {
    return false
  }

}

export {getAdsElement, getAdsFilter};
import {getAdsElement, getAdsFilter} from './ads.js'

const adress = document.querySelector('#address');
const ADS_COUNT = 10;

mapInactive();

function mapInactive () {
  const adsForm = document.querySelector('.ad-form');
  adsForm.classList.toggle('ad-form--disabled');
  adsForm.querySelectorAll('fieldset').forEach(function(element){
    element.disabled = !element.disabled;
  });

  const filterForm = document.querySelector('.map__filters');
  filterForm.classList.toggle('map__filters--disabled');
  filterForm.querySelectorAll('fieldset').forEach(function(element){
    element.disabled = !element.disabled;
  });
  filterForm.querySelectorAll('select').forEach(function(element){
    element.disabled = !element.disabled;
  });
}

function getFormatedLatLng({lat, lng}) {
  return `${(lat).toFixed(5)}, ${(lng).toFixed(5)}`;
}

/* global L:readonly */
const map = L.map('map-canvas')
  .on('load', function () {
    mapInactive();
  })
  .setView({
    lat: 35.67724,
    lng: 139.75056,
  }, 13);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const primaryMarker = L.marker(
  {
    lat: 35.67724,
    lng: 139.75056,
  },
  {
    draggable: true,
    icon: L.icon({
      iconUrl: '/img/main-pin.svg',
      iconSize: [52, 52],
      iconAnchor: [26, 52],
    }),
  },
).on('moveend', function () {
  adress.value = getFormatedLatLng(primaryMarker.getLatLng());
}).addTo(map);

function renderAds(dataValues) {

  dataValues.slice().filter(getAdsFilter).slice(0, ADS_COUNT).forEach(function (value) {
    const adsPinIcon = L.icon({
      iconUrl: '/img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    const adsMarker = L.marker(
      {
        lat: value.location.lat,
        lng: value.location.lng,
      },
      {
        icon: adsPinIcon,
      },
    );

    const adsElement = getAdsElement(value);
    adsMarker.addTo(map).bindPopup(adsElement);
  });
}



export {renderAds, map, primaryMarker};









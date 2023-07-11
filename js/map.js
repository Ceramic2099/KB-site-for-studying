import {getFakeSuitesData} from './data.js';

const adress = document.querySelector('#address');
const fakeData = getFakeSuitesData();

mapInactive();

function mapInactive () {
  const adsForm = document.querySelector('.ad-form');
  adsForm.classList.toggle('ad-form--disabled');
  adsForm.querySelectorAll('fieldset').forEach(function(element){
    //element.classList.toggle('disabled');
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
const map = L.map('map')
  .on('load', function () {
    mapInactive();
  })
  .setView({
    lat: 35.68950,
    lng: 139.69171,
  }, 12);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);



/*const adsPinIcon = L.icon({
  iconUrl: '/img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});*/


L.marker(
  {
    lat: 35.68950,
    lng: 139.69171,
  },
  {
    draggable: true,
    icon: L.icon({
      iconUrl: '/img/main-pin.svg',
      iconSize: [52, 52],
      iconAnchor: [26, 52],
    }),
  },
).on('moveend', function (evt) {
  adress.value = getFormatedLatLng(evt.target.getLatLng());
}).addTo(map);

fakeData.forEach(function(value) {
  const adsPinIcon = L.icon({
    iconUrl: '/img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const adsMarker = L.marker(
    {
      lat: value.location.x,
      lng: value.location.y,
    },
    {
      icon: adsPinIcon,
    },
  );

  adsMarker.addTo(map).bindPopup(value.offer.title);
});









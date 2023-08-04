import { getRandomNumber, getRandomNumberWithFloat } from './util.js';

const ADS_NUMBER = 10;
const AVATARS = [
  'img/avatars/user01.png',
  'img/avatars/user02.png',
  'img/avatars/user03.png',
  'img/avatars/user04.png',
  'img/avatars/user05.png',
  'img/avatars/user06.png',
  'img/avatars/user07.png',
  'img/avatars/user08.png',
];
const TYPES = ['palace', 'flat', 'house', 'bungalow'];
const CHECK_TIMES = ['12:00', '13:00', '14:00'];
const SUITES_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const SUITES_PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];
const Locations = {
  x: {min: 35.65000, max: 35.70000},
  y: {min: 139.70000, max: 139.80000},
  decimal: 5,
};
const Price = {
  min: 1000,
  max: 99000,
};
const Rooms = {
  min: 1,
  max: 5,
}

const Guests = {
  min: 1,
  max: 10,
}

const createSuites = function () {
  const author = {
    avatar: AVATARS[getRandomNumber(0,AVATARS.length - 1)],
  }
  const location = {
    x: getRandomNumberWithFloat(Locations.x.min, Locations.x.max, Locations.decimal),
    y: getRandomNumberWithFloat(Locations.y.min, Locations.y.max, Locations.decimal),
  }
  const offer = {
    title: 'Best suites ever on Keksbooking',
    address: location.x + ', ' + location.y,
    price: getRandomNumber(Price.min, Price.max),
    type: TYPES[getRandomNumber(0,TYPES.length - 1)],
    rooms: getRandomNumber(Rooms.min,Rooms.max),
    guests: getRandomNumber(Guests.min, Guests.max),
    chekin: CHECK_TIMES[getRandomNumber(0,CHECK_TIMES.length - 1)],
    chekout: CHECK_TIMES[getRandomNumber(0,CHECK_TIMES.length - 1)],
    features: SUITES_FEATURES.slice(getRandomNumber(0,SUITES_FEATURES.length - 1)),
    description: 'Is a room in a home that\'s used for entertaining friends, talking, reading, or watching television. If you\'re a couch potato, you most likely spend lots of time in your living room. You can also call a living room a lounge, a sitting room, a front room, or a parlor.',
    photos: SUITES_PHOTOS.slice(getRandomNumber(0,SUITES_PHOTOS.length - 1)),
  }
  return {author, offer, location};
};

const getFakeSuitesData = function (howManyNumber = ADS_NUMBER) {
  const data = new Array(howManyNumber).fill(null).map(function () {
    return createSuites();
  });

  return data;
}



export {getFakeSuitesData};
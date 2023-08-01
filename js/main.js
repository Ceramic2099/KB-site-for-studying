/* global _:readonly */
import './fake-data.js';
import './ads.js';
import {setAdsFormSubmit, setFilterTypeChange, setFilterPriceChange, setFilterRoomsChange, setFilterGuestChange, setFilterFeaturesChange} from './form.js';
import {renderAds} from './map.js';
import {getData} from './api.js';
import {showAlert} from './util.js';
import './photos.js';

const RENDER_DELAY = 500;

getData (function(ads) {
  renderAds(ads);
  () => showAlert('Не удалось получить данные', 'red');
  setFilterTypeChange(_.throttle(function() {return renderAds(ads)}, RENDER_DELAY));
  setFilterTypeChange(_.throttle(function() {return renderAds(ads)}, RENDER_DELAY));
  setFilterPriceChange(_.throttle(function() {return renderAds(ads)}, RENDER_DELAY));
  setFilterRoomsChange(_.throttle(function() {return renderAds(ads)}, RENDER_DELAY));
  setFilterGuestChange(_.throttle(function() {return renderAds(ads)}, RENDER_DELAY));
  setFilterFeaturesChange(_.throttle(function() {return renderAds(ads)}, RENDER_DELAY));
});

setAdsFormSubmit();
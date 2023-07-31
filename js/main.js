/* global _:readonly */
import './data.js';
import './ads.js';
import {setAdsFormSubmit, setFilterTypeChange, setFilterPriceChange, setFilterRoomsChange, setFilterGuestChange, setFilterFeaturesChange} from './form.js';
import {renderAds} from './map.js';
import {getData} from './api.js';
import {showAlert} from './util.js';

const RENDER_DELAY = 500;

getData ((ads) => {
  renderAds(ads);
  () => showAlert('Не удалось получить данные', 'red');
  setFilterTypeChange(_.throttle(() => renderAds(ads), RENDER_DELAY));
  setFilterPriceChange(_.throttle(() => renderAds(ads), RENDER_DELAY));
  setFilterRoomsChange(_.throttle(() => renderAds(ads),RENDER_DELAY));
  setFilterGuestChange(_.throttle(() => renderAds(ads),RENDER_DELAY));
  setFilterFeaturesChange(_.throttle(() => renderAds(ads), RENDER_DELAY));
});

setAdsFormSubmit();
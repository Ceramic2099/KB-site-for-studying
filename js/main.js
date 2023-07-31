import './data.js';
import './ads.js';
import {setAdsFormSubmit, setFilterTypeChange, setFilterPriceChange, setFilterRoomsChange, setFilterGuestChange, setFilterFeaturesChange} from './form.js';
import {renderAds} from './map.js';
import {getData} from './api.js';
import {showAlert} from './util.js';



getData ((ads) => {
  renderAds(ads);
  () => showAlert('Не удалось получить данные', 'red');
  setFilterTypeChange(() => renderAds(ads));
  setFilterPriceChange(() => renderAds(ads));
  setFilterRoomsChange(() => renderAds(ads));
  setFilterGuestChange(() => renderAds(ads));
  setFilterFeaturesChange(() => renderAds(ads));
});

setAdsFormSubmit();
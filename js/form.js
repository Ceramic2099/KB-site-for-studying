const addAdsForm = document.querySelector('.ad-form');
const typeSelector = addAdsForm.querySelector('#type');
const priceSelector = addAdsForm.querySelector('#price');
const chekin = addAdsForm.querySelector('#timein');
const checkout = addAdsForm.querySelector('#timeout');

const rooms = addAdsForm.querySelector('#room_number');
const capacitys = addAdsForm.querySelector('#capacity');

capacitys.disabled = true;

rooms.addEventListener('change', function (){
  capacitys.disabled = false;
  switch (rooms.value) {
    case '1' :
      capacitys.querySelector('[value = "0"]').disabled = true,
      capacitys.querySelector('[value = "1"]').disabled = false,
      capacitys.querySelector('[value = "2"]').disabled = true,
      capacitys.querySelector('[value = "3"]').disabled = true;
      break;
    case '2' :
      capacitys.querySelector('[value = "0"]').disabled = true,
      capacitys.querySelector('[value = "1"]').disabled = false,
      capacitys.querySelector('[value = "2"]').disabled = false,
      capacitys.querySelector('[value = "3"]').disabled = true;
      break;
    case '3' :
      capacitys.querySelector('[value = "0"]').disabled = true,
      capacitys.querySelector('[value = "1"]').disabled = false,
      capacitys.querySelector('[value = "2"]').disabled = false,
      capacitys.querySelector('[value = "3"]').disabled = false;
      break;
    case '100' :
      capacitys.querySelector('[value = "0"]').disabled = false,
      capacitys.querySelector('[value = "1"]').disabled = true,
      capacitys.querySelector('[value = "2"]').disabled = true,
      capacitys.querySelector('[value = "3"]').disabled = true;
      break;
  }
})

function setCheckSelector (timeIn, timeOut) {
  switch (timeIn.value) {
    case '12:00' :
      timeOut.querySelector('[value = "12:00"]').selected = true;
      break;
    case '13:00' :
      timeOut.querySelector('[value = "13:00"]').selected = true;
      break;
    case '14:00' :
      timeOut.querySelector('[value = "14:00"]').selected = true;
      break;
  }
}

chekin.addEventListener('change', function () {
  setCheckSelector(chekin, checkout);
});

checkout.addEventListener('change', function () {
  setCheckSelector(checkout, chekin);
});

typeSelector.addEventListener('change', function () {
  switch (typeSelector.value) {
    case 'bungalow' :
      priceSelector.placeholder = '0';
      priceSelector.min = '0';
      break;
    case 'flat' :
      priceSelector.placeholder = '1000';
      priceSelector.min = '1000';
      break;
    case 'house' :
      priceSelector.placeholder = '5000';
      priceSelector.min = '5000';
      break;
    case 'palace' :
      priceSelector.placeholder = '10000';
      priceSelector.min = '10000';
      break;
  }
});
const getData = function (onSuccess, OnFail) {
  fetch('https://23.javascript.pages.academy/keksobooking/data')
    .then(function(response) {
      if (response.ok) {
        return response.json();
      } else {
        OnFail();
      }
    })
    .then(function(ads) {
      onSuccess(ads)
    })
    .catch(function() {
      OnFail();
    });
};

const sendData = function (onSuccess, OnFail, body, clearForm) {
  fetch('https://23.javascript.pages.academy/keksobookin',
    {
      method: 'POST',
      type: 'multipart/form-data',
      body,
    },
  ).then(function(response){
    if (response.ok) {
      onSuccess();
      clearForm();
    } else {
      OnFail();
    }
  })
    .catch(function(){
      OnFail();
    })
};

export {getData, sendData};
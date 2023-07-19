const getData = (onSuccess, OnFail) =>
{fetch('https://23.javascript.pages.academy/keksobooking/data')
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      OnFail();
    }
  })
  .then((ads) => {
    onSuccess(ads)
  })
  .catch(() => {
    OnFail();
  });
};

export {getData};
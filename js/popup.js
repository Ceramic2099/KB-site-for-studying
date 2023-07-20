
const errorMessageTemplate = document.querySelector('#error').content;
const closeSubmitErorrBtn = errorMessageTemplate.querySelector('.error__button');

function formSendSuccess() {
  const sucessMessage = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
  document.body.append(sucessMessage);
  popupCloseLisners(sucessMessage);
}

function formSendError() {
  const errorMessage = errorMessageTemplate.querySelector('.error').cloneNode(true);
  document.body.append(errorMessage);
  popupCloseLisners(errorMessage, closeSubmitErorrBtn);
}

function popupCloseLisners(popup, button) {
  if (button) {
    button.addEventListener('click', function() {
      popup.remove();
    })
  }
  document.addEventListener('click', function() {
    popup.remove();
  })
  window.addEventListener('keydown', function(evt) {
    if (evt.key === 'Escape') {
      popup.remove();
    }
  })

}

export {formSendSuccess, formSendError};
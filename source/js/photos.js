const FILE_TYPES = ['jpg', 'jpeg', 'png']

const fileForAvatarChooser = document.querySelector('#avatar');
const previewForAvatar = document.querySelector('.ad-form-header__preview img');

const fileForAdsChooser = document.querySelector('#images');
const previewForAdsBlock = document.querySelector('.ad-form__photo');

fileForAvatarChooser.addEventListener('change', function () {
  const file = fileForAvatarChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some(function(it) {
    return fileName.endsWith(it);
  });

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', function () {
      previewForAvatar.src = reader.result;
    });

    reader.readAsDataURL(file);
  }
});

fileForAdsChooser.addEventListener('change', function () {
  const file = fileForAdsChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some(function(it) {
    return fileName.endsWith(it);
  });

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', function () {
      const imgElement = document.createElement('img')
      imgElement.src = reader.result;
      imgElement.style.width = '70px';
      imgElement.style.height = '70px';
      imgElement.alt = 'Ads photos ' + file.name;
      previewForAdsBlock.appendChild(imgElement);
    });

    reader.readAsDataURL(file);
  }
})
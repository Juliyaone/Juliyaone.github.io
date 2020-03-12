'use strict';

(function () {
  var MAP_PIN_LEG = 20;
  var map = document.querySelector('.map');
  var mapPinMain = document.querySelector('.map__pin--main');
  var adForm = document.querySelector('.ad-form');
  var adFormfields = adForm.querySelectorAll('.ad-form__element');
  var filterСontainer = document.querySelector('.map__filters');
  var mapFilters = filterСontainer.querySelectorAll('.map__filter');
  var featuresСontainer = document.querySelector('.map__features');
  var adFormHeader = adForm.querySelector('.ad-form-header');
  var mapOverlay = document.querySelector('.map__overlay');
  var fieldAddress = document.getElementById('address');


  mapPinMain.style.left = Math.floor((mapOverlay.clientWidth / 2) - (mapPinMain.offsetWidth / 2)) + 'px';
  mapPinMain.style.top = Math.floor((mapOverlay.clientHeight / 2) - mapPinMain.offsetHeight - MAP_PIN_LEG) + 'px';

  var srartingCoordinateX = mapPinMain.style.left;
  var srartingCoordinateY = mapPinMain.style.top;

  var removeAttributeDisabled = function (elem) { // Удаляет атрибут disabled
    for (var i = 0; i < elem.length; i++) {
      elem[i].disabled = false;
      elem[i].disabled = '';
    }
  };

  var activatesFilter = function () {
    filterСontainer.classList.remove('map__filters--disabled'); // Активируем все фильтры
    removeAttributeDisabled(mapFilters); // Активируем фильтры по отдельности
    featuresСontainer.disabled = false; // Aктивируем все features
    featuresСontainer.disabled = '';
  };

  var activatesForm = function () {
    adForm.classList.remove('ad-form--disabled'); // Активируем форму
    removeAttributeDisabled(adFormfields); // Удаляет атрибут disablet у полей формы
    adFormHeader.disabled = false; // Aктивируем поле с фото
    adFormHeader.disabled = '';
  };

  var getCoordinats = function () {
    mapPinMain.style.left = srartingCoordinateX;
    mapPinMain.style.top = srartingCoordinateY;
    var coordLeftStarting = parseInt(mapPinMain.style.left, 10) + Math.round(mapPinMain.offsetWidth / 2);
    var coordTopStarting = parseInt(mapPinMain.style.top, 10) + Math.round(mapPinMain.offsetHeight + MAP_PIN_LEG);
    fieldAddress.value = coordLeftStarting + ', ' + coordTopStarting;
  };

  var activatesPage = function () {
    window.validationForm.resetClickHandler();
    window.card.close();
    map.classList.remove('map--faded');
    window.backend.load(window.loadingPins.success, window.loadingPins.error, window.loadingPins.nodNetwork);
    mapPinMain.removeEventListener('mousedown', mapPinMainClickHandler);
    getCoordinats();
  };

  var mapPinMainClickHandler = function () {
    activatesPage();
    activatesForm();
  };

  mapPinMain.addEventListener('mousedown', mapPinMainClickHandler);

  var filterChangeHandler = window.util.debounce(function () {
    window.inactivePage.removePin();
    window.render.pin(window.filter.pin(window.loadingPins.allPins));
    window.card.open();
  });

  filterСontainer.addEventListener('change', function () {
    filterChangeHandler();
  });

  window.activePage = {
    srartingCoordinateX: srartingCoordinateX,
    srartingCoordinateY: srartingCoordinateY,
    mapPinMainClickHandler: mapPinMainClickHandler,
    activatesFilter: activatesFilter,
    activatesForm: activatesForm,
    activatesPage: activatesPage
  };
})();

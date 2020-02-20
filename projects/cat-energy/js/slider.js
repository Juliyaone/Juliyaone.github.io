'use strict';
var initComparisons = function () {
  var x = document.getElementsByClassName('img-overlay');

  var compareImages = function (img) {
    var img, clicked = 0;
    var widthImg = img.offsetWidth;
    var h = img.offsetHeight;
    img.style.width = (widthImg / 2) + 'px';

    var sliderImg = document.createElement('div');
    sliderImg.setAttribute('class', 'slider__controls-border-point');
    img.parentElement.insertBefore(sliderImg, img);

/* Поместите ползунок посередине: */
    sliderImg.style.top = h - 95 + 'px';
    sliderImg.style.left = (widthImg / 2) - (sliderImg.offsetWidth / 2) + 'px';
/* Выполнить функцию при нажатии кнопки мыши: */
    var slideReady = function (evt) {
/* Предотвращение любых других действий, которые могут возникнуть при перемещении по изображению: */
      evt.preventDefault();
/* Теперь ползунок нажат и готов к перемещению: */
      clicked = 1;
/* Выполнить функцию при перемещении ползунка: */
      window.addEventListener('mousemove', slideMove);
      window.addEventListener('touchmove', slideMove);
    }
    var slideFinish = function () {
/* Слайдер больше не нажимается: */
      clicked = 0;
    }
    sliderImg.addEventListener('mousedown', slideReady);
/* И еще одна функция, когда кнопка мыши отпущена:*/
    window.addEventListener('mouseup', slideFinish);
/* Или коснулся (для сенсорных экранов: */
    sliderImg.addEventListener('touchstart', slideReady);
/* И выпущен (для сенсорных экранов: */
    window.addEventListener('touchstop', slideFinish);

    var slideMove = function (evt) {
/* Если ползунок больше не нажимается, выйдите из этой функции: */
      if (clicked == 0) return false;
/* Получить позицию курсора x: */
      var pos = getCursorPos(evt)
      var gapLeft = 170;
      var gapRight = 593;
/* Предотвратить размещение ползунка за пределами изображения: */
      if (pos < gapLeft) {
        pos = gapLeft;
      }
      if (pos > gapRight) {
        pos = gapRight;
      }
/* Выполнить функцию, которая изменит размер наложенного изображения в соответствии с курсором: */
      slide(pos);
    }

    var getCursorPos = function (evt) {
      var x = 0;
      evt = evt || window.event;
/* Получить x позиций изображения: */
      var a = img.getBoundingClientRect();
/* Рассчитать координату x курсора относительно изображения: */
      x = evt.pageX - a.left;
/* Рассмотрим любую прокрутку страницы: */
      x = x - window.pageXOffset;
      return x;
    }

    var slide = function (x) {
/* Изменить размер изображения: */
      img.style.width = x + 'px';
/* Установить ползунок: */
      sliderImg.style.left = img.offsetWidth - (sliderImg.offsetWidth / 2) + 'px';
    }
  }

  for (var i = 0; i < x.length; i++) {
/* Один раз для каждого элемента 'оверлей':
     передать элемент 'оверлей' в качестве параметра при выполнении функции compareImages: */
    compareImages(x[i]);
  }
}

initComparisons();

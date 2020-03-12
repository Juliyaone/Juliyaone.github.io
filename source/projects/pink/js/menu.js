var navMain = document.querySelector('.main-nav');
var navCross = document.querySelector('.site-list__item-cross');
var navToggle = document.querySelector('.site-list__item-toggle');

        navCross.addEventListener('click', function() {
          if (navMain.classList.contains('main-nav--closed')) {
            navMain.classList.remove('main-nav--closed');
            navMain.classList.add('main-nav--opened');
          } else {
            navMain.classList.add('main-nav--closed');
            navMain.classList.remove('main-nav--opened');
          }
        });

var navMain = document.querySelector('.main-nav');
var navCross = document.querySelector('.site-list__item-cross');
var navToggle = document.querySelector('.site-list__item-toggle');

        navToggle.addEventListener('click', function() {
          if (navMain.classList.contains('main-nav--opened')) {
            navMain.classList.remove('main-nav--opened');
            navMain.classList.add('main-nav--closed');
          } else {
            navMain.classList.add('main-nav--opened');
            navMain.classList.remove('main-nav--closed');
          }

        });

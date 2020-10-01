'use strict';

var toggle = document.querySelector('.page-header__toggle');
var cross = document.querySelector('.page-header__cross');
var menu = document.querySelector('.page-header__main-nav');
var account = document.querySelector('.page-header__account');
var toggleWrapper = document.querySelector('.page-header__toggle-wrapper');

if (toggleWrapper.classList.contains('toggle--nojs')) {
  toggleWrapper.classList.remove('toggle--nojs');
}

menu.classList.add('main-nav--closed');
account.classList.add('account--closed');

toggle.addEventListener('click', function() {
  if (menu.classList.contains('main-nav--closed')) {
    menu.classList.remove('main-nav--closed');
    menu.classList.add('main-nav--opened');
  }

  if (account.classList.contains('account--closed')) {
    account.classList.remove('account--closed');
    account.classList.add('account--opened');
  }
});

toggle.addEventListener('click', function() {
  if (toggle.classList.contains('page-header__toggle--active')) {
    toggle.classList.remove('page-header__toggle--active');
    toggle.classList.add('page-header__toggle--none');
    cross.classList.remove('page-header__cross--none');
    cross.classList.add('page-header__cross--active');
  }
});

cross.addEventListener('click', function() {
  if (menu.classList.contains('main-nav--opened')) {
    menu.classList.remove('main-nav--opened');
    menu.classList.add('main-nav--closed');
  }

  if (account.classList.contains('account--opened')) {
    account.classList.remove('account--opened');
    account.classList.add('account--closed');
  }
});

cross.addEventListener('click', function() {
  if (cross.classList.contains('page-header__cross--active')) {
    cross.classList.remove('page-header__cross--active');
    cross.classList.add('page-header__cross--none');
    toggle.classList.remove('page-header__toggle--none');
    toggle.classList.add('page-header__toggle--active');
  }
});

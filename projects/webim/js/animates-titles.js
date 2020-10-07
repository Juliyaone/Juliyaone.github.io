let titles = document.querySelectorAll('.installation__header');

titles.forEach((el, i) => {
  if (!el.classList.contains('installation__header--hidden')) {
    el.classList.add('installation__header--hidden');
  }

  if (el.classList.contains('installation__header--active')) {
    el.classList.remove('installation__header--active');
  }
});


function scrollHendler() {
  titles.forEach((el, i) => {

    if (pageYOffset > (el.offsetTop - window.innerHeight - el.clientHeight) && pageYOffset < (el.offsetTop + el.clientHeight)) {

      titles[i].classList.add('installation__header--active');
      titles[i].classList.remove('installation__header--hidden');
    }
  });
};

scrollHendler();

window.addEventListener('scroll', scrollHendler);

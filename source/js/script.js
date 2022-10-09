// import { mediaQuery, openNavigation } from "./burger-menu.js";

// openNavigation(mediaQuery);
// mediaQuery.addEventListener('change', openNavigation);

const burger = document.querySelector('.user-menu__burger');
const nav = document.querySelector('.navigation');
const mediaQuery = window.matchMedia('(max-width: 767px)');

function openNavigation(media) {
  if (media.matches) {
    burger.classList.remove('user-menu__burger--nojs');
    nav.classList.add('navigation--js');
    nav.classList.add('hidden');

    burger.addEventListener('click', () => {
      burger.classList.toggle('user-menu__burger--close');
      nav.classList.toggle('hidden');
    });
  } else {
    burger.classList.add('user-menu__burger--nojs');
    burger.classList.remove('user-menu__burger--close');
    nav.classList.remove('navigation--js');
    nav.classList.remove('hidden');
  }
};

openNavigation(mediaQuery);
mediaQuery.addEventListener('change', openNavigation);


const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  initialSlide: 0,
});

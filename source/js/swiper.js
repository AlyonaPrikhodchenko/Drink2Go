const openSwiper = () => {
  new Swiper('.swiper', {
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
};

export { openSwiper };

const slider1 = document.querySelector('.swiper-container');

let mySwiper = new Swiper(slider1, {
//  количество
    slidesPerView: 8,
//    отступ
    spaceBetween: 10,
    speed: 500,
 // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
//mousewheel: {
//    invert: true,
//  },

})



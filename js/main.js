// main_banner
const mb = new Swiper(".mb", {

   pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
   },

   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },

   /*    effect: 'fade',
      fadeEffect: {
         crossFade: true
      }, */
   loop: true,
   speed: 1000,
   clickable: true,

   autoplay: {
      delay: 3000,
      disableOnIneraction: false,
   },

});

// menu

const menu = new Swiper(".menu", {

   breakpoints: {
      1000: {
         slidesPerView: 4,
      },
   },

   slidesPerView: 2,
   spaceBetween: 50,

   centeredSlides: true,
   speed: 1000,
   loop: true,

   autoplay: {
      delay: 2000,
      disableOnIneraction: false,
   },

})
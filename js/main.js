
$(document).ready(function () {

   AOS.init();

   // You can also pass an optional settings object
   // below listed default settings
   AOS.init({
     // Global settings:
     disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
     startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
     initClassName: 'aos-init', // class applied after initialization
     animatedClassName: 'aos-animate', // class applied on animation
     useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
     disableMutationObserver: false, // disables automatic mutations' detections (advanced)
     debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
     throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
     
   
     // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
     offset: 0, // offset (in px) from the original trigger point
     delay: 0, // values from 0 to 3000, with step 50ms
     duration: 400, // values from 0 to 3000, with step 50ms
     easing: 'ease', // default easing for AOS animations
     once: false, // whether animation should happen only once - while scrolling down
     mirror: false, // whether elements should animate out while scrolling past them
     anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
   
   });

   // gnb
   $(".inner .aboutme").hide();
   $(".gnb>li").click(function () {
      $(this).addClass("active");
      $(this).siblings().removeClass("active");
   })
   $(".gnb>li:nth-child(1)").click(function () {
      $("#main .menu").fadeOut(0);
      $(".result").fadeOut(0);
      $(".aboutme").fadeIn(300);
   })
   $(".gnb>li:nth-child(2)").click(function () {
      $(".aboutme").fadeOut(0);
      $("#main .menu").fadeIn(300);
      $(".result").fadeIn(300);
   })

   // inner result tab
   $(".menu li:nth-child(1)").click(function () {
      $(this).addClass("active");
      $(this).siblings().removeClass("active");
      $(".inner .uiux").fadeIn(300);
      $(".inner .web").fadeIn(300);
      $(".inner .design").fadeIn(300);
   })
   $(".menu li:nth-child(2)").click(function () {
      $(this).addClass("active");
      $(this).siblings().removeClass("active");
      $(".inner .uiux").fadeIn(300);
      $(".inner .web").fadeOut(0);
      $(".inner .design").fadeOut(0);
   })
   $(".menu li:nth-child(3)").click(function () {
      $(this).addClass("active");
      $(this).siblings().removeClass("active");
      $(".inner .web").fadeIn(300);
      $(".inner .uiux").fadeOut(0);
      $(".inner .design").fadeOut(0);
   })
   $(".menu li:nth-child(4)").click(function () {
      $(this).addClass("active");
      $(this).siblings().removeClass("active");
      $(".inner .design").fadeIn(300);
      $(".inner .uiux").fadeOut(0);
      $(".inner .web").fadeOut(0);
   })

   // swiper result
   $(".re_close").hide();
   $(".re_bg").hide();

   $(".re_acheal").hide();
   $(".link .acheal").click(function () {
      $(".re_close").fadeIn();
      $(".re_bg").fadeIn();
      $(".re_acheal").fadeIn();
   })
   $(".re_close").click(function () {
      $(".re_close").hide();
      $(".re_bg").hide();
      $(".re_acheal").hide();
   })
   var re_acheal = new Swiper(".re_acheal", {
      navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
       },
       clickable: true,
       loop: true,
   });

   $(".re_iconposter").hide();
   $(".link .iconposter").click(function () {
      $(".re_close").fadeIn();
      $(".re_bg").fadeIn();
      $(".re_iconposter").fadeIn();
   })
   $(".re_close").click(function () {
      $(".re_close").hide();
      $(".re_bg").hide();
      $(".re_iconposter").hide();
   })
   var re_iconposter = new Swiper(".re_iconposter", {
      navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
       },
       clickable: true,
       loop: true,
   });

   $(".re_whale").hide();
   $(".link .whale").click(function () {
      $(".re_close").fadeIn();
      $(".re_bg").fadeIn();
      $(".re_whale").fadeIn();
   })
   $(".re_close").click(function () {
      $(".re_close").hide();
      $(".re_bg").hide();
      $(".re_whale").hide();
   })
   var re_whale = new Swiper(".re_whale", {
      navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
       },
       clickable: true,
       loop: true,
   });

   $(".re_phonecase").hide();
   $(".link .phonecase").click(function () {
      $(".re_close").fadeIn();
      $(".re_bg").fadeIn();
      $(".re_phonecase").fadeIn();
   })
   $(".re_close").click(function () {
      $(".re_close").hide();
      $(".re_bg").hide();
      $(".re_phonecase").hide();
   })
   var re_phonecase = new Swiper(".re_phonecase", {
      navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
       },
       clickable: true,
       loop: true,
   });

   $(".re_sati").hide();
   $(".link .sati").click(function () {
      $(".re_close").fadeIn();
      $(".re_bg").fadeIn();
      $(".re_sati").fadeIn();
   })
   $(".re_close").click(function () {
      $(".re_close").hide();
      $(".re_bg").hide();
      $(".re_sati").hide();
   })
   var re_sati = new Swiper(".re_sati", {
      navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
       },
       clickable: true,
       loop: true,
   });

   $(".re_fastorder").hide();
   $(".link .fastorder").click(function () {
      $(".re_close").fadeIn();
      $(".re_bg").fadeIn();
      $(".re_fastorder").fadeIn();
   })
   $(".re_close").click(function () {
      $(".re_close").hide();
      $(".re_bg").hide();
      $(".re_sati").hide();
   })

   $(".re_MS").hide();
   $(".link .MS").click(function () {
      $(".re_close").fadeIn();
      $(".re_bg").fadeIn();
      $(".re_MS").fadeIn();
   })
   $(".re_close").click(function () {
      $(".re_close").hide();
      $(".re_bg").hide();
      $(".re_MS").hide();
   })

   $(".re_puppy").hide();
   $(".link .puppy").click(function () {
      $(".re_close").fadeIn();
      $(".re_bg").fadeIn();
      $(".re_puppy").fadeIn();
   })
   $(".re_close").click(function () {
      $(".re_close").hide();
      $(".re_bg").hide();
      $(".re_puppy").hide();
   })

   $(".re_malJaranda").hide();
   $(".link .malJaranda").click(function () {
      $(".re_close").fadeIn();
      $(".re_bg").fadeIn();
      $(".re_malJaranda").fadeIn();
   })
   $(".re_close").click(function () {
      $(".re_close").hide();
      $(".re_bg").hide();
      $(".re_malJaranda").hide();
   })

})

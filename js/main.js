$(document).ready(function () {

   // new
   $(".new_img ul li:not(:first-child)").hide();

   $(".new_name li").click(function () {
      $(this).addClass("active").siblings().removeClass("active");
      let idx = $(this).index();
      $(".new_img li").eq(idx).fadeIn(300).siblings().fadeOut(0);
   })

   $(".menu li").click(function () {
      $(this).addClass("active").siblings().removeClass("active");
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

   $(".re_MS").hide();
   $(".link .MS").click(function () {
      $(".re_close").fadeIn();
      $(".re_bg").fadeIn();
      $(".re_MS").fadeIn();
   })

   $(".re_puppy").hide();
   $(".link .puppy").click(function () {
      $(".re_close").fadeIn();
      $(".re_bg").fadeIn();
      $(".re_puppy").fadeIn();
   })

   $(".re_malJaranda").hide();
   $(".link .malJaranda").click(function () {
      $(".re_close").fadeIn();
      $(".re_bg").fadeIn();
      $(".re_malJaranda").fadeIn();
   })

}); //문서 준비 이벤트 종료(삭제X)

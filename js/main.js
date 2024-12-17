$(document).ready(function () {



   // const text = document.querySelector(".myTxt p").innerHTML; // p 요소의 HTML 가져오기
   // const typingElement = document.querySelector(".myTxt p");
   // typingElement.innerHTML = ""; // 초기화
   // let index = 0;

   // function type() {
   //    if (index < text.length) {
   //       if (text.charAt(index) === '<') {
   //          // <br> 태그를 만났을 때
   //          while (text.charAt(index) !== '>') {
   //             index++; // >까지 인덱스 증가
   //          }
   //          typingElement.innerHTML += '<br>'; // 줄 바꿈 추가
   //       } else {
   //          typingElement.innerHTML += text.charAt(index); // 현재 인덱스의 문자 추가
   //       }
   //       index++;
   //       setTimeout(type, 10); // 50ms 후에 다음 문자 타이핑
   //    }
   // }

   // type(); // 타이핑 시작

   // profile
   $(".pro-hover").hide();
   $(".profile").mouseenter(function () {
      $(".pro-hover").fadeIn();
   })
   $(".profile").mouseleave(function () {
      $(".pro-hover").fadeOut();
   })


   // gnb
   $(".inner .aboutme").hide();
   $(".gnb>li").click(function () {
      $(this).addClass("active");
      $(this).siblings().removeClass("active");
   })
   $(".gnb>li:nth-child(1)").click(function () {
      $("#main .menu").hide(0, function () {
         $(this).css("display", "none"); // hide 후 display: none 설정
      });
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
   
   $(".re_bymeal").hide();
   $(".link .bymeal").click(function () {
      $(".re_close").fadeIn();
      $(".re_bg").fadeIn();
      $(".re_bymeal").fadeIn();
   })
   $(".re_close").click(function () {
      $(".re_close").hide();
      $(".re_bg").hide();
      $(".re_bymeal").hide();
   })

   $(".re_mulmangcho").hide();
   $(".link .mulmangcho").click(function () {
      $(".re_close").fadeIn();
      $(".re_bg").fadeIn();
      $(".re_mulmangcho").fadeIn();
   })
   $(".re_close").click(function () {
      $(".re_close").hide();
      $(".re_bg").hide();
      $(".re_mulmangcho").hide();
   })

   $(".re_sayou").hide();
   $(".link .sayou").click(function () {
      $(".re_close").fadeIn();
      $(".re_bg").fadeIn();
      $(".re_sayou").fadeIn();
   })
   $(".re_close").click(function () {
      $(".re_close").hide();
      $(".re_bg").hide();
      $(".re_sayou").hide();
   })

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

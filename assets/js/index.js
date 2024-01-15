
  window.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper('.swiper', {
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false
          }
        },
        576: {
          slidesPerView: 1,
          spaceBetween: 0,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false
          }
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        }
      }
    });
    
  })
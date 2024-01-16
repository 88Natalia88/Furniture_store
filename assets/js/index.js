
  window.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper('.swiper', {
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false
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
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        }
      }
    });
    
  })
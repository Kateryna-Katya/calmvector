import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

let mySwiper = null;

function initSwiper() {
  const isDesktop = window.innerWidth >= 1440;

  // якщо десктоп — знищуємо
  if (isDesktop && mySwiper) {
    mySwiper.destroy(true, true);
    mySwiper = null;
    return;
  }

  // якщо мобілка/планшет — створюємо
  if (!isDesktop && !mySwiper) {
    mySwiper = new Swiper('.my-swiper', {
      modules: [Autoplay],

      loop: true,
      speed: 6000,
      allowTouchMove: false,
      grabCursor: false,

      slidesPerView: 1,
      spaceBetween: 20,

      autoplay: {
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      },
    });
  }
}

// ініціалізація
initSwiper();

// перевірка при ресайзі
window.addEventListener('resize', initSwiper);
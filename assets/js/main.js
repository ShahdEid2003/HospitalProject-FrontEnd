//slider-MainImages
const images = document.querySelectorAll('.carousel-item .image');
const zoomButtonNext = document.querySelector('.carousel-control-next');
const zoomButtonPre = document.querySelector('.carousel-control-prev');
const animations = ['glitch', 'zoom-in', 'fade-in', 'slide-in'];

zoomButtonNext.addEventListener('click', () => {
  images.forEach(image => {

    animations.forEach(animation => image.classList.remove(animation));

    const randomAnimation = animations[Math.floor(Math.random() * animations.length)];

    image.classList.add(randomAnimation);
  });
});
zoomButtonPre.addEventListener('click', () => {
  images.forEach(image => {

    animations.forEach(animation => image.classList.remove(animation));

    const randomAnimation = animations[Math.floor(Math.random() * animations.length)];

    image.classList.add(randomAnimation);
  });
});

//medical-services
const swiper = new Swiper('.swiper-container', {
  spaceBetween: 110,
  freeMode: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
    },

    400: {
      slidesPerView: 1.5,
    },

    550: {
      slidesPerView: 2,
    },
    700: {
      slidesPerView: 2.7,
    },
    1200: {
      slidesPerView: 4,
    },

  },
});
//our-specility
let currentSlide = 0;
function showSlide(index) {
  const slides = document.querySelectorAll('.our-specility .slide');
  slides[currentSlide].style.display = 'none';
  currentSlide = index;
  slides[currentSlide].style.display = 'flex';
}
showSlide(0);

//speciliest-Doctors
var swiper3 = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 0,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    300: {
      slidesPerView: .5,
      spaceBetween: 10,
    },
    350: {
      slidesPerView: .7,
      spaceBetween: 10,
    },
    450: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    750: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },

    800: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    1042: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    1102: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

  },
});
//statistics
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll('.statistics .count');
  const speed = 200;

  const startCounting = (counter) => {
    const target = +counter.getAttribute('data-target');
    counter.innerText = "0";
    const updateCount = () => {
      const count = +counter.innerText;
      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 10);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startCounting(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => {
    observer.observe(counter);
  });
});
// testimonial
const bgTest = document.querySelectorAll('.carousel-item .testimonial-card');
const ButtonNext = document.querySelector('.testimonial .carousel-control-next');
const ButtonPre = document.querySelector('.testimonial .carousel-control-prev');
const animationsTest = ['zoom-in', 'fade-in', 'slide-in'];
ButtonNext.addEventListener('click', () => {
  bgTest.forEach(bgTest => {

    animationsTest.forEach(animationsTest => bgTest.classList.remove(animationsTest));

    const randomAnimation = animationsTest[Math.floor(Math.random() * animationsTest.length)];

    bgTest.classList.add(randomAnimation);
  });
});
ButtonPre.addEventListener('click', () => {
  bgTest.forEach(bgTest => {

    animationsTest.forEach(animationsTest => bgTest.classList.remove(animationsTest));

    const randomAnimation = animationsTest[Math.floor(Math.random() * animationsTest.length)];

    bgTest.classList.add(randomAnimation);
  });
});



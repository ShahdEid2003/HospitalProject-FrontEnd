
const images = document.querySelectorAll('.carousel-item .image');
const zoomButtonNext = document.querySelector('.carousel-control-next');
const zoomButtonPre = document.querySelector('.carousel-control-prev');
const animations = ['glitch', 'zoom-in', 'fade-in','slide-in'];


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

const swiper = new Swiper('.swiper-container', {
    spaceBetween: -100,
    freeMode: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
     
      640: {
        slidesPerView: 1,
      },
      
      768: {
        slidesPerView: 2,
      },
     
      1024: {
        slidesPerView: 3,
      },
    },
  });
 
  
  
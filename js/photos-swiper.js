
const PhotosSwiper = new Swiper('.photos__swiper', {
  loop: true,
  freeMode: true,
  spaceBetween: 8,
  grabCursor: true,
  slidesPerView: "auto",
  loop: true,
  autoplay: {
    delay: 1,
    disableOnInteraction: true
  },
  freeMode: true,
  speed: 5000,
  freeModeMomentum: false,
  preventInteractionOnTransition: true,
    
})
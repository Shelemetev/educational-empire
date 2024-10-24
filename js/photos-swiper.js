
const PhotosSwiper = new Swiper('.photos__swiper', {
    spaceBetween: 8,
    slidesPerView: "auto",
    loop: true,
    freeMode: true,
    preventInteractionOnTransition: true,
    autoplay: {
      delay: 1,
    },
    speed: 5000,
    centeredSlides:true,
})
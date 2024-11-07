
document.addEventListener('DOMContentLoaded', () => {
  const PhotosSwiper = new Swiper('.photos__swiper', {
    loop: true,
    freeMode: true,
    spaceBetween: 8,
    slidesPerView: "auto",
    speed: 5000,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
  })
})